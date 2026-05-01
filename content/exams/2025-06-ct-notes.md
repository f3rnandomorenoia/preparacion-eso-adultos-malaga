# Junio 2025 · Ámbito científico-tecnológico · notas de extracción

## Fuente oficial

- Archivo oficial Junta:
  - https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores
- ZIP oficial junio 2025:
  - se ha trabajado con el paquete oficial ya descargado en `data/exam-packs/2025-06/zip/Convocatoria junio 2025.zip`

## Archivos usados

Extraídos del ZIP oficial:

- `CT_ESPA_junio.pdf`
- `CT_ESPA_soluciones_junio.pdf`

## Material de trabajo

- Texto del examen extraído a `/home/fernando/clawd/tmp/eso-adultos/2025-06-ct/exam.txt`
- Texto del solucionario extraído a `/home/fernando/clawd/tmp/eso-adultos/2025-06-ct/solutions.txt`
- Páginas renderizadas para apoyo visual en `/home/fernando/clawd/tmp/eso-adultos/2025-06-ct/rendered/`
- XML auxiliar del solucionario en `/home/fernando/clawd/tmp/eso-adultos/2025-06-ct/sol.xml` para confirmar visualmente respuestas cerradas donde `pdftotext` no marcaba las casillas seleccionadas.

## Apoyo visual integrado en la web

Se han incrustado estas páginas del examen por contener información gráfica necesaria para resolver bien el ejercicio:

- `content/exams/img/2025-06-ct-page-4.png` → gráfica espacio-tiempo del movimiento del animal
- `content/exams/img/2025-06-ct-page-5.png` → conservación de la masa y tabla/reacción química
- `content/exams/img/2025-06-ct-page-6.png` → lista de la compra del problema final

## Notas de fiabilidad

- Las preguntas 1, 3, 5 y 9 necesitaban confirmación extra porque el texto plano no dejaba claras todas las opciones correctas.
- Para validarlas se revisó el XML generado desde el PDF del solucionario, donde la opción correcta aparece con distinta tipografía, suficiente para distinguirla sin rehacer OCR manual completo.
- Las preguntas 8 a 13 y 15 a 17 dependen del soporte gráfico original, por eso la versión web incorpora las páginas del examen como imagen.
- Los ejercicios autocorregibles se han limitado a los realmente cerrados para evitar validaciones frágiles en respuestas numéricas o de desarrollo.

## Reparto de corrección en la web

- **Autocorregible:** 30 puntos
- **Comparación manual / respuesta abierta:** 70 puntos

Se autocorrigen los ejercicios 1, 2, 3, 4, 5 y 9. El resto muestra solución oficial u orientación para comparar.
