# Integración con Behold.so

## Paso 1: Crear cuenta en Behold (2 minutos)

1. Ve a [behold.so](https://behold.so)
2. Click en "Get Started Free"
3. Regístrate con tu email

## Paso 2: Crear tu feed

1. En el dashboard, click "Create Feed"
2. Selecciona "Instagram"
3. Ingresa el handle de Instagram: `@lety.atleta.arg`
4. Click "Create Feed"

## Paso 3: Personalizar el diseño

En la configuración del feed:

### Layout
- **Tipo**: Grid
- **Columnas Mobile**: 2
- **Columnas Desktop**: 6
- **Espaciado**: 10px

### Apariencia
- **Bordes**: Rounded (10px)
- **Hover effect**: Zoom
- **Show captions**: On hover
- **Link**: Open in new tab

### Advanced CSS (Opcional)
```css
.behold-feed {
  max-width: 100%;
}

.behold-item {
  border-radius: 12px;
  overflow: hidden;
}

.behold-item img {
  transition: transform 0.3s ease;
}

.behold-item:hover img {
  transform: scale(1.05);
}
```

## Paso 4: Obtener el código embed

1. En tu feed, click en "Embed"
2. Copia el código que se ve así:
   ```html
   <figure data-behold-id="ABC123DEF"></figure>
   <script src="https://w.behold.so/widget.js" type="module"></script>
   ```

## Paso 5: Configurar en el sitio

Abre el archivo `src/data/athlete.ts` y agrega:

```typescript
export const athleteData = {
  // ... resto de la configuración
  
  // Behold Instagram Feed
  beholdFeedId: "ABC123DEF", // Reemplaza con tu ID
}
```

## Paso 6: Reiniciar el servidor

```bash
npm run dev
```

¡Listo! Tu feed de Instagram estará conectado.

## Características

✅ Actualización automática cada 30 minutos
✅ Sin necesidad de tokens ni credenciales
✅ Funciona inmediatamente
✅ Diseño responsive
✅ Videos y carruseles incluidos

## Comparación: Behold vs API

| Característica | Behold | Instagram API |
|----------------|--------|---------------|
| Tiempo setup | 2 min | 30+ min |
| Credenciales | No necesita | Requiere autorización |
| Mantenimiento | Cero | Renovar token cada 60 días |
| Límite posts | Ilimitado | 12 por request |
| Videos | ✅ Sí | ✅ Sí |
| Stories | ❌ No | ❌ No (necesita otra API) |

## Troubleshooting

**El feed no aparece**
- Verifica que el `beholdFeedId` sea correcto
- Revisa la consola del navegador para errores

**No se ven todos los posts**
- El plan gratuito muestra los últimos 20 posts
- Para más, necesitas el plan Pro ($10/mes)

**El diseño no coincide**
- Ajusta el CSS personalizado en Behold
- O edita `BeholdFeed.tsx` directamente
