---
name: publish-itnews
description: Publica y valida articulos para el sitio web itnews.lat (Jekyll). Gestiona la creacion de archivos en _posts/, frontmatter YAML (layout, categorias, tags, fecha, semana, imagenes), verificacion estricta y publicacion mediante Git y GitHub CLI (gh).
---

# Skill: Publicación de Artículos en itnews.lat

Este skill proporciona el procedimiento estándar, seguro y validado para redactar, comprobar y publicar nuevos artículos en el portal de noticias de tecnología **itnews.lat** (desarrollado con Jekyll y alojado en GitHub Pages).

---

## 1. Reglas Críticas de Publicación

1. **Ubicación obligatoria en `_posts/`**:
   - **NUNCA** coloques artículos en la raíz del repositorio.
   - En Jekyll, los archivos markdown colocados en la raíz no son procesados dentro de `site.posts`, por lo que **no aparecerán en la página de inicio ni en las páginas de categorías**.
   - Toda publicación debe residir en el directorio `_posts/`.

2. **Nomenclatura del archivo**:
   - Formato exacto: `YYYY-MM-DD-slug-del-titulo.md`
   - El slug debe estar en minúsculas, sin espacios (usar guiones `-`) y sin caracteres especiales ni tildes.
   - Ejemplo: `_posts/2026-09-06-nueva-tendencia-en-ciberseguridad.md`.

3. **Cálculo de fechas y semana (`week`)**:
   - Zona horaria de itnews: `-0400`.
   - `date`: `'YYYY-MM-DD HH:MM -0400'`.
   - `year`: Coincide exactamente con el año de `date` (ej. `'2026'`).
   - `week`: Número de semana ISO del año (ej. `'36'`).

4. **Taxonomía de Categorías (Países)**:
   - Los valores de `categories:` representan los países donde se distribuye la noticia:
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

5. **Taxonomía de Tags (Secciones)**:
   - Los valores de `tags:` corresponden a las secciones temáticas de la revista:
     - `Economía Digital`
     - `Actualidad`
     - `Canales`
     - `Movilidad`
     - `Seguridad`
     - `Transformación Digital`

6. **Imágenes**:
   - Portada / Miniatura (540x320): `https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/<nombre>-p.jpg`
   - Detalle / Cabecera (1024x680): `https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/<nombre>-g.jpg`

7. **Elementos obligatorios de pie de página**:
   - Tabla de redes y app SQUID:
     ```html
     <table style="height: 42px;" width="569">
     <tbody>
     <tr>
     <td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
     </tr>
     </tbody>
     </table>
     ```
   - Píxel de seguimiento de Metricool:
     ```html
     <img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
     ```

---

## 2. Flujo de Trabajo Paso a Paso

### Paso 1: Generar la plantilla del artículo
Puedes crear el borrador automáticamente ejecutando:
```powershell
powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/new_post.ps1 -Title "Título del Artículo" -Tag "Economía Digital" -ImageName "nombre-imagen"
```
Esto creará el archivo directamente en `_posts/YYYY-MM-DD-slug.md` con todos los cálculos de fecha, semana y metadatos listos.

### Paso 2: Redactar o editar el contenido
Asegúrate de que la estructura respete:
```markdown
---
layout: posts
color-schema: red-dark
date: '2026-09-06 10:30 -0400'
published: true
superNews: false
superArticle: false
year: '2026'
title: Título Completo de la Noticia
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/nombre-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/nombre-g.jpg
categories:
  - Venezuela
  - Colombia
  - Ecuador
  - Perú
  - Chile
  - México
  - Argentina
  - Panamá
tags:
  - Economía Digital
week: '36'
---
**Lead o bajada del artículo resumida en negrita.**

Cuerpo de la noticia redactado en párrafos fluidos...

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/nombre-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
```

### Paso 3: Validación de Formato y Metadatos
Ejecuta el script de validación sobre el artículo:
```powershell
powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/validate_post.ps1 -FilePath "_posts/YYYY-MM-DD-slug.md"
```
- Si devuelve `[EXITO]` (código de salida `0`), puedes continuar.
- Si devuelve `[X] ERRORES` (código de salida `1`), **no publiques hasta corregir todas las fallas**.

### Paso 4: Prueba de Compilación Local con Jekyll
Antes de publicar, valida que Jekyll compile el sitio y procese el artículo sin errores de sintaxis Liquid, layouts o SCSS:
```powershell
powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/test_jekyll_build.ps1
```
*(Opcional) Si deseas previsualizar el sitio y el artículo en tu navegador en `http://localhost:4000`:*
```powershell
powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/serve_local.ps1
```

### Paso 5: Publicar los Cambios con Git y GitHub CLI (`gh`)

Puedes publicar automáticamente en un solo paso (el cual valida formato, ejecuta la compilación de Jekyll, agrega al stage, comitea, sube a GitHub y comprueba el commit):
```powershell
powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/publish_post.ps1 -FilePath "_posts/YYYY-MM-DD-slug.md"
```

O realizar el procedimiento manual:

1. **Revisar estado de autenticación en GitHub**:
   ```powershell
   gh auth status
   ```
   *Si no estás autenticado, ejecuta `gh auth login` para conectar tu cuenta de GitHub.*

2. **Revisar cambios pendientes**:
   ```powershell
   git status
   ```

3. **Agregar el artículo al stage**:
   ```powershell
   git add _posts/YYYY-MM-DD-slug.md
   ```

4. **Crear el commit descriptivo**:
   ```powershell
   git commit -m "Publicar: Título del artículo"
   ```

5. **Subir los cambios a GitHub**:
   ```powershell
   git push origin master
   ```

6. **Comprobar la confirmación del cambio**:
   ```powershell
   gh api repos/itnewslat/itnewslat.github.io/commits/master --jq ".commit.message, .commit.author.date"
   ```

---

## 3. Comandos de Referencia Rápida

| Acción | Comando |
| :--- | :--- |
| **Nuevo borrador** | `powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/new_post.ps1 -Title "..."` |
| **Validar formato** | `powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/validate_post.ps1 -FilePath "_posts/..."` |
| **Probar compilación Jekyll** | `powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/test_jekyll_build.ps1` |
| **Vista previa local (web)** | `powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/serve_local.ps1` |
| **Publicación completa 1-paso** | `powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/publish_post.ps1 -FilePath "_posts/..."` |
| **Estado de sesión GitHub** | `gh auth status` |
| **Login en GitHub** | `gh auth login` |
| **Verificar ramas remotas** | `gh repo view itnewslat/itnewslat.github.io` |
| **Subir a master manualmente** | `git push origin master` |


