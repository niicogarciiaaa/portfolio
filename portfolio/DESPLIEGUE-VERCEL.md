# 🚀 Guía de Despliegue en Vercel

## 📋 Pasos para desplegar tu portfolio en Vercel

### 1. Preparación del proyecto
✅ Se ha creado `vercel.json` con la configuración necesaria
✅ Se ha agregado el script `build:vercel` en `package.json`

### 2. Subir a GitHub (si no lo has hecho ya)
```bash
git add .
git commit -m "Preparar proyecto para despliegue en Vercel"
git push origin main
```

### 3. Desplegar en Vercel

#### Opción A: Desde la web de Vercel (Recomendado)
1. Ve a [vercel.com](https://vercel.com)
2. Crea una cuenta o inicia sesión
3. Haz clic en "New Project"
4. Conecta tu repositorio de GitHub
5. Selecciona tu repositorio `portfolio`
6. Vercel detectará automáticamente que es un proyecto Angular
7. Haz clic en "Deploy"

#### Opción B: Desde la CLI de Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Iniciar sesión
vercel login

# Desplegar desde la carpeta del proyecto
cd portfolio
vercel

# Seguir las instrucciones en pantalla
```

### 4. Configuración automática
Vercel configurará automáticamente:
- **Build Command**: `npm run build:vercel`
- **Output Directory**: `dist/portfolio/browser`
- **Install Command**: `npm install`

### 5. Variables de entorno (si las necesitas)
Si tu proyecto requiere variables de entorno:
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega las variables necesarias

### 6. Dominio personalizado (opcional)
1. Ve a Settings → Domains en tu proyecto
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

## 🔧 Archivos creados para Vercel

### `vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/portfolio/browser"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Script añadido en `package.json`
```json
"build:vercel": "ng build --configuration production"
```

## 📝 Notas importantes

1. **Rutas de assets**: Las rutas de imágenes y documentos usan `/assets/...` que funcionarán correctamente en Vercel
2. **Angular Router**: La configuración de rutas redirige todo a `index.html` para que funcione el routing de Angular
3. **Build automático**: Cada push a `main` disparará un nuevo despliegue automáticamente
4. **HTTPS**: Vercel proporciona HTTPS automáticamente
5. **CDN global**: Tu sitio se servirá desde una CDN global para máximo rendimiento

## 🎉 ¡Listo!
Una vez desplegado, tu portfolio estará disponible en una URL como:
`https://portfolio-tu-usuario.vercel.app`

### URL de tu proyecto:
Una vez desplegado, actualiza este README con tu URL final.