---
name: publish-and-sync-app
description: Publica nuevos articulos en itnews.lat y actualiza automaticamente el catalogo de datos de la aplicacion web (/app) de manera sincronizada.
---

# Skill: Publicación de Artículos y Sincronización de /App (itnews.lat)

Este skill gestiona el flujo integral para redactar, validar y publicar nuevos artículos en el portal **itnews.lat** y, de manera obligatoria y automática tras cada publicación, **regenerar el catálogo de datos de la `/app`** (`posts_data.json`) para que la aplicación web refleje las últimas noticias publicadas.

---

## 1. Reglas Esenciales de Artículos

1. **Ubicación en `_posts/`**:
   - Todo artículo debe residir exclusivamente en `_posts/`.
   - Formato de nombre: `YYYY-MM-DD-slug-en-minusculas-sin-acentos.md`.

2. **Cálculo de Fechas y Semana (`week`)**:
   - Zona horaria itnews: `-0400`.
   - `date`: `'YYYY-MM-DD HH:MM -0400'`.
   - `year`: Año de publicación (ej. `'2026'`).
   - `week`: Número de semana ISO del año (ej. `'37'`).

3. **Taxonomías**:
   - **Categorías (Países)**:
     ```yaml
     categories:
       - Venezuela
       - Colombia
       - Ecuador
       - Perú
       - Chile
       - México
       - Argentina
       - Panamá
     ```
   - **Tags (Secciones temáticas)**:
     - `Economía Digital`
     - `Actualidad`
     - `Canales`
     - `Movilidad`
     - `Seguridad`
     - `Transformación Digital`

4. **Imágenes requeridas**:
   - Miniatura / Portada (540x320): `https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/<nombre>-p.jpg`
   - Detalle / Cabecera (1024x680): `https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/<nombre>-g.jpg`

5. **Elementos de cierre obligatorios**:
   - Tabla de redes/SQUID y pixel de seguimiento de Metricool.

---

## 2. Flujo Completo de Publicación y Actualización

### Paso 1: Generar la plantilla del artículo
Ejecuta el script generador indicando el título y la categoría/sección:
```powershell
powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/new_post.ps1 -Title "Título de la Noticia" -Tag "Economía Digital" -ImageName "nombre-imagen"
```

### Paso 2: Redactar el contenido
Edita el archivo creado en `_posts/YYYY-MM-DD-slug.md` completando la bajada en negrita y el cuerpo de la noticia.

### Paso 3: Publicar el artículo Y actualizar la `/app` (Automático)
Ejecuta el orquestador del skill:
```powershell
powershell -ExecutionPolicy Bypass -File .agents/skills/publish-and-sync-app/scripts/publish_and_sync.ps1 -FilePath "_posts/YYYY-MM-DD-slug.md"
```

**¿Qué hace este comando automáticamente?**:
1. Valida el formato y los campos requeridos en el markdown.
2. Ejecuta un test rápido de compilación con Jekyll.
3. Comprueba las credenciales en GitHub CLI (`gh`).
4. Realiza el commit y el `git push origin master`.
5. **Regenera y actualiza localmente el archivo `posts_data.json` de la `/app`** (y su espejo en `itnews-app`) con los artículos más recientes en orden cronológico, sin forzar commit de la app.

---

## 3. Comandos Útiles

| Acción | Comando |
| :--- | :--- |
| **Publicar + Actualizar /App** | `powershell -ExecutionPolicy Bypass -File .agents/skills/publish-and-sync-app/scripts/publish_and_sync.ps1 -FilePath "_posts/..."` |
| **Actualizar solo la /App (sin publicar)** | `powershell -ExecutionPolicy Bypass -File .agents/skills/publish-and-sync-app/scripts/update_app_data.ps1` |
| **Validar formato del post** | `powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/validate_post.ps1 -FilePath "_posts/..."` |
| **Previsualizar /App localmente** | `powershell -ExecutionPolicy Bypass -File app/serve.ps1` |
