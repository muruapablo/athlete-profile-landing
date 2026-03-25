// Types para Instagram Basic Display API

export interface InstagramMedia {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
  username: string
}

export interface InstagramProfile {
  id: string
  username: string
  account_type: string
  media_count: number
}

export interface InstagramTokenResponse {
  access_token: string
  user_id: number
  expires_in?: number
}

export interface InstagramMediaResponse {
  data: InstagramMedia[]
  paging?: {
    cursors: {
      before: string
      after: string
    }
    next?: string
  }
}
