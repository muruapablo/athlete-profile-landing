import { NextResponse } from 'next/server'
import type { InstagramMediaResponse } from '@/types/instagram'

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN

export async function GET() {
  if (!INSTAGRAM_ACCESS_TOKEN) {
    return NextResponse.json(
      { 
        error: 'Instagram access token not configured',
        message: 'Por favor configura INSTAGRAM_ACCESS_TOKEN en .env.local'
      },
      { status: 500 }
    )
  }

  try {
    // Campos que queremos obtener de cada post
    const fields = 'id,media_type,media_url,thumbnail_url,permalink,caption,timestamp,username'
    
    // Obtener los últimos 12 posts
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=12&access_token=${INSTAGRAM_ACCESS_TOKEN}`

    const response = await fetch(url, {
      // Cachear por 5 minutos
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Instagram API Error:', errorData)
      
      // Si el token expiró
      if (errorData.error?.code === 190) {
        return NextResponse.json(
          {
            error: 'Token expired',
            message: 'El token de Instagram ha expirado. Por favor renuévalo.',
            code: 190
          },
          { status: 401 }
        )
      }

      return NextResponse.json(
        {
          error: 'Instagram API error',
          details: errorData
        },
        { status: response.status }
      )
    }

    const data: InstagramMediaResponse = await response.json()

    // Transformar los datos para que sean más fáciles de usar
    const posts = data.data.map(post => ({
      id: post.id,
      type: post.media_type.toLowerCase(), // 'image', 'video', 'carousel_album'
      imageUrl: post.media_url,
      thumbnailUrl: post.thumbnail_url || post.media_url,
      permalink: post.permalink,
      caption: post.caption || '',
      timestamp: post.timestamp,
      username: post.username,
    }))

    return NextResponse.json({
      success: true,
      posts,
      count: posts.length,
      cached: true,
    })

  } catch (error) {
    console.error('Error fetching Instagram posts:', error)
    
    return NextResponse.json(
      {
        error: 'Failed to fetch Instagram posts',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
