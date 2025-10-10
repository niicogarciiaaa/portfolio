# Imágenes del Portfolio

## Estructura de carpetas:

### `/profile/`
- `profile-photo.jpg` - Foto principal para el hero
- `profile-about.jpg` - Foto alternativa para la sección about
- `avatar.png` - Avatar pequeño para header/footer

### `/projects/`
- `proyecto1-screenshot.jpg`
- `proyecto2-screenshot.jpg`
- `proyecto3-screenshot.jpg`
- etc...

### Formatos recomendados:
- **Fotos de perfil**: JPG, 400x400px mínimo, formato cuadrado
- **Screenshots de proyectos**: JPG/PNG, 800x600px mínimo, ratio 4:3 o 16:9
- **Iconos**: PNG con fondo transparente, 64x64px o SVG

### Uso en Angular:
```html
<!-- Foto de perfil en hero -->
<img src="/assets/images/profile/profile-photo.jpg" alt="Nicolás García Moreira">

<!-- Screenshot de proyecto -->
<img src="/assets/images/projects/proyecto1-screenshot.jpg" alt="Proyecto 1">
```