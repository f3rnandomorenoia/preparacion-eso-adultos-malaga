# Junio 2024 · Ámbito de comunicación (inglés) · notas de extracción

## Fuente oficial

- Archivo oficial Junta:
  - https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores
- ZIP oficial de junio 2024:
  - https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1624993/Pruebas%20convocatoria%20junio%202024%20%28incluye%20soluciones%29/1c4d10d9-36a0-8654-0095-1944e6c8dab7?version=1.1

## Archivos usados

Extraídos del ZIP oficial:

- `COM_ESPA_IN_2024.pdf`
- `COM_ESPA_IN_soluciones_2024.pdf`

## Método

- Se descargó el pack oficial de junio 2024 con `scripts/download_exam_pack.py 2024-06`.
- Se extrajo texto con `pdftotext` mediante `scripts/extract_pdf_text.py`.
- Las respuestas abiertas se trasladaron desde el solucionario con limpieza mínima de formato.
- Las preguntas cerradas se pasaron a formato web para autocorrección.

## Nota importante sobre fiabilidad

En el texto extraído del PDF de soluciones, las preguntas tipo test de los ejercicios **13** y **15-24** no muestran de forma legible la marca de la casilla seleccionada.

Para verificar esas respuestas:

- se rasterizaron las páginas relevantes del solucionario a PNG,
- y se revisaron visualmente las casillas marcadas.

## Respuestas cerradas confirmadas visualmente

### Ejercicio 13
- A → `sodas, cornflakes and nuggets.`
- B → `people who ate the most ultra-processed foods die sooner.`
- C → `to understand why ultra-processed foods are unhealthy.`
- D → `wants to know the connection between ultra-processed foods and health.`
- E → `is full of natural foods.`

### Ejercicios 15-24
- 15 → `on May 7th.`
- 16 → `add yeast to warm water.`
- 17 → `a friendly boy.`
- 18 → `may see you later.`
- 19 → `do karate.`
- 20 → `won’t`
- 21 → `is she feeling today?`
- 22 → `last`
- 23 → `I’ve just read a book by Virginia Woolf.`
- 24 → `the busiest`
