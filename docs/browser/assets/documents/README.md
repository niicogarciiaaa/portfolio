# Documentos

Esta carpeta contiene los documentos del portfolio:

## Archivos sugeridos:
- `cv-nicolas-garcia-moreira.pdf` - Curriculum Vitae en formato PDF
- `carta-presentacion.pdf` - Carta de presentación (opcional)
- `certificados/` - Subcarpeta para certificados y diplomas

## Uso en el código:
Los archivos aquí se pueden referenciar en Angular como:
```typescript
// Ejemplo para descargar CV
downloadCV() {
  const link = document.createElement('a');
  link.href = '/assets/documents/cv-nicolas-garcia-moreira.pdf';
  link.download = 'CV-Nicolas-Garcia-Moreira.pdf';
  link.click();
}
```