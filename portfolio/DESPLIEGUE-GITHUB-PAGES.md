# 🚀 Guía de Despliegue en GitHub Pages

## 📋 Configuración automática para GitHub Pages

### ✅ **Ya configurado:**
- GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Build automático en cada push a `main`
- Despliegue automático a GitHub Pages

### 🔧 **Pasos para activar GitHub Pages:**

1. **Ve a tu repositorio en GitHub**
   - https://github.com/niicogarciiaaa/portfolio

2. **Ir a Settings**
   - En la barra superior del repositorio, haz clic en `Settings`

3. **Configurar Pages**
   - En el menú lateral izquierdo, busca y haz clic en `Pages`
   - En "Source", selecciona `GitHub Actions`
   - No necesitas seleccionar una rama manualmente

4. **Ejecutar el primer despliegue**
   - Haz un push a `main` (o ejecuta el workflow manualmente)
   - Ve a la pestaña `Actions` para ver el progreso del despliegue

### 📝 **URLs del proyecto:**
- **Repositorio**: https://github.com/niicogarciiaaa/portfolio
- **Sitio web**: https://niicogarciiaaa.github.io/portfolio/
- **Actions**: https://github.com/niicogarciiaaa/portfolio/actions

### 🔄 **Workflow automático:**

El workflow se ejecuta automáticamente cuando:
- Haces push a la rama `main`
- Ejecutas manualmente desde la pestaña Actions

### 📁 **Archivos del workflow:**
```
.github/
└── workflows/
    └── deploy.yml    # Configuración de GitHub Actions
```

### 🛠️ **Comandos de build:**
```bash
# Build local para testing
npm run build

# El workflow usa automáticamente:
npm run build -- --base-href="/portfolio/"
```

### ⚡ **Características:**
- ✅ **HTTPS automático**
- ✅ **CDN global**
- ✅ **Despliegue automático en cada push**
- ✅ **Gratuito para repositorios públicos**
- ✅ **Dominio personalizado disponible**

### 🎯 **Próximos pasos:**
1. Haz push de estos cambios a GitHub
2. Ve a Settings → Pages en tu repositorio
3. Configura "Source" como "GitHub Actions"
4. ¡Tu sitio estará disponible en unos minutos!

### 🔧 **Troubleshooting:**
- Si no funciona, revisa la pestaña Actions para ver errores
- Asegúrate de que Pages esté habilitado en Settings
- Verifica que el repositorio sea público o tengas GitHub Pro

¡Tu portfolio estará disponible en https://niicogarciiaaa.github.io/portfolio/ ! 🎉