# Abril 2024 · Ámbito social · notas de extracción

## Fuente oficial

- Archivo oficial Junta:
  - https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores
- ZIP oficial de abril 2024:
  - https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1624993/Pruebas%20convocatoria%20abril%202024%20%28incluye%20soluciones%29/35ea24e8-0010-b560-0915-44b5fd3171e0?version=1.1

## Archivos usados

Extraídos del ZIP oficial:

- `SOC_ESPA_2024.pdf`
- `SOC_ESPA_soluciones_2024.pdf`

## Material de trabajo

- Texto del examen extraído a `/home/fernando/clawd/tmp/eso-adultos/2024-04-social/exam.txt`
- Texto del solucionario extraído a `/home/fernando/clawd/tmp/eso-adultos/2024-04-social/solutions.txt`
- Páginas renderizadas en `/home/fernando/clawd/tmp/eso-adultos/2024-04-social/rendered/`

## Apoyo visual integrado en la web

Se han recortado dos apoyos visuales desde la página 4 del examen:

- `content/exams/img/2024-04-social-mezquita.png` → interior de la mezquita de Córdoba
- `content/exams/img/2024-04-social-ue-mapa.png` → mapa de la Unión Europea en 2023

## Notas de integración

- Puntuación automática calculada para la web: **25 puntos** (`q2` + `q4` + `q6`).
- Puntuación de comparación manual: **75 puntos**.
- La pregunta 13 del solucionario oficial arrastra una cifra desactualizada de **28 países** para la UE. En la versión web se ha corregido a **27 países**, coherente con el propio enunciado (`2023`) y con la realidad posterior al Brexit.
- Las respuestas abiertas de historia y arte se han resumido en formato útil para comparación manual, manteniendo el contenido esencial del solucionario oficial.

## Resultado

- Examen integrado como `2024-04-social` en `exam-data.js`
- Nota añadida en `content/exams/2024-04-social-notes.md`
- Estado actualizado en `EXAMS-STATUS.md`
