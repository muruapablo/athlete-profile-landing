# 🚀 Guía Rápida: Conectar Instagram

## Pasos Resumidos

### 1️⃣ Crea la App en Facebook Developers
- Ve a [developers.facebook.com](https://developers.facebook.com/)
- Crea una nueva app tipo "Consumer"
- Agrega el producto "Instagram Basic Display"

### 2️⃣ Configura las Variables de Entorno

Copia `.env.example` a `.env.local` y completa:

```bash
cp .env.example .env.local
```

Edita `.env.local`:
```env
INSTAGRAM_APP_ID=123456789  # De Facebook Developers
INSTAGRAM_APP_SECRET=abc123xyz  # De Facebook Developers
INSTAGRAM_ACCESS_TOKEN=  # Se generará en el paso 3
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3️⃣ Autoriza la App (Solo UNA vez)

1. Inicia el servidor:
   ```bash
   npm run dev
   ```

2. Envía este link a la atleta (reemplaza `TU_APP_ID`):
   ```
   https://api.instagram.com/oauth/authorize?client_id=TU_APP_ID&redirect_uri=http://localhost:3000/api/instagram/callback&scope=user_profile,user_media&response_type=code
   ```

3. Ella autoriza con su Instagram

4. En la consola del servidor verás:
   ```
   INSTAGRAM_ACCESS_TOKEN=IGQWRPabc...
   ```

5. Copia ese token y agrégalo a `.env.local`

6. Reinicia el servidor: `npm run dev`

### 4️⃣ ¡Listo! 🎉

El Instagram feed ahora mostrará los posts reales.

## 📝 Mantenimiento

### Renovar Token (cada 30-45 días)

Visita: `http://localhost:3000/api/instagram/refresh`

Copia el nuevo token de la consola y actualiza `.env.local`

### Troubleshooting

**Error "Redirect URI mismatch"**
- Verifica que en Facebook Developers tengas exactamente: `http://localhost:3000/api/instagram/callback`

**Error "Invalid Scopes"**  
- La cuenta debe ser Business o Creator (no Personal)
- Convierte la cuenta en Instagram: Settings → Account → Switch to Professional

**Posts no aparecen**
- Verifica que `INSTAGRAM_ACCESS_TOKEN` esté en `.env.local`
- Visita `/api/instagram/posts` para ver el error exacto

## 📖 Documentación Completa

Ver [INSTAGRAM_SETUP.md](./INSTAGRAM_SETUP.md) para instrucciones detalladas.

## 🔒 Seguridad

- ⚠️ **NUNCA** subas `.env.local` a Git
- ✅ El `.gitignore` ya incluye `.env*.local`
- ✅ Los tokens nunca se exponen al cliente
