# Junio 2024 · Ámbito social · notas de extracción

## Fuente oficial

- Archivo oficial Junta:
  - https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores
- ZIP oficial de junio 2024:
  - https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1624993/Pruebas%20convocatoria%20junio%202024%20%28incluye%20soluciones%29/1c4d10d9-36a0-8654-0095-1944e6c8dab7?version=1.1

## Archivos usados

Extraídos del ZIP oficial:

- `SOC_ESPA_2024.pdf`
- `SOC_ESPA_soluciones_2024.pdf`

## Método

- Texto del examen extraído con `scripts/extract_pdf_text.py` a `/home/fernando/clawd/tmp/eso-adultos/2024-06-social/exam.txt`.
- Texto del solucionario extraído con `scripts/extract_pdf_text.py` a `/home/fernando/clawd/tmp/eso-adultos/2024-06-social/solutions.txt`.
- Las preguntas cerradas de los ejercicios 2, 4 y 6 se pudieron leer directamente del texto extraído, sin necesidad de verificación visual adicional de casillas.
- Para la parte gráfica se rasterizó la página 4 del examen y se recortaron dos apoyos visuales para la web:
  - `content/exams/img/2024-06-social-goya.png`
  - `content/exams/img/2024-06-social-mapa.png`

## Notas de integración

- Puntuación automática calculada para la web: **25 puntos** (`q2` + `q4` + `q6`).
- Puntuación de comparación manual: **75 puntos**.
- El mapa del examen muestra `POBLACIÓN DE ESPAÑA, 2018`; una línea del solucionario menciona 2008, que parece una errata del propio material oficial.
- En la pregunta 13, el solucionario enumera más territorios de los que pide el enunciado. En la versión web conviene aceptar respuestas equivalentes si el alumnado identifica correctamente comunidades de alta densidad a partir del sombreado del mapa.
