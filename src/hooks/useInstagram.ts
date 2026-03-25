import { useState, useEffect } from 'react'

export interface InstagramPost {
  id: string
  type: 'image' | 'video' | 'carousel_album'
  imageUrl: string
  thumbnailUrl: string
  permalink: string
  caption: string
  timestamp: string
  username: string
}

interface UseInstagramReturn {
  posts: InstagramPost[]
  isLoading: boolean
  error: string | null
  refetch: () => void
}

export function useInstagram(): UseInstagramReturn {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch('/api/instagram/posts')
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Error al cargar posts de Instagram')
      }

      setPosts(data.posts || [])
    } catch (err) {
      console.error('Error fetching Instagram posts:', err)
      setError(err instanceof Error ? err.message : 'Error desconocido')
      // Si hay error, usar datos de placeholder
      setPosts([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return {
    posts,
    isLoading,
    error,
    refetch: fetchPosts,
  }
}
