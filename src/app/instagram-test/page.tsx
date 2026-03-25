'use client'

import { useState } from 'react'
import { RefreshCw, CheckCircle, XCircle, ExternalLink } from 'lucide-react'

export default function InstagramTestPage() {
  const [testResult, setTestResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const testConnection = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/instagram/posts')
      const data = await response.json()
      setTestResult({
        success: response.ok,
        status: response.status,
        data,
      })
    } catch (error) {
      setTestResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const refreshToken = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/instagram/refresh')
      const data = await response.json()
      alert(
        data.success
          ? `Token renovado exitosamente. Revisa la consola del servidor para el nuevo token.`
          : `Error: ${data.message}`
      )
    } catch (error) {
      alert('Error al renovar token: ' + (error instanceof Error ? error.message : 'Unknown'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Instagram API Test</h1>
        <p className="text-gray-400 mb-8">
          Usa esta página para verificar la conexión con Instagram
        </p>

        {/* Botones de prueba */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={testConnection}
            disabled={isLoading}
            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold flex items-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <CheckCircle className="w-5 h-5" />
            )}
            Probar Conexión
          </button>

          <button
            onClick={refreshToken}
            disabled={isLoading}
            className="px-6 py-3 bg-accent-500 hover:bg-accent-600 rounded-lg font-semibold flex items-center gap-2 disabled:opacity-50"
          >
            <RefreshCw className="w-5 h-5" />
            Renovar Token
          </button>
        </div>

        {/* Resultado */}
        {testResult && (
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              {testResult.success ? (
                <CheckCircle className="w-6 h-6 text-green-400" />
              ) : (
                <XCircle className="w-6 h-6 text-red-400" />
              )}
              <h2 className="text-2xl font-bold">
                {testResult.success ? 'Conexión Exitosa ✓' : 'Error en Conexión'}
              </h2>
            </div>

            {testResult.success ? (
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Posts encontrados:</p>
                  <p className="text-3xl font-bold text-primary-400">
                    {testResult.data.count || 0}
                  </p>
                </div>

                {testResult.data.posts && testResult.data.posts.length > 0 && (
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Último post:</p>
                    <div className="bg-dark-800 rounded-lg p-4">
                      <p className="text-sm">
                        <span className="text-gray-400">Usuario:</span>{' '}
                        {testResult.data.posts[0].username}
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-400">Tipo:</span>{' '}
                        {testResult.data.posts[0].type}
                      </p>
                      {testResult.data.posts[0].caption && (
                        <p className="text-sm mt-2 text-gray-300">
                          {testResult.data.posts[0].caption.substring(0, 100)}...
                        </p>
                      )}
                      <a
                        href={testResult.data.posts[0].permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 text-sm mt-2 inline-flex items-center gap-1"
                      >
                        Ver en Instagram <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="font-mono text-sm text-red-300">
                    {testResult.data?.error || testResult.error || 'Error desconocido'}
                  </p>
                  {testResult.data?.message && (
                    <p className="text-sm text-gray-400 mt-2">{testResult.data.message}</p>
                  )}
                </div>

                <div className="text-sm text-gray-400">
                  <p className="font-semibold mb-2">Posibles soluciones:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Verifica que INSTAGRAM_ACCESS_TOKEN esté configurado en .env.local</li>
                    <li>El token puede haber expirado - intenta renovarlo</li>
                    <li>Verifica que INSTAGRAM_APP_ID y APP_SECRET sean correctos</li>
                    <li>Revisa la consola del servidor para más detalles</li>
                  </ul>
                </div>
              </div>
            )}

            {/* JSON Raw */}
            <details className="mt-6">
              <summary className="cursor-pointer text-sm text-gray-400 hover:text-white">
                Ver respuesta completa (JSON)
              </summary>
              <pre className="mt-2 bg-dark-800 rounded-lg p-4 text-xs overflow-auto max-h-96">
                {JSON.stringify(testResult, null, 2)}
              </pre>
            </details>
          </div>
        )}

        {/* Instrucciones */}
        <div className="mt-8 glass rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Documentación</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <p>
              📖{' '}
              <a
                href="/INSTAGRAM_QUICK_START.md"
                className="text-primary-400 hover:underline"
              >
                Guía Rápida de Configuración
              </a>
            </p>
            <p>
              📘{' '}
              <a href="/INSTAGRAM_SETUP.md" className="text-primary-400 hover:underline">
                Documentación Completa
              </a>
            </p>
          </div>
        </div>

        {/* Volver al inicio */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white"
          >
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  )
}
