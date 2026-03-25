'use client'

import { useEffect } from 'react'

interface BeholdFeedProps {
  feedId?: string
}

export default function BeholdFeed({ feedId }: BeholdFeedProps) {
  useEffect(() => {
    // Cargar el script de Behold solo una vez
    if (feedId && !document.querySelector('script[src*="behold.so"]')) {
      const script = document.createElement('script')
      script.src = 'https://w.behold.so/widget.js'
      script.type = 'module'
      script.async = true
      document.body.appendChild(script)
    }
  }, [feedId])

  if (!feedId) {
    return (
      <div className="text-center py-12 glass rounded-xl">
        <p className="text-gray-400 mb-4">
          📸 Feed de Instagram no configurado
        </p>
        <p className="text-sm text-gray-500">
          Sigue las instrucciones en{' '}
          <a 
            href="/BEHOLD_SETUP.md" 
            className="text-primary-400 hover:underline"
            target="_blank"
          >
            BEHOLD_SETUP.md
          </a>
          {' '}para conectar tu Instagram
        </p>
      </div>
    )
  }

  return (
    <div className="behold-feed-container">
      <figure data-behold-id={feedId}></figure>
      
      <style jsx>{`
        .behold-feed-container :global(.behold-feed) {
          max-width: 100%;
          gap: 1rem;
        }
        
        .behold-feed-container :global(.behold-item) {
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .behold-feed-container :global(.behold-item:hover) {
          transform: scale(1.02);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
        }
        
        .behold-feed-container :global(.behold-item img) {
          transition: transform 0.3s ease;
        }
        
        .behold-feed-container :global(.behold-item:hover img) {
          transform: scale(1.05);
        }
        
        /* Ocultar footer de Behold en plan gratuito (opcional) */
        .behold-feed-container :global(.behold-credit) {
          opacity: 0.3;
          font-size: 10px;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  )
}
