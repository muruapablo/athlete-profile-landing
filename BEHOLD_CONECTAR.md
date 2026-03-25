# 🚀 Conecta Instagram en 2 minutos con Behold

## Paso 1: Crea tu cuenta gratis
👉 Ve a: https://behold.so/auth/signup

## Paso 2: Crea tu feed
1. Click en "Create Feed"
2. Selecciona "Instagram"
3. Ingresa: `lety.atleta.arg` (o el handle de Instagram)
4. Click "Create Feed"

## Paso 3: Personaliza el diseño (opcional)
En "Settings" de tu feed:
- **Layout**: Grid
- **Columns**: 6 (desktop), 2 (mobile)
- **Spacing**: 10px
- **Border radius**: 12px

## Paso 4: Copia tu Feed ID
1. En tu feed, verás un código como:
   ```html
   <figure data-behold-id="ABC123DEF"></figure>
   ```
2. Copia solo el ID: `ABC123DEF`

## Paso 5: Pega el ID en tu código
Abre: `src/data/athlete.ts`

Busca esta línea (alrededor de línea 78):
```typescript
beholdFeedId: "", // <-- AQUÍ
```

Cambia por:
```typescript
beholdFeedId: "ABC123DEF", // <-- Tu ID de Behold
```

## Paso 6: Guarda y listo! 🎉
```bash
# Si el servidor está corriendo, los cambios se verán automáticamente
# Si no, ejecuta:
npm run dev
```

Ve a `http://localhost:3000` → Scroll a "Contenido & Redes Sociales"

**¡Tu Instagram está conectado!** 🎊

---

## ¿Problemas?

**No veo los posts**
- Verifica que el `beholdFeedId` esté entre comillas
- Asegúrate de guardar el archivo
- Refresca el navegador (Ctrl+F5)

**El diseño no se ve bien**
- En Behold, ajusta "Spacing" y "Columns"
- Edita `src/components/BeholdFeed.tsx` para CSS personalizado

**Quiero más posts**
- Plan gratuito: hasta 20 posts
- Plan Pro ($10/mes): ilimitados

---

## Alternativa: Si prefieres la API oficial

Sigue las instrucciones en:
- [INSTAGRAM_SETUP.md](./INSTAGRAM_SETUP.md) - API completa
- Requiere ~30 minutos y autorización de la atleta
