# Abril 2024 · Ámbito de comunicación (inglés) · notas de extracción

## Fuente oficial

- Archivo oficial Junta:
  - https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores
- Carpeta `Convocatoria 2024` obtenida desde el endpoint oficial del portal:
  - `get-folders?groupId=1454565&parentFolderId=1624911&start=0&end=20&sort=asc`
- ZIP oficial de abril 2024:
  - https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1624993/Pruebas%20convocatoria%20abril%202024%20%28incluye%20soluciones%29/35ea24e8-0010-b560-0915-44b5fd3171e0?version=1.1

## Archivos usados

Extraídos del ZIP oficial:

- `COM_ESPA_IN_2024.pdf`
- `COM_ESPA_IN_soluciones_2024.pdf`

## Método

- Se extrajo texto con `pdftotext` para el examen y el solucionario.
- Las respuestas abiertas se copiaron desde el solucionario tal como aparecen o con limpieza mínima de formato.
- Las preguntas cerradas se trasladaron como opciones seleccionables en web.

## Nota importante sobre fiabilidad

En el PDF de soluciones, las preguntas tipo test de los ejercicios **13** y **15-24** no muestran en el texto extraído por `pdftotext` una marca visible de casilla seleccionada. Por eso, para esta primera versión:

- se ha mantenido el enunciado oficial literal,
- se verificaron primero las respuestas por coherencia con el texto y la gramática,
- y después se **confirmaron visualmente** rasterizando el PDF de soluciones a PNG y revisando las casillas marcadas.

Esto afecta a:

- ejercicio 13 (comprensión lectora en inglés)
- ejercicios 15-24 (test de lengua extranjera)

## Respuestas cerradas confirmadas visualmente

### Ejercicio 13
- A → `are sometimes near the most popular casino resorts.`
- B → `is like a mini society.`
- C → `have collected furniture and other items from above.`
- D → `are dangerous places.`
- E → `the people in the tunnels don’t want their families to find them.`

### Ejercicios 15-24
- 15 → `Nice to meet you.`
- 16 → `has got curly hair.`
- 17 → `go`
- 18 → `How about going to the cinema?`
- 19 → `was packing`
- 20 → `they won’t serve you there.`
- 21 → `Reporters`
- 22 → `Yes, she can.`
- 23 → `I agree!`
- 24 → `better and more beautiful`
