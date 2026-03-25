import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const INSTAGRAM_APP_ID = process.env.INSTAGRAM_APP_ID!
const INSTAGRAM_APP_SECRET = process.env.INSTAGRAM_APP_SECRET!
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_SITE_URL}/api/instagram/callback`

// Función para intercambiar código por token de corta duración
async function getShortLivedToken(code: string) {
  const url = 'https://api.instagram.com/oauth/access_token'
  
  const formData = new URLSearchParams({
    client_id: INSTAGRAM_APP_ID,
    client_secret: INSTAGRAM_APP_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: REDIRECT_URI,
    code: code,
  })

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Failed to get short-lived token: ${error}`)
  }

  return response.json()
}

// Función para convertir token de corta duración a larga duración
async function getLongLivedToken(shortToken: string) {
  const url = `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${INSTAGRAM_APP_SECRET}&access_token=${shortToken}`

  const response = await fetch(url)

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Failed to get long-lived token: ${error}`)
  }

  return response.json()
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const error = searchParams.get('error')
  const errorReason = searchParams.get('error_reason')
  const errorDescription = searchParams.get('error_description')

  // Si hay error en la autorización
  if (error) {
    console.error('Instagram OAuth Error:', {
      error,
      errorReason,
      errorDescription,
    })

    return NextResponse.redirect(
      new URL(
        `/?error=instagram_auth_failed&reason=${errorReason}`,
        request.url
      )
    )
  }

  // Si no hay código, algo salió mal
  if (!code) {
    return NextResponse.redirect(
      new URL('/?error=no_code_received', request.url)
    )
  }

  try {
    // Paso 1: Obtener token de corta duración
    console.log('Getting short-lived token...')
    const shortTokenData = await getShortLivedToken(code)
    console.log('Short-lived token obtained:', shortTokenData.access_token.substring(0, 20) + '...')

    // Paso 2: Convertir a token de larga duración (60 días)
    console.log('Converting to long-lived token...')
    const longTokenData = await getLongLivedToken(shortTokenData.access_token)
    console.log('Long-lived token obtained. Expires in:', longTokenData.expires_in, 'seconds')

    // Aquí deberías guardar el token en una base de datos
    // Por ahora, solo lo mostramos para que lo agregues manualmente a .env.local
    
    const tokenInfo = {
      access_token: longTokenData.access_token,
      expires_in: longTokenData.expires_in,
      user_id: shortTokenData.user_id,
      expires_at: new Date(Date.now() + longTokenData.expires_in * 1000).toISOString(),
    }

    console.log('\n=== IMPORTANTE: Agrega este token a tu .env.local ===')
    console.log('INSTAGRAM_ACCESS_TOKEN=' + tokenInfo.access_token)
    console.log('Este token expira en:', Math.floor(tokenInfo.expires_in / (24 * 60 * 60)), 'días')
    console.log('Fecha de expiración:', tokenInfo.expires_at)
    console.log('===================================================\n')

    // Redirigir al home con mensaje de éxito
    return NextResponse.redirect(
      new URL(
        `/?instagram_connected=true&expires_in=${Math.floor(tokenInfo.expires_in / (24 * 60 * 60))}`,
        request.url
      )
    )

  } catch (error) {
    console.error('Error during Instagram OAuth:', error)
    
    return NextResponse.redirect(
      new URL(
        `/?error=token_exchange_failed&message=${encodeURIComponent(
          error instanceof Error ? error.message : 'Unknown error'
        )}`,
        request.url
      )
    )
  }
}
