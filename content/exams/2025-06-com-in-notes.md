# Junio 2025 · Ámbito de comunicación (inglés) · notas de extracción

## Fuente oficial

- Archivo oficial Junta:
  - https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores
- ZIP oficial junio 2025:
  - pendiente de consolidar con URL final exacta en el proyecto; se ha trabajado con el ZIP oficial ya descargado en `data/exam-packs/2025-06/zip/Convocatoria junio 2025.zip`

## Archivos usados

Extraídos del ZIP oficial:

- `COM_ESPA_IN_junio.pdf`
- `LL_ESPA_soluciones_junio.pdf`
- `IN_ESPA_soluciones_junio.pdf`

## Método

- En esta convocatoria el examen de comunicación (inglés) sigue viniendo en un único PDF, pero el solucionario aparece separado en dos ficheros: uno para lengua castellana (`LL_...`) y otro para inglés (`IN_...`).
- Se extrajo texto con `pdftotext` para el examen y para ambos solucionarios.
- Las respuestas abiertas se trasladaron desde el solucionario con limpieza mínima de formato.
- Las preguntas cerradas se pasaron a formato web para autocorrección.

## Nota sobre verificación de respuestas cerradas

- El solucionario de inglés sí muestra claramente los valores T/F del ejercicio 12.
- En los ejercicios 13 y 15-24 no aparece una marca de casilla legible en el texto extraído, así que las respuestas se han fijado por coherencia directa con el texto y con la gramática inglesa del propio ítem.

## Reparto de corrección en la web

- **Autocorregible:** 45 puntos
- **Comparación manual / respuesta abierta:** 55 puntos

Se autocorrigen los ejercicios 3, 6, 7, 10, 12, 13 y 15-24. El resto muestra solución oficial u orientación para comparar.
