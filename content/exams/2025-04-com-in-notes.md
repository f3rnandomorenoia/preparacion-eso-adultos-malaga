# Abril 2025 · Ámbito de comunicación (inglés) · notas de extracción

## Fuente oficial

- Archivo oficial Junta:
  - https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores
- ZIP oficial abril 2025:
  - https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1625008/Pruebas%20convocatoria%20abril%202025%20%28incluye%20soluciones%29/864b6c80-496c-6291-4aa0-dcea2cdf83e1?version=1.0

## Archivos usados

Extraídos del ZIP oficial:

- `COM_ESPA_IN_2025.pdf`
- `COM_ESPA_2025_soluciones_2025.pdf`

## Método

- Se localizó la carpeta oficial `Convocatoria 2025` desde el visor documental de la Junta (`folderId=1625008`).
- Se descargó el pack oficial de abril 2025 y se extrajo en `data/exam-packs/2025-04/`.
- Se extrajo texto con `pdftotext` mediante `scripts/extract_pdf_text.py`.
- Las respuestas abiertas se trasladaron desde el solucionario con limpieza mínima de formato.
- Las preguntas cerradas se pasaron a formato web para autocorrección.

## Nota sobre verificación de respuestas cerradas

- El texto extraído del solucionario no conserva bien las casillas marcadas de los ejercicios 13 y 15-24.
- Para revisar esas marcas se rasterizaron las páginas finales del solucionario con `scripts/render_pdf_pages.py`.
- En los ejercicios 15-24, además, las opciones correctas son coherentes con la gramática inglesa esperable del propio ítem.

## Reparto de corrección en la web

- **Autocorregible:** 45 puntos
- **Comparación manual / respuesta abierta:** 55 puntos

Se autocorrigen los ejercicios 4, 9, 10, 12, 13 y 15-24. El resto muestra solución oficial u orientación para comparar.
