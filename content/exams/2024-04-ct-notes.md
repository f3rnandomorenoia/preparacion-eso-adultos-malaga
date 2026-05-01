# Abril 2024 · Ámbito científico-tecnológico · notas de extracción

## Fuente oficial

- Archivo oficial Junta:
  - https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores
- ZIP oficial de abril 2024:
  - https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1624993/Pruebas%20convocatoria%20abril%202024%20%28incluye%20soluciones%29/35ea24e8-0010-b560-0915-44b5fd3171e0?version=1.1

## Archivos usados

Extraídos del ZIP oficial:

- `CT_ESPA_2024.pdf`
- `CT_ESPA_soluciones_2024.pdf`

## Material de trabajo

- Texto del examen extraído a `/home/fernando/clawd/tmp/eso-adultos/2024-04-ct/exam.txt`
- Texto del solucionario extraído a `/home/fernando/clawd/tmp/eso-adultos/2024-04-ct/solutions.txt`
- Páginas renderizadas para apoyo visual en `/home/fernando/clawd/tmp/eso-adultos/2024-04-ct/rendered/`

## Apoyo visual integrado en la web

Se han incrustado estas páginas del examen por contener información gráfica difícil de reproducir solo con texto:

- `content/exams/img/2024-04-ct-page-3.png` → esquema de la función de nutrición
- `content/exams/img/2024-04-ct-page-4.png` → tabla por aparatos + gráfica velocidad-tiempo
- `content/exams/img/2024-04-ct-page-6.png` → figura geométrica del problema final

## Notas de fiabilidad

- La mayor parte del solucionario se pudo trasladar desde extracción textual directa.
- En la pregunta 5 la marca visual de la opción elegida no queda clara en el OCR, pero la respuesta correcta se confirma por el desarrollo del propio solucionario: **energía de la biomasa**.
- La pregunta 3 se ha pasado a formato web separando el apartado A en dos microítems (`partícula` y `carga`) para conservar los 5 puntos autocorregibles sin inventar un renderizador nuevo.

## Resultado

- Examen integrado como `2024-04-ct` en `exam-data.js`
- Nota añadida en `content/exams/2024-04-ct-notes.md`
- Estado actualizado en `EXAMS-STATUS.md`
