# Configuración de Formspree para Formulario de Contacto

## Paso 1: Crear cuenta y proyecto en Formspree

1. Ir a [formspree.io](https://formspree.io)
2. Crear cuenta o iniciar sesión
3. Crear nuevo proyecto: **Dashboard Project**
4. Darle un nombre (ejemplo: "Athlete Contact Form")

## Paso 2: Obtener el endpoint

Una vez creado el proyecto, Formspree te dará un endpoint como:
```
https://formspree.io/f/xzbqwpxy
```

El código después de `/f/` es tu **FORM_ID** (ejemplo: `xzbqwpxy`)

## Paso 3: Configurar el código

### Archivo a modificar: `src/components/ContactSection.tsx`

Reemplazar la función `handleSubmit` (líneas 18-29 aproximadamente):

**ANTES (simulación):**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  // Simular envío (reemplazar con integración real)
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  setIsSubmitting(false)
  setIsSubmitted(true)
  setFormState({ name: '', email: '', company: '', message: '' })
  
  // Reset success message after 5 seconds
  setTimeout(() => setIsSubmitted(false), 5000)
}
```

**DESPUÉS (Formspree real):**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('https://formspree.io/f/TU_FORM_ID_AQUI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    
    if (response.ok) {
      setIsSubmitted(true)
      setFormState({ name: '', email: '', company: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.')
  } finally {
    setIsSubmitting(false)
  }
}
```

**IMPORTANTE:** Reemplazar `TU_FORM_ID_AQUI` con tu FORM_ID real de Formspree.

## Paso 4: Probar el formulario

1. Guardar los cambios
2. Recargar la página web
3. Completar el formulario y enviar
4. Verificar que llegue el email a la dirección configurada en Formspree
5. También puedes ver los mensajes en el dashboard de Formspree

## Configuración adicional (opcional)

En el dashboard de Formspree puedes:
- Cambiar el email de recepción
- Agregar múltiples emails
- Ver historial de mensajes
- Configurar mensajes de confirmación personalizados
- Agregar protección anti-spam (reCAPTCHA)

## Plan gratuito de Formspree

- 50 mensajes por mes gratis
- Sin límite de formularios
- Perfecto para comenzar

Si necesitas más mensajes, hay planes pagos disponibles.
