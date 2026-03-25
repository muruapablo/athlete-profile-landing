# Configuración de Instagram Basic Display API

## Paso 1: Crear App en Facebook Developers

1. Ve a [Facebook Developers](https://developers.facebook.com/)
2. Click en "My Apps" → "Create App"
3. Selecciona "Consumer" como tipo de app
4. Completa:
   - **App Name**: Athlete CV Landing
   - **App Contact Email**: tu email
5. Click "Create App"

## Paso 2: Configurar Instagram Basic Display

1. En el dashboard de tu app, busca "Instagram Basic Display" en "Add Products"
2. Click en "Set Up"
3. En "Basic Display", scroll hasta "User Token Generator"
4. Click en "Create New App"

### Configurar OAuth Redirect:

En "Instagram App Settings":
- **OAuth Redirect URIs**: 
  - `https://tu-dominio.com/api/instagram/callback`
  - `http://localhost:3000/api/instagram/callback` (para desarrollo)
- **Deauthorize Callback URL**: `https://tu-dominio.com/api/instagram/deauthorize`
- **Data Deletion Request URL**: `https://tu-dominio.com/api/instagram/delete`

**Guarda los cambios**

## Paso 3: Obtener Credenciales

En "Basic Display" → "Instagram App ID":
- Copia el **Instagram App ID**
- Copia el **Instagram App Secret**

## Paso 4: Agregar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Instagram Basic Display API
INSTAGRAM_APP_ID=tu_app_id_aqui
INSTAGRAM_APP_SECRET=tu_app_secret_aqui
INSTAGRAM_ACCESS_TOKEN=se_generara_despues
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Paso 5: Autorización de la Atleta (SOLO UNA VEZ)

1. La atleta debe tener una cuenta de Instagram Business o Creator
2. Envíale este link (reemplaza TU_APP_ID):
   ```
   https://api.instagram.com/oauth/authorize?client_id=TU_APP_ID&redirect_uri=http://localhost:3000/api/instagram/callback&scope=user_profile,user_media&response_type=code
   ```
3. Ella iniciará sesión y autorizará
4. Será redirigida a tu sitio
5. El sistema guardará el token automáticamente

## Paso 6: Token de Larga Duración

Los tokens iniciales duran 1 hora. El sistema los convertirá automáticamente en tokens de larga duración (60 días) y los renovará automáticamente.

## Notas Importantes

- **Renovación automática**: El token se renueva cada 30 días automáticamente
- **Sin límites de rate**: Instagram Basic Display tiene límites generosos
- **Privacidad**: Solo accedes a posts públicos de la atleta
- **Revocación**: La atleta puede revocar el acceso en cualquier momento desde su Instagram

## Troubleshooting

### Error: "Redirect URI mismatch"
- Verifica que la URL en el link coincida EXACTAMENTE con la configurada en Facebook Developers

### Error: "Invalid Scopes"
- Asegúrate de que la cuenta de Instagram sea Business o Creator (no Personal)

### Posts no aparecen
- Verifica que el token no haya expirado
- Revisa los logs en `/api/instagram/posts`
