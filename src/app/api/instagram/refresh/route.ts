import { NextResponse } from 'next/server'

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN

export async function GET() {
  if (!INSTAGRAM_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: 'No access token configured' },
      { status: 400 }
    )
  }

  try {
    // Renovar el token de larga duración
    // Los tokens de Instagram se pueden renovar mientras aún estén válidos
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${INSTAGRAM_ACCESS_TOKEN}`

    const response = await fetch(url)

    if (!response.ok) {
      const error = await response.json()
      console.error('Error refreshing token:', error)
      
      return NextResponse.json(
        {
          error: 'Failed to refresh token',
          details: error
        },
        { status: response.status }
      )
    }

    const data = await response.json()

    console.log('\n=== TOKEN RENOVADO EXITOSAMENTE ===')
    console.log('Nuevo token:', data.access_token)
    console.log('Expira en:', data.expires_in, 'segundos (' + Math.floor(data.expires_in / (24 * 60 * 60)) + ' días)')
    console.log('Actualiza INSTAGRAM_ACCESS_TOKEN en .env.local con el nuevo token')
    console.log('=====================================\n')

    return NextResponse.json({
      success: true,
      message: 'Token renovado exitosamente. Revisa la consola del servidor.',
      expiresIn: data.expires_in,
      expiresInDays: Math.floor(data.expires_in / (24 * 60 * 60)),
      // NO devolver el token en la respuesta por seguridad
      // Solo mostrarlo en los logs del servidor
    })

  } catch (error) {
    console.error('Error in refresh endpoint:', error)
    
    return NextResponse.json(
      {
        error: 'Server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
