window.examCatalog = [
  {
    id: "2024-04-com-in",
    label: "Abril 2024 · Ámbito de comunicación (inglés)",
    totalPoints: 100,
    autoPoints: 40,
    manualPoints: 60,
    status: "Piloto verificado",
  },
  {
    "id": "2024-04-ct",
    "label": "Abril 2024 · Ámbito científico-tecnológico",
    "totalPoints": 100,
    "autoPoints": 20,
    "manualPoints": 80,
    "status": "Verificado"
  },
  {
    "id": "2024-04-social",
    "label": "Abril 2024 · Ámbito social",
    "totalPoints": 100,
    "autoPoints": 25,
    "manualPoints": 75,
    "status": "Verificado"
  },
  {
    id: "2024-06-com-in",
    label: "Junio 2024 · Ámbito de comunicación (inglés)",
    totalPoints: 100,
    autoPoints: 40,
    manualPoints: 60,
    status: "Verificado",
  },
  {
    "id": "2024-06-ct",
    "label": "Junio 2024 · Ámbito científico-tecnológico",
    "totalPoints": 100,
    "autoPoints": 20,
    "manualPoints": 80,
    "status": "Piloto verificado"
  },
  {
    "id": "2024-06-social",
    "label": "Junio 2024 · Ámbito social",
    "totalPoints": 100,
    "autoPoints": 25,
    "manualPoints": 75,
    "status": "Verificado"
  },
  {
    id: "2025-04-com-in",
    label: "Abril 2025 · Ámbito de comunicación (inglés)",
    totalPoints: 100,
    autoPoints: 45,
    manualPoints: 55,
    status: "Verificado",
  },
  {
    id: "2025-04-ct",
    label: "Abril 2025 · Ámbito científico-tecnológico",
    totalPoints: 100,
    autoPoints: 20,
    manualPoints: 80,
    status: "Verificado",
  }
];

window.examData = {
  "2024-04-com-in": {
    id: "2024-04-com-in",
    title: "Convocatoria abril 2024 · Ámbito de comunicación (opción inglés)",
    subtitle: "Primer examen online integrado a partir del pack oficial de la Junta con soluciones.",
    sourceLinks: [
      {
        label: "Archivo oficial de convocatorias anteriores",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores",
      },
      {
        label: "ZIP oficial abril 2024 (incluye soluciones)",
        url: "https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1624993/Pruebas%20convocatoria%20abril%202024%20%28incluye%20soluciones%29/35ea24e8-0010-b560-0915-44b5fd3171e0?version=1.1",
      },
      {
        label: "Notas de extracción y verificación",
        url: "content/exams/2024-04-com-in-notes.md",
      },
    ],
    introHtml: `
      <p>Esta primera versión convierte en web <strong>el examen oficial de abril de 2024</strong> del ámbito de comunicación, opción inglés.</p>
      <p><strong>Cómo corrige:</strong> en preguntas tipo test o verdadero/falso te indica aciertos y fallos. En preguntas abiertas muestra la solución oficial o el texto orientativo del PDF para comparar.</p>
      <p><strong>Resultado final:</strong> la web calcula automáticamente <strong>40 puntos de ejercicios cerrados</strong>. Los otros <strong>60 puntos</strong> quedan para comparación manual porque en el PDF oficial son respuestas abiertas o requieren justificación escrita.</p>
    `,
    sections: [
      {
        type: "reading",
        id: "reading-castellano",
        title: "Texto base · Lengua castellana",
        html: `
          <p><strong>El amor es una droga que hace efecto solo 15 meses</strong></p>
          <p>En 1997, el escritor francés Frédéric Beigbeder decía que “el amor dura tres años” en una novela de inspiración autobiográfica del mismo título. El autor explicaba que, en el primer año de enamoramiento, la novedad de la relación hace que esta sea excitante y que la adrenalina amorosa provoque que pasemos por alto los supuestos defectos del otro. En el segundo año, la pasión se reduce. Suele haber menos sexo y menos comunicación, como si los temas para conversar se fueran agotando. En el tercero, emergen las diferencias, motivo por el que muchas rompen o se instalan en el conformismo. (…) Pero ¿qué nos dice la ciencia sobre esta cuestión?</p>
          <p>Un cuarto de siglo después de aquella novela, la neurocientífica Sara Teller revisa esta cuestión candente en su ensayo <em>Neurocuídate</em>. Entre el cóctel de “drogas” que se liberan con el enamoramiento está la noradrenalina. En palabras de la doctora Teller: “Es una de esas hormonas que liberamos cuando sentimos estrés. Este aumento de la noradrenalina causa taquicardia, palpitaciones, aumento en la presión sanguínea, hace que te tiemblen las manos, eleva la atención, la excitación sexual y puede causar insomnio”.</p>
          <p>Estas reacciones fisiológicas explicarían por qué las personas enamoradas padecen ansiedad, sobre todo cuando quien ocupa sus pensamientos no les presta suficiente atención. La neurociencia ha revelado que los enamorados tienen incluso altos niveles de cortisol, la hormona del estrés. “Como muchos de estos síntomas se perciben en el corazón, tal vez por eso se dice que el amor se halla ahí y no en el cerebro”, concluye la autora de <em>Neurocuídate</em>.</p>
          <p>Que el flechazo tenga una duración limitada, por lo tanto, podría ser una pura cuestión de supervivencia. Alguien que permaneciera constantemente enamorado tendría las facultades mentales alteradas y no podría operar con normalidad, lo cual iría en detrimento de su trabajo y de otras facetas de su vida personal.</p>
          <p>Según la antropóloga y bióloga Helen Fisher, entre 12 y 15 meses después de haberse iniciado el enamoramiento, el “chute” de hormonas decae, con lo que el cerebro recupera su actividad normal, lo que nos procura una visión más clara de quién tenemos delante.</p>
          <p>Esto no necesariamente tiene que derivar en apatía y distanciamiento, como apuntaba Beigbeder, sino que puede dar paso a un amor más sereno y sostenible. (…)</p>
          <p>Volviendo a la neurociencia, superada la montaña rusa inicial, si permanecemos al lado de la misma persona, la bioquímica del cerebro cambia de nuevo. A medida que la dopamina y la noradrenalina disminuyen, la corteza prefrontal —la del juicio— recupera su actividad y el hipotálamo se calma, bajando la producción de las hormonas que desatan la pasión.</p>
          <p>En esta fase madura del amor, podemos ver con claridad dónde estamos y qué proyecto a largo plazo queremos construir. Si la pareja sigue avanzando, se libera oxitocina, considerada la hormona de la confianza o del apego, ya que se produce al estar en contacto con nuestros seres queridos. (…)</p>
          <p>Para que la pasión no vaya decayendo (…) necesitaremos mantener vivas en el cerebro la testosterona y la dopamina. La primera se estimula con una vida sexual activa; en cuanto a la dopamina, la hormona del placer, se puede incrementar haciendo cosas emocionantes en pareja. (…)</p>
          <p class='meta'>Francesc Miralles, elpais.com, 12/10/2023 (texto adaptado)</p>
        `,
      },
      {
        type: "question",
        id: "q1",
        number: 1,
        title: "Subgénero periodístico",
        points: 5,
        kind: "mcqSingleWithOpen",
        includeInSummary: false,
        promptHtml: `<p>Señala el subgénero periodístico al que pertenece el texto. Justifica tu respuesta.</p>`,
        options: ["Editorial", "Noticia", "Reportaje", "Carta al director"],
        correctIndex: 2,
        openLabel: "Tu justificación",
        solutionHtml: `
          <p><strong>Opción correcta:</strong> <strong>Reportaje</strong>.</p>
          <p><strong>Justificación oficial:</strong> Se trata de un texto periodístico en el que el autor (periodista cuyo nombre aparece al final del texto) desarrolla la información elaborada sobre un tema a partir de la investigación y el análisis de lo que se describe. En este caso, desarrolla el tema del enamoramiento a partir de los estudios de diversas disciplinas científicas (Neurociencia, Psicología, Psicología). El reportaje es más extenso que la noticia, y a diferencia de esta, no es necesario que trate de un tema de inmediata actualidad, como es el caso.</p>
        `,
      },
      {
        type: "question",
        id: "q2",
        number: 2,
        title: "Hormonas citadas en el texto",
        points: 5,
        kind: "openText",
        promptHtml: `<p>Extrae el nombre de las cinco hormonas que aparecen citadas en el texto.</p>`,
        openLabel: "Escribe aquí tu respuesta",
        solutionHtml: `
          <p><strong>Solución oficial:</strong></p>
          <ul>
            <li>Noradrenalina</li>
            <li>Cortisol</li>
            <li>Dopamina</li>
            <li>Oxitocina</li>
            <li>Testosterona</li>
          </ul>
        `,
      },
      {
        type: "question",
        id: "q3",
        number: 3,
        title: "Verdadero o falso según el texto",
        points: 5,
        kind: "booleanGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Indica si las siguientes afirmaciones son verdaderas [V] o falsas [F] según el texto.</p>`,
        items: [
          { label: "La oxitocina es la hormona del estrés.", correct: false },
          { label: "El amor no puede durar más de tres años.", correct: false },
          { label: "Un enamoramiento continuo y constante dificultaría el desarrollo de una vida normal.", correct: true },
          { label: "La única manera de mantener la pasión es desarrollar una vida sexual activa.", correct: false },
          { label: "El escritor francés Frédéric Beigbeder afirmaba que el amor duraba tres años.", correct: true },
        ],
      },
      {
        type: "question",
        id: "q4",
        number: 4,
        title: "Explicación de una oración",
        points: 5,
        kind: "openText",
        promptHtml: `<p>Explica el significado de la siguiente oración:</p><blockquote>“…entre 12 y 15 meses después de haberse iniciado el enamoramiento, el “chute” de hormonas decae …”</blockquote>`,
        openLabel: "Escribe aquí tu explicación",
        solutionHtml: `<p><strong>Solución oficial:</strong> El enunciado expresa que cuando alguien se enamora, se liberan una serie de hormonas que causan los síntomas que normalmente asociamos a estar enamorado/a. Y según Helen Fisher (emisora del enunciado), todo esto se vive como una especie de droga (“chute”), proceso que disminuye entre el 12º y 15º mes del inicio del proceso de enamoramiento.</p>`,
      },
      {
        type: "question",
        id: "q5",
        number: 5,
        title: "Redacción argumentativa sobre el amor pasional",
        points: 10,
        kind: "openText",
        promptHtml: `
          <p>Redacta un texto de al menos 200 palabras en el que expreses tu punto de vista sobre si el amor pasional es más auténtico que el amor sereno de una pareja estable, sobre quienes cambian constantemente de pareja para buscar esa pasión y sobre cómo conservar una relación amorosa viva a pesar de los años y la rutina.</p>
          <p class='meta'>Recuerda: en la puntuación se tendrán en cuenta, de forma proporcional, la expresión, la presentación, la ortografía, la estructura y la cohesión del texto.</p>
        `,
        openLabel: "Escribe aquí tu redacción",
        solutionHtml: `<p><strong>Solución oficial:</strong> Respuesta libre.</p>`,
      },
      {
        type: "question",
        id: "q6",
        number: 6,
        title: "Completa las afirmaciones",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Completa las siguientes afirmaciones para que sean correctas.</p>`,
        items: [
          { label: "A. La relación semántica entre “decaer” y “estimular” es…", solution: "antonomía / antonimia → <strong>antonimia</strong>." },
          { label: "B. “Neurociencia” es una palabra… porque está formada por dos lexemas.", solution: "<strong>compuesta</strong>." },
          { label: "C. “Cerebro” y “corazón” pertenecen al mismo… de “órganos vitales”.", solution: "<strong>campo semántico</strong>." },
          { label: "D. En el texto hay muchas palabras derivadas, como…", solution: "por ejemplo <strong>inspiración, excitante, distanciamiento…</strong>" },
          { label: "E. El autor utiliza la palabra “drogas” para referirse a “hormonas”, por tanto la usa en sentido…", solution: "<strong>connotativo</strong>." },
        ],
      },
      {
        type: "question",
        id: "q7",
        number: 7,
        title: "Categoría gramatical y tipo de palabra",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Indica la categoría gramatical de las siguientes palabras subrayadas en el texto y el tipo de palabra según su formación.</p>`,
        items: [
          { label: "A. enamorados", solution: "<strong>Sustantivo/adjetivo</strong> · <strong>parasintética</strong>." },
          { label: "B. tiemblen", solution: "<strong>Verbo</strong> · <strong>simple</strong>." },
          { label: "C. limitada", solution: "<strong>Adjetivo</strong> · <strong>derivada</strong>." },
          { label: "D. después", solution: "<strong>Adverbio</strong> · <strong>simple</strong>." },
          { label: "E. Esto", solution: "<strong>Pronombre</strong> · <strong>simple</strong>." },
        ],
      },
      {
        type: "question",
        id: "q8",
        number: 8,
        title: "Funciones sintácticas",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Identifica la función sintáctica de las palabras o sintagmas subrayados en las siguientes oraciones.</p>`,
        items: [
          { label: "A. La pasión se reduce…", solution: "<strong>NP: núcleo del predicado</strong>." },
          { label: "B. ¿qué nos dice la ciencia sobre esta cuestión?", solution: "<strong>Complemento de régimen o suplemento</strong>." },
          { label: "C. Este aumento de la noradrenalina causa aumento en la presión sanguínea…", solution: "<strong>CD (complemento directo)</strong>." },
          { label: "D. Esto no necesariamente tiene que derivar en apatía…", solution: "<strong>Sujeto</strong>." },
          { label: "E. …que te tiemblen las manos…", solution: "<strong>CI (complemento indirecto)</strong>." },
        ],
      },
      {
        type: "question",
        id: "q9",
        number: 9,
        title: "Ortografía y opción correcta",
        points: 5,
        kind: "multiChoiceGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Elige la palabra correcta de entre las opciones que vienen entre paréntesis.</p>`,
        items: [
          { label: "A. Siento que mis amigos siempre me…", options: ["protegen", "protejen"], correctIndex: 0 },
          { label: "B. Mario … en la cuenta de que se había equivocado.", options: ["cayó", "calló"], correctIndex: 0 },
          { label: "C. Andaluces,…", options: ["levantaos", "levantados"], correctIndex: 0 },
          { label: "D. El agua … a 100 grados.", options: ["hierve", "hierbe"], correctIndex: 0 },
          { label: "E. Es … que no tienes ni idea del tema.", options: ["obvio", "ovvio"], correctIndex: 0 },
        ],
      },
      {
        type: "reading",
        id: "reading-poema",
        title: "Texto base · Conocimiento literario",
        html: `
          <div class="poem">
            <p><strong>“Oración”</strong></p>
            <p>Que estás en la tierra, Padre nuestro,<br>Que te siento en la púa del pino,<br>En el torso azul del obrero,<br>En la niña que borda curvada<br>La espalda, mezclando el hilo en el dedo.</p>
            <p>Padre nuestro que estás en la tierra,<br>En el surco,<br>En el huerto,<br>En la mina,<br>En el puerto,<br>En el cine,<br>En el vino,<br>En la casa del médico.</p>
            <p>Padre nuestro que estás en la tierra,<br>Donde tienes tu gloria y tu infierno<br>Y tu limbo; que estás en los cafés<br>Donde los pudientes beben su refresco.</p>
            <p>Padre nuestro que estás en la tierra,<br>En un banco del Prado leyendo.<br>Eres ese viejo que da migas de pan a los pájaros del paseo.</p>
            <p>Padre nuestro que estás en la tierra,<br>En la cigarra, en el beso,<br>En la espiga, en el pecho<br>De todos los que son buenos.</p>
            <p>Padre que habitas en cualquier sitio,<br>Dios que penetras en cualquier hueco,<br>Tú que quitas la angustia, que estás en la tierra,<br>Padre nuestro que sí que te vemos<br>Los que luego hemos de ver,<br>Donde sea, o ahí en el cielo.</p>
            <p class='meta'>Que estás en la tierra (1962), Gloria Fuertes</p>
          </div>
        `,
      },
      {
        type: "question",
        id: "q10",
        number: 10,
        title: "Verdadero o falso sobre el poema",
        points: 5,
        kind: "booleanGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Indica si las siguientes afirmaciones sobre el texto anterior son verdaderas [V] o falsas [F].</p>`,
        items: [
          { label: "La poeta afirma que Dios no existe.", correct: false },
          { label: "La poeta intenta convencer al lector de que para encontrar a Dios hay que ser bueno e ir a la iglesia.", correct: false },
          { label: "Gloria Fuertes pretende transmitir que Dios está en todas partes, especialmente en lo cotidiano y sencillo.", correct: true },
          { label: "El poema cuenta una historia.", correct: false },
          { label: "La poeta expresa su cercanía a Dios.", correct: true },
        ],
      },
      {
        type: "question",
        id: "q11",
        number: 11,
        title: "Características del texto lírico",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Contesta a las siguientes preguntas referidas al conocimiento de las características del texto lírico.</p>`,
        items: [
          { label: "A. ¿Qué tipo de rima usa?", solution: "<strong>Asonante</strong>." },
          { label: "B. ¿Cómo se llama cada una de las líneas del texto?", solution: "<strong>Verso</strong>." },
          { label: "C. ¿El poema pretende contar una historia, representar unos hechos o transmitir unas emociones e ideas?", solution: "<strong>Transmitir unas emociones e ideas</strong>." },
          { label: "D. ¿Qué recurso retórico se observa en la enumeración “En el surco/En el huerto/En la mina/En el puerto/En el cine/En el vino…”?", solution: "<strong>Anáfora o paralelismo</strong>." },
          { label: "E. ¿Cómo se llama el fenómeno por el cual, al contar las sílabas, se une la vocal final de una palabra con la inicial de la siguiente?", solution: "<strong>Sinalefa</strong>." },
        ],
      },
      {
        type: "reading",
        id: "reading-english",
        title: "Texto base · Lengua extranjera (inglés)",
        html: `
          <p><strong>The underground city in Las Vegas.</strong></p>
          <p>Most people visiting Las Vegas don’t know about the tunnels. Las Vegas has an elaborate maze of tunnels — hundreds of miles in total — to capture and redirect water from downpours and to prevent flash floods. There are entrances to these tunnels all over town, including next to some of the biggest, most popular casino resorts. Some tunnels are only four or five feet tall, but many are cavernous: 15 feet or more from top to bottom. They’re often damp, devoid entirely of light for long stretches — a sharp contrast to all the bright signs that glow around the clock aboveground.</p>
          <p>For hundreds of people, these tunnels are home. Some are transient — temporary occupants moving in and out every few weeks. But several tunnels have become small, off-the-map communities. There’s no fresh water, and the only electricity comes from batteries, but people have still managed to build simulated apartments inside the industrial-sized, concrete-walled waterways. Some have lived down here for a decade or more. Each occupied tunnel has its own customs and rituals and unofficial leaders.</p>
          <p>Nearly everyone in the tunnels lives with some sort of addiction, but many have also gathered enough discarded items from above to create the illusion of a home. They have beds with bed frames, tables with chairs, fridges and bicycles and barbecue grills — all pulled from curbs or dumpsters. A lot of the beds and bookcases sit on homemade stilts a foot or two off the ground, because when the water comes through, it comes fast and hard, and sometimes it sweeps away everything it touches.</p>
          <p>Of course, the tunnels can be dangerous when it’s not raining, too. There are knives and guns and irrational people down every tunnel. Some sleep inside the smaller concrete pipes that shoot off of the main tunnels. Some residents are hiding from the law or dangerous people. Some from their own parents.</p>
          <p class='meta'>Texto adaptado de www.deseret.com</p>
          <div class="vocab-card">
            <strong>Vocabulario:</strong>
            <ul>
              <li><strong>Maze</strong>: laberinto</li>
              <li><strong>Gathered</strong>: recolectado</li>
              <li><strong>Downpours</strong>: aguaceros</li>
              <li><strong>Stilts</strong>: pilotes</li>
              <li><strong>Flash floods</strong>: riadas</li>
              <li><strong>Shoot off</strong>: salen</li>
              <li><strong>Damp</strong>: húmedos</li>
            </ul>
          </div>
        `,
      },
      {
        type: "question",
        id: "q12",
        number: 12,
        title: "True or false + frase justificativa",
        points: 5,
        kind: "booleanGroupWithJustification",
        includeInSummary: false,
        promptHtml: `<p>Indica si las siguientes afirmaciones son verdaderas (T) o falsas (F) y escribe la frase del texto que justifica tu respuesta.</p>`,
        items: [
          {
            label: "The purpose of the Las Vegas tunnels is to house homeless people.",
            correct: false,
            solution: "“Las Vegas has an elaborate maze of tunnels […] to capture and redirect water from downpours and to prevent flash floods.”",
          },
          {
            label: "Not all the people who live in the tunnels have established a permanent home there.",
            correct: true,
            solution: "“For hundreds of people, these tunnels are home. Some are transient — temporary occupants moving in and out every few weeks.”",
          },
          {
            label: "Some people started living in tunnels more than ten years ago.",
            correct: true,
            solution: "“Some have lived down here for a decade or more.”",
          },
          {
            label: "Water is no longer a problem in the tunnels.",
            correct: false,
            solution: "“[W]hen the water comes through, it comes fast and hard, and sometimes it sweeps away everything it touches.”",
          },
          {
            label: "There are many drug addicts in the tunnels.",
            correct: true,
            solution: "“Nearly everyone in the tunnels lives with some sort of addiction…”",
          },
        ],
      },
      {
        type: "question",
        id: "q13",
        number: 13,
        title: "Comprensión lectora en inglés · opción correcta",
        points: 5,
        kind: "multiChoiceGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Marca la respuesta que mejor se ajuste a lo expresado en el texto.</p>`,
        noteHtml: `<p class='meta'>Nota: en el PDF de soluciones la marca visible de estas casillas no aparece al extraer el texto; por eso se confirmaron visualmente a partir del propio PDF rasterizado, además de comprobarse contra el texto oficial.</p>`,
        items: [
          {
            label: "A. The entrances to the tunnels…",
            options: [
              "are always under the casino resorts.",
              "are sometimes near the most popular casino resorts.",
              "are marked by bright lights.",
            ],
            correctIndex: 1,
          },
          {
            label: "B. Each occupied tunnel…",
            options: ["has apartments inside.", "is like a mini society.", "has water and electricity."],
            correctIndex: 1,
          },
          {
            label: "C. The people living in the tunnels…",
            options: [
              "have collected furniture and other items from above.",
              "have been given beds and bookcases.",
              "have built fridges, bicycles and barbecue grills.",
            ],
            correctIndex: 0,
          },
          {
            label: "D. The tunnels…",
            options: ["are full of people who sleep with weapons.", "are located a foot or two under water.", "are dangerous places."],
            correctIndex: 2,
          },
          {
            label: "E. Sometimes…",
            options: [
              "the people in the tunnels don’t want their families to find them.",
              "the people in the tunnels work for the law.",
              "dangerous people hide in concrete pipes.",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        type: "question",
        id: "q14",
        number: 14,
        title: "Writing in English",
        points: 10,
        kind: "openText",
        promptHtml: `
          <p>Escribe un texto en inglés de entre 50 y 70 palabras en el que des tu opinión sobre si es buena idea mostrar la vida de las personas sin hogar en canales de YouTube.</p>
          <p class='meta'>Puedes usar <em>can</em>, <em>mustn’t</em>, <em>should</em> y oraciones condicionales. Expresiones sugeridas: <em>YouTube channel / exploitation / views / show sympathy</em>.</p>
        `,
        openLabel: "Write your answer here",
        solutionHtml: `<p><strong>Solución oficial:</strong> Respuesta libre.</p>`,
      },
      {
        type: "question",
        id: "q15-24",
        number: "15-24",
        title: "Conocimiento de la lengua extranjera · test",
        points: 20,
        kind: "multiChoiceGroup",
        pointsPerItem: 2,
        includeInSummary: true,
        promptHtml: `<p>Elige en cada caso la opción que consideres más correcta.</p>`,
        noteHtml: `<p class='meta'>Igual que en el ejercicio 13, estas respuestas se confirmaron visualmente a partir del PDF de soluciones rasterizado, porque el texto extraído no muestra la casilla marcada.</p>`,
        items: [
          { label: "15. -My name is Jeff.", options: ["Kind to meet you.", "Fine to meet you.", "Nice to meet you."], correctIndex: 2 },
          { label: "16. Zadie…", options: ["have got curly hair.", "has got curly hair.", "is curly hair."], correctIndex: 1 },
          { label: "17. Let’s … surfing tomorrow.", options: ["do", "go", "play"], correctIndex: 1 },
          { label: "18. –Can you think of anything to do later?", options: ["How about go to the cinema?", "How about going to the cinema?", "How about we go to the cinema?"], correctIndex: 1 },
          { label: "19. Yesterday at 6 p.m. I … my bag.", options: ["were packing", "was packing", "was packed"], correctIndex: 1 },
          { label: "20. Unless you are polite,…", options: ["they won’t serve you there.", "they will serve you there.", "they would serve you there."], correctIndex: 0 },
          { label: "21. … write stories for a newspaper.", options: ["Editors", "Reporters", "Managers"], correctIndex: 1 },
          { label: "22. -Can Esther speak French?", options: ["Yes, she can.", "Yes, Esther can.", "Yes, she can speak."], correctIndex: 0 },
          { label: "23. –“Serranitos” are delicious.", options: ["I am agree!", "I agree!", "I think that yes!"], correctIndex: 1 },
          { label: "24. Tim’s voice is … than Noel’s.", options: ["better and beautifuller", "more good and more beautiful", "better and more beautiful"], correctIndex: 2 },
        ],
      },
    ],
  },
  "2024-04-ct": {
    "id": "2024-04-ct",
    "title": "Convocatoria abril 2024 · Ámbito científico-tecnológico",
    "subtitle": "Prueba interactiva basada en el modelo oficial, con apoyo visual para los esquemas, la gráfica de movimiento y el problema geométrico.",
    "sourceLinks": [
      {
        "label": "Archivo oficial de convocatorias anteriores",
        "url": "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores"
      },
      {
        "label": "ZIP oficial abril 2024 (incluye soluciones)",
        "url": "https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1624993/Pruebas%20convocatoria%20abril%202024%20%28incluye%20soluciones%29/35ea24e8-0010-b560-0915-44b5fd3171e0?version=1.1"
      },
      {
        "label": "PDF del examen (copia local)",
        "url": "data/exam-packs/2024-04/extracted/Convocatoria%20abril%202024/CT_ESPA_2024.pdf"
      },
      {
        "label": "PDF del solucionario (copia local)",
        "url": "data/exam-packs/2024-04/extracted/Convocatoria%20abril%202024/CT_ESPA_soluciones_2024.pdf"
      },
      {
        "label": "Notas de extracción y apoyo visual",
        "url": "content/exams/2024-04-ct-notes.md"
      }
    ],
    "introHtml": "<p>Examen oficial de abril de 2024 del ámbito científico-tecnológico. Mantiene la estructura original por bloques y añade apoyo visual en las preguntas basadas en esquemas, gráficas y geometría.</p><ul><li><strong>A.</strong> Conceptos básicos (15 puntos)</li><li><strong>B.</strong> Comprensión y análisis de un documento escrito (20 puntos)</li><li><strong>C.</strong> Comprensión y análisis de información gráfica (30 puntos)</li><li><strong>D.</strong> Expresión escrita (15 puntos)</li><li><strong>E.</strong> Resolución de un problema (20 puntos)</li></ul><p><strong>Corrección automática:</strong> 20 puntos de ejercicios cerrados (1, 3, 4 y 5). Los otros 80 puntos quedan para comparación manual con la solución oficial.</p>",
    "sections": [
      {
        "type": "question",
        "id": "q1",
        "number": 1,
        "title": "Verdadero o falso sobre lenguaje algebraico",
        "points": 5,
        "kind": "booleanGroup",
        "pointsPerItem": 1,
        "includeInSummary": true,
        "promptHtml": "<p>Indica si las siguientes afirmaciones son verdaderas [V] o falsas [F].</p>",
        "items": [
          {
            "label": "Si Ana tiene x años y es 2 años mayor que su hermana, su hermana tiene x + 2 años.",
            "correct": false
          },
          {
            "label": "Si a una reunión en la que se ha citado a un total de P personas solo asiste el 80% de ellas, están asistiendo 0,8P personas.",
            "correct": true
          },
          {
            "label": "Si el precio de las naranjas está a 1,50 €/kg y compramos x kg, pagaremos 1,50x €.",
            "correct": true
          },
          {
            "label": "Si el lado de un cuadrado mide a, su perímetro será a².",
            "correct": false
          },
          {
            "label": "Si una población de bacterias B se reduce a la cuarta parte, quedarán B/4 bacterias.",
            "correct": true
          }
        ]
      },
      {
        "type": "question",
        "id": "q2",
        "number": 2,
        "title": "Servicios digitales y administración electrónica",
        "points": 5,
        "kind": "openList",
        "promptHtml": "<p>Relaciona cada descripción con uno de estos términos: <strong>DNI electrónico</strong>, <strong>sede electrónica</strong>, <strong>banca electrónica</strong>, <strong>almacenamiento en la nube</strong> y <strong>certificado digital</strong>.</p>",
        "items": [
          {
            "label": "A. Dirección electrónica de una Administración Pública disponible para la ciudadanía.",
            "solution": "sede electrónica"
          },
          {
            "label": "B. Espacio de almacenamiento y procesamiento de datos y archivos ubicado en internet.",
            "solution": "almacenamiento en la nube"
          },
          {
            "label": "C. Documento emitido por la Policía que acredita físicamente y también electrónicamente la identidad.",
            "solution": "DNI electrónico"
          },
          {
            "label": "D. Prestación de servicios financieros al cliente mediante equipos informáticos en tiempo real.",
            "solution": "banca electrónica"
          },
          {
            "label": "E. Documento digital expedido por la FNMT para identificarse y firmar en internet.",
            "solution": "certificado digital"
          }
        ],
        "noteHtml": "<p>La corrección automática no puntúa este apartado, pero puedes comparar tus términos con la solución oficial.</p>"
      },
      {
        "type": "question",
        "id": "q3",
        "number": 3,
        "title": "Átomos y moléculas",
        "points": 5,
        "kind": "multiChoiceGroup",
        "pointsPerItem": 1,
        "includeInSummary": true,
        "promptHtml": "<p>Completa cada afirmación eligiendo la opción correcta.</p>",
        "items": [
          {
            "label": "A1. En la corteza del átomo se encuentran los…",
            "options": [
              "electrones",
              "protones"
            ],
            "correctIndex": 0
          },
          {
            "label": "A2. Esas partículas tienen carga…",
            "options": [
              "positiva",
              "negativa"
            ],
            "correctIndex": 1
          },
          {
            "label": "B. Si un átomo tiene 6 protones y 8 neutrones, su número atómico es…",
            "options": [
              "6",
              "14"
            ],
            "correctIndex": 0
          },
          {
            "label": "C. Las moléculas están formadas por la unión de dos o más…",
            "options": [
              "átomos",
              "partículas subatómicas"
            ],
            "correctIndex": 0
          },
          {
            "label": "D. En los enlaces donde un átomo gana electrones y otro los pierde hablamos de enlaces…",
            "options": [
              "iónicos",
              "covalentes"
            ],
            "correctIndex": 0
          }
        ]
      },
      {
        "type": "reading",
        "id": "reading-cepsa",
        "title": "Texto base · Biocombustibles y transición energética",
        "html": "<p><strong>Cepsa construirá una nueva planta de biocombustibles en Huelva</strong></p><p>Cepsa construirá una nueva planta de biocombustibles de segunda generación (2G) en Palos de la Frontera, Huelva, que supondrá una inversión de hasta 1000 millones de euros. Esta nueva planta, que se ubicará en el Parque Energético La Rábida, producirá tanto diésel renovable como SAF (combustible sostenible para aviación) y supondrá la creación de hasta 1600 puestos de trabajo, directos e indirectos, durante su fase de construcción.</p><p>Los biocombustibles 2G serán fabricados a partir de residuos orgánicos, como aceites usados de cocina o desechos agrícolas. Estos biocombustibles fomentan la economía circular, al utilizar para su producción residuos que de otro modo terminarían en vertederos.</p><p>La utilización de biocombustibles puede llegar a reducir hasta en un 90% las emisiones de CO2 respecto a los combustibles tradicionales, por lo que son un elemento clave para avanzar en la transición energética e impulsar la descarbonización del transporte, especialmente en sectores en los que la electrificación es muy compleja, como el transporte pesado por carretera, el aéreo y el marítimo.</p><p>La construcción de esta nueva planta responde al objetivo de la compañía de convertirse en esta década en un referente de la transición energética y liderar la fabricación de biocombustibles en España y Portugal, con una producción anual de 2,5 millones de toneladas, de las que 800.000 toneladas serán de SAF.</p><p>En su estrategia 2030, Cepsa impulsa la producción de moléculas verdes, principalmente hidrógeno renovable y biocombustibles, y plantea reducir en 2030 sus emisiones de CO2 en un 55% para llegar a emisiones netas cero en 2050. El artículo también vincula estos biocombustibles con varios Objetivos de Desarrollo Sostenible.</p><p class=\"meta\">Texto adaptado de El Correo de Andalucía, 8/03/2023</p>"
      },
      {
        "type": "question",
        "id": "q4",
        "number": 4,
        "title": "Verdadero o falso sobre el texto",
        "points": 5,
        "kind": "booleanGroup",
        "pointsPerItem": 1,
        "includeInSummary": true,
        "promptHtml": "<p>Basándote en el texto, indica si las siguientes afirmaciones son verdaderas [V] o falsas [F].</p>",
        "items": [
          {
            "label": "Cuando Cepsa construya su planta de biocombustibles en Huelva creará hasta 1.600 puestos de trabajo, directos e indirectos.",
            "correct": false
          },
          {
            "label": "La producción anual destinada a SAF será de 2,5 millones de toneladas.",
            "correct": false
          },
          {
            "label": "Los biocombustibles ayudan especialmente en sectores donde electrificar el transporte es complicado.",
            "correct": true
          },
          {
            "label": "El objetivo final del proyecto es quedarse en cero neto desde 2050 sin ir más allá.",
            "correct": false
          },
          {
            "label": "La fabricación de biocombustibles fomenta la economía circular porque se basa en tirar los residuos a vertederos.",
            "correct": false
          }
        ]
      },
      {
        "type": "question",
        "id": "q5",
        "number": 5,
        "title": "Tipo de energía del texto",
        "points": 5,
        "kind": "multiChoiceGroup",
        "pointsPerItem": 5,
        "includeInSummary": true,
        "promptHtml": "<p>Marca el nombre de la energía que proporcionan recursos como aceites usados de cocina o desechos agrícolas.</p>",
        "items": [
          {
            "label": "Selecciona la opción correcta.",
            "options": [
              "Energía geotérmica",
              "Energía de la biomasa",
              "Energía térmica",
              "Energía nuclear"
            ],
            "correctIndex": 1
          }
        ]
      },
      {
        "type": "question",
        "id": "q6",
        "number": 6,
        "title": "Energías renovables y no renovables",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Describe brevemente la diferencia entre fuentes de energía renovables y no renovables. Después indica de cuál de los dos tipos se habla en el texto.</p>",
        "openLabel": "Tu explicación",
        "solutionHtml": "<p>Las fuentes de energía son los recursos que nos ofrece la naturaleza para producir energía utilizable. Son <strong>renovables</strong> cuando proceden de recursos naturales ilimitados o que se regeneran, y <strong>no renovables</strong> cuando provienen de recursos limitados.</p><p>En el texto se habla de <strong>energía renovable</strong>, porque el biocombustible procede de la biomasa.</p>"
      },
      {
        "type": "question",
        "id": "q7",
        "number": 7,
        "title": "Desarrollo sostenible",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>¿En qué consiste el desarrollo sostenible?</p>",
        "openLabel": "Tu respuesta",
        "solutionHtml": "<p>El desarrollo sostenible es aquel que satisface las necesidades del presente sin comprometer las de las futuras generaciones, manteniendo un equilibrio entre las especies y los recursos del entorno. En otras palabras, implica explotar recursos con ciclos de regeneración que permitan su continuidad.</p>"
      },
      {
        "type": "reading",
        "id": "reading-nutricion",
        "title": "Apoyo visual · Función de nutrición",
        "html": "<p>Usa esta página del examen para responder a las cuestiones 8, 9 y 10.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-3.png\" alt=\"Página del examen con el esquema de la función de nutrición\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Esquema de la función de nutrición y relación entre aparatos del cuerpo humano.</figcaption></figure>"
      },
      {
        "type": "question",
        "id": "q8",
        "number": 8,
        "title": "Función vital representada",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>¿Qué función del ser humano representa el gráfico 1? ¿Cuáles son las otras dos funciones básicas de los seres vivos?</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-3.png\" alt=\"Página del examen con el esquema de la función de nutrición\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /></figure>",
        "openLabel": "Tu explicación",
        "solutionHtml": "<p>El gráfico representa la <strong>función de nutrición</strong>.</p><p>Las otras dos funciones básicas de los seres vivos son la <strong>relación</strong> y la <strong>reproducción</strong>.</p>"
      },
      {
        "type": "question",
        "id": "q9",
        "number": 9,
        "title": "Aparatos que intervienen en la nutrición",
        "points": 5,
        "kind": "openList",
        "promptHtml": "<p>Indica qué aparatos intervienen en la función representada y describe brevemente la función de cada uno.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-3.png\" alt=\"Página del examen con el esquema de la función de nutrición\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /></figure>",
        "items": [
          {
            "label": "Aparato digestivo",
            "solution": "Digiere los alimentos, absorbe nutrientes y elimina desechos en forma de heces"
          },
          {
            "label": "Aparato respiratorio",
            "solution": "Realiza el intercambio gaseoso: toma oxígeno y expulsa CO2"
          },
          {
            "label": "Aparato circulatorio",
            "solution": "Lleva nutrientes y oxígeno a las células y recoge sustancias de desecho"
          },
          {
            "label": "Aparato excretor",
            "solution": "Elimina las sustancias de desecho producidas por el cuerpo"
          }
        ],
        "noteHtml": "<p>Se aceptan formulaciones equivalentes si describen correctamente la función de cada aparato.</p>"
      },
      {
        "type": "question",
        "id": "q10",
        "number": 10,
        "title": "Enfermedades por aparato",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Coloca estas enfermedades debajo del aparato que corresponda: bronquitis, cólico nefrítico, taquicardia, asma, infarto de miocardio, hepatitis, cistitis, apendicitis, gastroenteritis, varices, enfisema pulmonar, cálculos biliares, gastritis, uretritis y arterioesclerosis.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-4.png\" alt=\"Página del examen con la tabla por aparatos y la gráfica velocidad-tiempo\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /></figure>",
        "openLabel": "Escribe tu clasificación",
        "solutionHtml": "<p><strong>Aparato digestivo:</strong> hepatitis, apendicitis, gastroenteritis, cálculos biliares y gastritis.</p><p><strong>Aparato respiratorio:</strong> bronquitis, asma y enfisema pulmonar.</p><p><strong>Aparato circulatorio:</strong> taquicardia, infarto de miocardio, varices y arterioesclerosis.</p><p><strong>Aparato excretor:</strong> cólico nefrítico, cistitis y uretritis.</p>"
      },
      {
        "type": "reading",
        "id": "reading-movimiento",
        "title": "Apoyo visual · Gráfica velocidad-tiempo",
        "html": "<p>Usa esta gráfica para responder a las cuestiones 11, 12 y 13.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-4.png\" alt=\"Página del examen con la gráfica velocidad-tiempo del vehículo\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Gráfica velocidad-tiempo con tres tramos.</figcaption></figure>"
      },
      {
        "type": "question",
        "id": "q11",
        "number": 11,
        "title": "Lectura de la gráfica de movimiento",
        "points": 6,
        "kind": "openList",
        "promptHtml": "<p>Observa la gráfica y responde a las cuestiones.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-4.png\" alt=\"Página del examen con la gráfica velocidad-tiempo del vehículo\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /></figure>",
        "items": [
          {
            "label": "A1. ¿Cuánto dura el movimiento en total?",
            "solution": "100 segundos"
          },
          {
            "label": "A2. ¿Cuánto dura el movimiento en el tramo 2?",
            "solution": "50 segundos"
          },
          {
            "label": "B1. ¿Cuál es la velocidad máxima que alcanza?",
            "solution": "30 m/s"
          },
          {
            "label": "B2. ¿Permanece parado en algún periodo?",
            "solution": "No; solo se detiene en el instante final cuando la velocidad vale 0 m/s"
          },
          {
            "label": "C. ¿Hay algún tramo en el que frene?",
            "solution": "Sí, en el tramo 3, donde la velocidad baja de 30 m/s a 0 m/s"
          }
        ]
      },
      {
        "type": "question",
        "id": "q12",
        "number": 12,
        "title": "Aceleración en cada tramo",
        "points": 6,
        "kind": "openList",
        "promptHtml": "<p>Completa la tabla con la aceleración de cada tramo.</p><table class=\"exam-table\"><thead><tr><th>Tramo</th><th>Aceleración (m/s²)</th></tr></thead><tbody><tr><td>1</td><td>…</td></tr><tr><td>2</td><td>…</td></tr><tr><td>3</td><td>…</td></tr></tbody></table><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-4.png\" alt=\"Página del examen con la gráfica velocidad-tiempo del vehículo\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /></figure>",
        "items": [
          {
            "label": "Tramo 1",
            "solution": "0,5 m/s²"
          },
          {
            "label": "Tramo 2",
            "solution": "0 m/s²"
          },
          {
            "label": "Tramo 3",
            "solution": "-3 m/s²"
          }
        ],
        "noteHtml": "<p>El solucionario oficial usa la fórmula <code>a = (v<sub>f</sub> - v<sub>i</sub>) / (t<sub>f</sub> - t<sub>i</sub>)</code>.</p>"
      },
      {
        "type": "question",
        "id": "q13",
        "number": 13,
        "title": "Tipo de movimiento y aceleración",
        "points": 3,
        "kind": "openList",
        "promptHtml": "<p>Di el tipo de movimiento y la aceleración que se da en cada tramo, justificando tu respuesta.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-4.png\" alt=\"Página del examen con la gráfica velocidad-tiempo del vehículo\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /></figure>",
        "items": [
          {
            "label": "A. Tramo 1",
            "solution": "Movimiento rectilíneo uniformemente acelerado (MRUA), con aceleración positiva y velocidad creciente"
          },
          {
            "label": "B. Tramo 2",
            "solution": "Movimiento rectilíneo uniforme (MRU), con aceleración nula y velocidad constante"
          },
          {
            "label": "C. Tramo 3",
            "solution": "Movimiento rectilíneo uniformemente acelerado (MRUA) con aceleración negativa; el vehículo va frenando"
          }
        ]
      },
      {
        "type": "question",
        "id": "q14",
        "number": 14,
        "title": "Texto sobre robotización",
        "points": 15,
        "kind": "openText",
        "promptHtml": "<p>Redacta un texto de al menos 150 palabras sobre la robotización siguiendo el esquema oficial:</p><ul><li>En qué consiste el proceso de robotización y en qué se diferencia de la mecanización y la automatización.</li><li>Los diferentes sistemas que componen un robot.</li><li>Algunas posibles aplicaciones de la robótica.</li></ul>",
        "openLabel": "Tu redacción",
        "noteHtml": "<p>Además del contenido, se valoran la presentación, la ortografía, la estructura, la coherencia y la cohesión.</p>",
        "solutionHtml": "<p>Una respuesta completa debe explicar que la robotización es una fase avanzada de la optimización tecnológica en la que un robot puede sustituir no solo el trabajo manual, sino también parte de la toma de decisiones mediante un programa.</p><p>También debe diferenciarla de la <strong>mecanización</strong> (la máquina sustituye el trabajo manual, pero necesita más control del operario) y de la <strong>automatización</strong> (la máquina realiza tareas sin control permanente, pero sin la capacidad de decisión propia de un robot).</p><p>El solucionario oficial menciona sistemas como el mecánico, el eléctrico, el de control y el sensorial, y acepta aplicaciones en industria, medicina, agricultura, astronáutica o tareas domésticas.</p>"
      },
      {
        "type": "reading",
        "id": "reading-problema",
        "title": "Apoyo visual · Problema geométrico del centro escolar",
        "html": "<p>Usa esta figura para responder a las cuestiones 15, 16 y 17.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-6.png\" alt=\"Página del examen con el problema geométrico del centro escolar\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Terreno rectangular de 98 × 76 metros y edificio en forma de L.</figcaption></figure>"
      },
      {
        "type": "question",
        "id": "q15",
        "number": 15,
        "title": "Perímetro y superficie del terreno",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Calcula el perímetro y la superficie total del terreno.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-6.png\" alt=\"Página del examen con el problema geométrico del centro escolar\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /></figure>",
        "openLabel": "Desarrolla los cálculos",
        "solutionHtml": "<p><strong>Perímetro:</strong> <code>P = 2·76 + 2·98 = 348 m</code>.</p><p><strong>Superficie total:</strong> <code>A = 76 · 98 = 7.448 m²</code>.</p>"
      },
      {
        "type": "question",
        "id": "q16",
        "number": 16,
        "title": "Superficie del edificio y porcentaje de patio",
        "points": 10,
        "kind": "openText",
        "promptHtml": "<p>¿Cuál es la superficie del terreno que ocupará el edificio? ¿Qué porcentaje del terreno ocupará el edificio y qué porcentaje quedará de patio?</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-6.png\" alt=\"Página del examen con el problema geométrico del centro escolar\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /></figure>",
        "openLabel": "Explica tus operaciones",
        "solutionHtml": "<p>La superficie del edificio puede obtenerse descomponiéndolo en dos rectángulos: <code>12 · 32 + 10 · 31 = 384 + 310 = 694 m²</code>.</p><p>El porcentaje ocupado por el edificio es <code>(694 / 7448) · 100 = 9,32 %</code>.</p><p>El porcentaje que queda de patio es <code>100 - 9,32 = 90,68 %</code>.</p>"
      },
      {
        "type": "question",
        "id": "q17",
        "number": 17,
        "title": "Coste del muro exterior",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Se quiere cercar el exterior del terreno dejando una apertura de 5 metros para la puerta principal. Si cada metro lineal cuesta 45 €, ¿cuánto costará construir el muro completo?</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-ct-page-6.png\" alt=\"Página del examen con el problema geométrico del centro escolar\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /></figure>",
        "openLabel": "Resultado final",
        "solutionHtml": "<p>Del perímetro total de 348 m se dejan <strong>5 m</strong> sin cercar, así que hay que construir <code>343 m</code> de muro.</p><p>El coste total es <code>343 · 45 = 15.435 €</code>.</p>"
      }
    ]
  },
  "2024-06-com-in": {
    id: "2024-06-com-in",
    title: "Convocatoria junio 2024 · Ámbito de comunicación (opción inglés)",
    subtitle: "Segundo examen online integrado a partir del pack oficial de la Junta con soluciones.",
    sourceLinks: [
      {
        label: "Archivo oficial de convocatorias anteriores",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores",
      },
      {
        label: "ZIP oficial junio 2024 (incluye soluciones)",
        url: "https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1624993/Pruebas%20convocatoria%20junio%202024%20%28incluye%20soluciones%29/1c4d10d9-36a0-8654-0095-1944e6c8dab7?version=1.1",
      },
      {
        label: "Notas de extracción y verificación",
        url: "content/exams/2024-06-com-in-notes.md",
      },
    ],
    introHtml: `
      <p>Esta versión convierte en web <strong>el examen oficial de junio de 2024</strong> del ámbito de comunicación, opción inglés.</p>
      <p><strong>Cómo corrige:</strong> en preguntas tipo test o verdadero/falso te indica aciertos y fallos. En preguntas abiertas muestra la solución oficial o un modelo orientativo para comparar.</p>
      <p><strong>Resultado final:</strong> la web calcula automáticamente <strong>40 puntos de ejercicios cerrados</strong>. Los otros <strong>60 puntos</strong> quedan para comparación manual porque el examen incluye respuestas abiertas, redacciones o justificaciones.</p>
    `,
    sections: [
      {
        type: "reading",
        id: "reading-castellano",
        title: "Texto base · Lengua castellana",
        html: `
          <p><strong>NORMAS DE USO DE LA BIBLIOTECA</strong></p>
          <p><strong>1. Servicios bibliotecarios</strong></p>
          <p><strong>1.1</strong> El acceso a los servicios de la biblioteca es libre y gratuito.</p>
          <p><strong>1.2</strong> Los niños menores de 6 años permanecerán en la Sala de Adultos acompañados de sus padres o bien se dirigirán a la Sala Infantil, para garantizar el buen funcionamiento y el silencio preciso en las instalaciones.</p>
          <p><strong>1.3</strong> Para hacer uso de los servicios de la biblioteca es necesario solicitar el carné de lector, cuya posesión implica la aceptación por parte del solicitante del reglamento que rige el funcionamiento de la Red de Lectura Pública de Andalucía.</p>
          <p><strong>1.4</strong> Los menores de 14 años, para hacerse el carné, deberán ir acompañados de un adulto o bien presentar un formulario que la biblioteca proporciona, rellenado y firmado por los padres o tutor.</p>
          <p><strong>1.5</strong> El carné de lector tendrá una validez de 5 años, pasados los cuales se podrá renovar. Este será de uso personal e intransferible, salvo en casos de circunstancias justificadas.</p>
          <p><strong>1.6</strong> Una vez que los lectores han hecho uso de los libros, al finalizar su consulta en sala, los dejarán en lugares destinados para ello, siendo el personal de la biblioteca el encargado de colocarlos en su ubicación siguiendo un orden de clasificación en las estanterías.</p>
          <p><strong>1.7</strong> El horario de la biblioteca será el establecido por norma general para el resto de las bibliotecas de la Red de Lectura Pública de Andalucía, con un máximo de 30 a 35 horas al público según población, y distribuidas de mañana de 10 a 14 h y tardes de 17 a 20 h en épocas ordinarias, y solo por las mañanas de 9 a 14 h en épocas festivas (verano, Navidad y Semana Santa).</p>
          <p><strong>2. Servicio de préstamo</strong></p>
          <p><strong>2.1</strong> El préstamo domiciliario de libros será de hasta 5 ejemplares, durante un máximo de 15 días, renovable una sola vez por un periodo de 10 días, siempre y cuando no estén reservados.</p>
          <p><strong>2.2</strong> No podrán ser retirados en préstamo domiciliario ninguna publicación seriada (periódicos o revistas), así como cualquier otro material de referencia o de consulta (enciclopedias, atlas o diccionarios), con uso exclusivo en sala.</p>
          <p><strong>2.3</strong> El retraso en la devolución de los libros dará lugar a la suspensión del derecho de préstamo por un tiempo equivalente a la demora.</p>
          <p><strong>2.5</strong> En caso de deterioro o pérdida de los libros prestados, el usuario se hace responsable de su reposición; si la obra está agotada, se debe sustituir por otra de características similares. En tanto no se cumpla este requisito el usuario quedará suspendido del servicio de préstamo.</p>
          <p><strong>2.6</strong> La biblioteca se reserva el derecho de avisar a aquellos usuarios que, por olvido, no hayan devuelto los libros en el plazo fijado.</p>
          <p><strong>2.7</strong> No se podrán renovar aquellos libros que hayan sido reservados previamente por otro usuario.</p>
          <p><strong>2.8</strong> Las renovaciones del préstamo se harán personalmente o a distancia, bien por teléfono o correo electrónico, dentro de las horas de apertura de la biblioteca.</p>
          <p><strong>2.9</strong> El usuario tendrá derecho a solicitar la reserva de un libro prestado. La biblioteca avisará al usuario en el momento en que el ejemplar sea devuelto.</p>
          <p><strong>2.10</strong> Las reservas se mantendrán cinco días a partir de su comunicación, transcurrido dicho plazo se pasará a la siguiente reserva del mismo o bien se colocará en la estantería correspondiente.</p>
          <p class='meta'>Texto adaptado extraído de vera.es</p>
        `,
      },
      {
        type: "question",
        id: "q1",
        number: 1,
        title: "Tipo de texto",
        points: 5,
        kind: "mcqSingleWithOpen",
        includeInSummary: false,
        promptHtml: `<p>Indica a qué tipo de texto pertenece el que has leído. Justifica tu respuesta.</p>`,
        options: ["Texto periodístico", "Texto científico", "Texto instructivo", "Texto literario"],
        correctIndex: 2,
        openLabel: "Tu justificación",
        solutionHtml: `
          <p><strong>Opción correcta:</strong> <strong>Texto instructivo</strong>.</p>
          <p><strong>Justificación oficial:</strong> Se trata de un texto instructivo que recoge las normas de uso de la biblioteca y el procedimiento para hacer uso de sus servicios.</p>
        `,
      },
      {
        type: "question",
        id: "q2",
        number: 2,
        title: "Verdadero o falso sobre las normas",
        points: 5,
        kind: "booleanGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Indica si las siguientes afirmaciones son verdaderas [V] o falsas [F] según la información contenida en el texto.</p>`,
        items: [
          { label: "Está completamente prohibido que los niños permanezcan en la sala de adultos.", correct: false },
          { label: "Los menores de 14 años necesariamente tienen que ir a la biblioteca acompañados de sus padres para solicitar el carné.", correct: false },
          { label: "Al finalizar la consulta de un libro en la sala, el usuario debe colocarlo en su sitio exacto de la estantería.", correct: false },
          { label: "El carné de la biblioteca tiene un coste de 5 euros.", correct: false },
          { label: "Todas las bibliotecas de la red de lectura pública en Andalucía con población similar tienen los mismos horarios.", correct: true },
        ],
      },
      {
        type: "question",
        id: "q3",
        number: 3,
        title: "Preguntas cortas de comprensión",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Contesta brevemente a las siguientes preguntas con la información del texto.</p>`,
        items: [
          { label: "A. ¿Cuál es el máximo de días que puedo tener un libro en préstamo?", solution: "<strong>25 días</strong>: 15 días de préstamo más una prórroga de 10, si el ejemplar no ha sido reservado." },
          { label: "B. ¿Puedo llevarme a casa en préstamo un diccionario?", solution: "<strong>No</strong>, ese tipo de ejemplares de consulta solo puede utilizarse en la sala." },
          { label: "C. ¿Qué pasa si me retraso en la devolución?", solution: "Se suspende el derecho de préstamo durante un tiempo <strong>equivalente al retraso</strong>." },
          { label: "D. He perdido el libro que saqué en préstamo. ¿Qué debo hacer?", solution: "Debes <strong>reponer el ejemplar</strong>, o sustituirlo por otro de características similares si está agotado." },
          { label: "E. ¿Puedo hacer uso de la biblioteca durante las vacaciones escolares de Navidad?", solution: "<strong>Sí</strong>, pero solo por las mañanas." },
        ],
      },
      {
        type: "question",
        id: "q4",
        number: 4,
        title: "Reserva de libros en préstamo",
        points: 5,
        kind: "openText",
        promptHtml: `<p>Explica cómo es el procedimiento de reserva de libros que están en préstamo.</p>`,
        openLabel: "Escribe aquí tu respuesta",
        solutionHtml: `<p><strong>Solución oficial:</strong> Cuando el libro que se quiere sacar está en préstamo se puede hacer una reserva, físicamente en la biblioteca, por correo electrónico o por teléfono. Cuando el libro sea devuelto, la biblioteca avisará al titular de la reserva y le guardará el ejemplar durante un máximo de 5 días.</p>`,
      },
      {
        type: "question",
        id: "q5",
        number: 5,
        title: "Redacción sobre piratería digital",
        points: 10,
        kind: "openText",
        promptHtml: `
          <p>Las descargas ilegales de libros en Internet están afectando de forma muy directa a las empresas editoriales de este país y a los escritores, que ven cómo se vulneran sus derechos de autor. Esto forma parte de un problema más amplio que afecta también a los creadores de música, películas y videojuegos. A pesar de que se trata de una práctica ilegal según la Ley de Propiedad Intelectual, muchos usuarios no tienen la percepción de que sea algo ilegítimo.</p>
          <p>¿Qué opinas tú de la piratería digital de contenidos? ¿Qué consecuencias crees que tiene en la industria artística y en la cultura en general? ¿Se te ocurre alguna manera de luchar contra ella?</p>
          <p class='meta'>Redacta un texto de al menos 200 palabras en el que expreses tu punto de vista sobre el tema, argumentándolo de forma adecuada. En la puntuación se tendrán en cuenta, de forma proporcional, la expresión, la presentación, la ortografía, la estructura y la cohesión del texto.</p>
        `,
        openLabel: "Escribe aquí tu redacción",
        solutionHtml: `<p><strong>Solución oficial:</strong> Respuesta libre.</p>`,
      },
      {
        type: "question",
        id: "q6",
        number: 6,
        title: "Léxico y relaciones semánticas",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Escribe palabras o expresiones que se relacionen con los términos subrayados en el texto en el sentido que se indica.</p>`,
        items: [
          { label: "A. Sinónimos de demora y de ubicación", solution: "<strong>Demora</strong>: atraso, retraso, tardanza, prórroga. <strong>Ubicación</strong>: situación, colocación, lugar, sitio." },
          { label: "B. Antónimos de aceptación y de festivas", solution: "<strong>Aceptación</strong>: denegación, rechazo. <strong>Festivas</strong>: laborales, lectivas." },
          { label: "C. Dos palabras de la familia léxica de tutor", solution: "Por ejemplo: <strong>tutoría, tutorial, tutorizar, cotutor, tutorización</strong>." },
          { label: "D. Dos significados de la palabra polisémica obra", solution: "Por ejemplo: <strong>cosa hecha</strong>, <strong>producto intelectual</strong>, <strong>edificio en construcción</strong> o <strong>trabajo de albañilería</strong>." },
          { label: "E. Dos palabras del texto que tengan hiato", solution: "Por ejemplo: <strong>Andalucía, estanterías, días, correo</strong>." },
        ],
      },
      {
        type: "question",
        id: "q7",
        number: 7,
        title: "Pon las tildes que faltan",
        points: 5,
        kind: "openText",
        promptHtml: `
          <p>Coloca las tildes que faltan en el texto.</p>
          <blockquote>Leer, al principio, es algo dificil, por lo que hay gente que empieza a apreciar un buen libro en una edad ya avanzada. Yo empece a leer con gusto a los nueve años, nunca me habia llamado la atencion ninguna novela o libro, pero tenia amigas a las que si que le gustaba, y decidi, con un poco de desgana, buscar un libro que pudiera gustarme.</blockquote>
          <blockquote>Mi primera eleccion fue una sugerencia de mi madre, Torres de Malory, de Enid Blyton, una saga de siete libros en los que, basicamente, un grupo de niñas en un internado se meten en lios constantemente.</blockquote>
        `,
        openLabel: "Escribe aquí el texto corregido",
        solutionHtml: `
          <p><strong>Solución oficial:</strong></p>
          <p>Leer, al principio, es algo <strong>difícil</strong>, por lo que hay gente que empieza a apreciar un buen libro en una edad ya avanzada. Yo <strong>empecé</strong> a leer con gusto a los nueve años, nunca me <strong>había</strong> llamado la <strong>atención</strong> ninguna novela o libro, pero <strong>tenía</strong> amigas a las que <strong>sí</strong> que le gustaba, y <strong>decidí</strong>, con un poco de desgana, buscar un libro que pudiera gustarme.</p>
          <p>Mi primera <strong>elección</strong> fue una sugerencia de mi madre, Torres de Malory, de Enid Blyton, una saga de siete libros en los que, <strong>básicamente</strong>, un grupo de niñas en un internado se meten en <strong>líos</strong> constantemente.</p>
        `,
      },
      {
        type: "question",
        id: "q8",
        number: 8,
        title: "Funciones sintácticas",
        points: 5,
        kind: "multiChoiceGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Indica qué función sintáctica tienen los sintagmas marcados en cada oración.</p>`,
        noteHtml: `<p class='meta'>Nota: en esta versión web, los sintagmas que iban subrayados en el PDF aparecen resaltados dentro de cada oración.</p>`,
        items: [
          {
            label: "A. Los servicios de la biblioteca son <strong>gratuitos</strong>.",
            options: ["Atributo", "Complemento Directo", "Complemento Circunstancial de Modo"],
            correctIndex: 0,
          },
          {
            label: "B. El usuario devolverá el libro <strong>en el plazo marcado</strong>.",
            options: ["Complemento Circunstancial de Tiempo", "Complemento Indirecto", "Complemento Directo"],
            correctIndex: 0,
          },
          {
            label: "C. Durante el verano <strong>el horario de la biblioteca</strong> será más reducido.",
            options: ["Complemento Predicativo", "Sujeto", "Complemento Circunstancial de Lugar"],
            correctIndex: 1,
          },
          {
            label: "D. Un libro en mal estado fue retirado <strong>por el bibliotecario</strong>.",
            options: ["Sujeto", "Complemento de Régimen", "Complemento Agente"],
            correctIndex: 2,
          },
          {
            label: "E. Solicité la reserva <strong>por teléfono</strong>.",
            options: ["Complemento Circunstancial de Tiempo", "Complemento Circunstancial de Modo", "Complemento Indirecto"],
            correctIndex: 1,
          },
        ],
      },
      {
        type: "question",
        id: "q9",
        number: 9,
        title: "Tipos de oraciones",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Escribe una oración que se ajuste a los siguientes tipos.</p>`,
        items: [
          { label: "A. Enunciativa afirmativa", solution: "Ejemplo oficial: <strong>Mi amiga Julia vendrá al cine conmigo.</strong>" },
          { label: "B. Interrogativa directa parcial", solution: "Ejemplo oficial: <strong>¿Quién llegó tarde a la cita?</strong>" },
          { label: "C. Exclamativa", solution: "Ejemplo oficial: <strong>¡Qué bonito es tu coche!</strong>" },
          { label: "D. Imperativa", solution: "Ejemplo oficial: <strong>Sal a la calle ya.</strong>" },
          { label: "E. Dubitativa", solution: "Ejemplo oficial: <strong>Quizás mañana llueva.</strong>" },
        ],
      },
      {
        type: "reading",
        id: "reading-poema",
        title: "Texto base · Conocimiento literario",
        html: `
          <div class="poem">
            <p><strong>Recuerdo infantil</strong></p>
            <p>Una tarde parda y fría<br>de invierno. Los colegiales<br>estudian. Monotonía<br>de lluvia tras los cristales.</p>
            <p>Es la clase. En un cartel<br>se representa a Caín<br>fugitivo, y muerto Abel,<br>junto a una mancha carmín.</p>
            <p>Con timbre sonoro y hueco<br>truena el maestro, un anciano<br>mal vestido, enjuto y seco,<br>que lleva un libro en la mano.</p>
            <p>Y todo un coro infantil<br>va cantando la lección;<br>“mil veces ciento, cien mil,<br>mil veces mil, un millón”.</p>
            <p>Una tarde parda y fría<br>de invierno. Los colegiales<br>estudian. Monotonía<br>de la lluvia en los cristales.</p>
            <p class='meta'><em>Soledades, galerías y otros poemas</em>, Antonio Machado</p>
          </div>
        `,
      },
      {
        type: "question",
        id: "q10",
        number: 10,
        title: "Verdadero o falso sobre el poema",
        points: 5,
        kind: "booleanGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Indica si son verdaderas [V] o falsas [F] las siguientes afirmaciones.</p>`,
        items: [
          { label: "El autor recuerda la monotonía de las clases de su infancia.", correct: true },
          { label: "Se describe la actuación de un coro de niños en la iglesia.", correct: false },
          { label: "En la clase hay un cartel con la imagen de un episodio bíblico.", correct: true },
          { label: "Los versos son octosílabos, con rima consonante.", correct: true },
          { label: "Es un texto del género narrativo porque cuenta una historia.", correct: false },
        ],
      },
      {
        type: "question",
        id: "q11",
        number: 11,
        title: "Metáfora del poema",
        points: 5,
        kind: "openText",
        promptHtml: `<p>Busca una metáfora en el texto y explica su significado.</p>`,
        openLabel: "Escribe aquí tu respuesta",
        solutionHtml: `
          <p><strong>Solución oficial:</strong> El aspirante podía contestar una de las siguientes.</p>
          <ul>
            <li><strong>“mancha carmín”</strong>: hace referencia a la sangre sobre la que yace el cuerpo muerto de Abel.</li>
            <li><strong>“truena el maestro”</strong>: la voz del maestro resuena con fuerza en la clase.</li>
          </ul>
        `,
      },
      {
        type: "reading",
        id: "reading-english",
        title: "Texto base · Lengua extranjera (inglés)",
        html: `
          <p><strong>Ultra-processed food health warning</strong></p>
          <p>Ultra-processed foods are the foods that have been through the most industrial processing and often have a long list of ingredients on the packet. It includes popular items like fizzy drinks, chicken nuggets and breakfast cereals.</p>
          <p>Two studies regularly assessed the diets of more than one hundred thousand people and recorded what happened to their health. They showed people who ate the most ultra-processed foods tended to have the worst heart health and die earlier.</p>
          <p>The studies are not definitive proof of harm and experts have expressed caution. More work is still needed to explain what it is about ultra-processing that might have a detrimental effect on our bodies.</p>
          <p>“What we actually need to know is what’s behind these associations. Is it the ultra-processed foods? Is it the nutritional content of them? Is it some kind of additive that’s in them? I think we really need to find out a bit more about it.”, says Victoria Taylor, from the British Heart Foundation.</p>
          <p>The authors of the two studies say there is now mounting evidence that ultra-processed foods may be harmful. And the research comes out soon after tests showing these types of foods make us eat more and put on weight.</p>
          <p>But while the term ultra-processed might feel new, the health advice is very familiar. A diet rich in fruit, vegetables, fish, nuts and seeds also happens to be one full of unprocessed foods.</p>
          <p class='meta'>Texto adaptado de bbc.co.uk/learningenglish</p>
          <div class="vocab-card">
            <strong>Vocabulario:</strong>
            <ul>
              <li><strong>Recorded</strong>: anotaron</li>
              <li><strong>Assessed</strong>: evaluaron</li>
              <li><strong>Caution</strong>: cautela</li>
              <li><strong>Detrimental</strong>: perjudicial</li>
              <li><strong>Additive</strong>: aditivo alimentario</li>
              <li><strong>Mounting</strong>: creciente</li>
            </ul>
          </div>
        `,
      },
      {
        type: "question",
        id: "q12",
        number: 12,
        title: "True or false + frase justificativa",
        points: 5,
        kind: "booleanGroupWithJustification",
        includeInSummary: false,
        promptHtml: `<p>Indica si las siguientes afirmaciones son verdaderas (T) o falsas (F) y escribe la frase del texto que justifica tu respuesta.</p>`,
        items: [
          {
            label: "Ultra-processed food often comes in a packet.",
            correct: true,
            solution: "“Ultra-processed foods […] often have a long list of ingredients on the packet.”",
          },
          {
            label: "Experts are 100% sure that ultra-processed foods are harmful.",
            correct: false,
            solution: "“The studies are not definitive proof of harm and experts have expressed caution.”",
          },
          {
            label: "Victoria Taylor knows the link between ultra-processed foods and early deaths is in the additives.",
            correct: false,
            solution: "“What we actually need to know is what’s behind these associations. […] Is it some kind of additive that’s in them?”",
          },
          {
            label: "There is no evidence that ultra-processed foods make us fatter.",
            correct: false,
            solution: "“…tests showing these types of foods make us eat more and put on weight.”",
          },
          {
            label: "Recommendations about a healthy diet are not new but the concept ‘ultra-processed foods’ is.",
            correct: true,
            solution: "“But while the term ultra-processed might feel new, the health advice is very familiar.”",
          },
        ],
      },
      {
        type: "question",
        id: "q13",
        number: 13,
        title: "Comprensión lectora en inglés · opción correcta",
        points: 5,
        kind: "multiChoiceGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Marca la respuesta que mejor se ajuste a lo expresado en el texto.</p>`,
        noteHtml: `<p class='meta'>Nota: estas respuestas quedaron confirmadas visualmente al revisar las casillas marcadas en el solucionario rasterizado.</p>`,
        items: [
          {
            label: "A. Examples of ultra-processed foods are…",
            options: ["chicken, cereal and vegetables.", "sodas, cornflakes and nuggets.", "fish, nuts and vegetables."],
            correctIndex: 1,
          },
          {
            label: "B. According to two studies...",
            options: ["people who ate the most ultra-processed foods die sooner.", "people who ate the most ultra-processed foods are in better health.", "100,000 people who ate ultra processed foods are unhealthy."],
            correctIndex: 0,
          },
          {
            label: "C. More work is still needed…",
            options: ["to explain the nutritional content of ultra-processing.", "to process the effect of ultra-processed foods on our bodies.", "to understand why ultra-processed foods are unhealthy."],
            correctIndex: 2,
          },
          {
            label: "D. Victoria Taylor from the British Heart Foundation…",
            options: ["associates ultra-processed foods with their effect on our bodies.", "needs to know the nutritional content of ultra-processed foods.", "wants to know the connection between ultra-processed foods and health."],
            correctIndex: 2,
          },
          {
            label: "E. A healthy diet…",
            options: ["is full of natural foods.", "is familiar long-term advice.", "might feel new to people who eat ultra-processed foods."],
            correctIndex: 0,
          },
        ],
      },
      {
        type: "question",
        id: "q14",
        number: 14,
        title: "Healthy diet writing",
        points: 10,
        kind: "openText",
        promptHtml: `
          <p>Lo que comemos influye enormemente en nuestro estado de salud. Un exceso de alimentos ultraprocesados puede ser peligroso y, por tanto, deben evitarse.</p>
          <p>Escribe un texto en inglés de entre 50 y 70 palabras en el que describas una dieta saludable, nombrando qué alimentos deben consumirse más frecuentemente y cuáles menos. Puedes usar los verbos modales <em>should</em> y <em>ought to</em> para expresar consejos.</p>
          <p class='meta'>Expresiones que pueden ayudarte: <em>heart disease / intake / nutrition / to follow a healthy diet</em>.</p>
        `,
        openLabel: "Write your answer here",
        solutionHtml: `<p><strong>Solución oficial:</strong> Respuesta libre.</p>`,
      },
      {
        type: "question",
        id: "q15-24",
        number: "15-24",
        title: "Conocimiento de la lengua extranjera · test",
        points: 20,
        kind: "multiChoiceGroup",
        pointsPerItem: 2,
        includeInSummary: true,
        promptHtml: `<p>Elige en cada caso la opción que consideres más correcta.</p>`,
        noteHtml: `<p class='meta'>Igual que en el ejercicio 13, estas respuestas quedaron confirmadas visualmente al revisar las casillas marcadas en el solucionario rasterizado.</p>`,
        items: [
          { label: "15. Bea’s birthday is…", options: ["on may 7th.", "in may 7h.", "on May 7th."], correctIndex: 2 },
          { label: "16. For the pizza dough, …", options: ["you add yeast to water warm.", "add yeast to warm water.", "add you yeast to warm water."], correctIndex: 1 },
          { label: "17. Cenydd is…", options: ["friendly boy.", "a friendly boy.", "a friend boy."], correctIndex: 1 },
          { label: "18. It’s just a possibility, but we...", options: ["may see you later.", "must see you later.", "can’t see you later."], correctIndex: 0 },
          { label: "19. In winter, we...", options: ["play karate.", "do karate.", "go karate."], correctIndex: 1 },
          { label: "20. Unless you study, you … pass this test.", options: ["won’t", "will", "wouldn’t"], correctIndex: 0 },
          { label: "21. How....", options: ["does she feel today?", "do she feel today?", "is she feeling today?"], correctIndex: 2 },
          { label: "22. Mr. Lascelles got married … month.", options: ["last", "in", "ago"], correctIndex: 0 },
          { label: "23. I…", options: ["just’ve read a book by Virginia Woolf.", "’ve read a book by Virginia Woolf just.", "’ve just read a book by Virginia Woolf."], correctIndex: 2 },
          { label: "24. Monday is … day of the week.", options: ["the busier", "the busyest", "the busiest"], correctIndex: 2 },
        ],
      },
    ],
  },
  "2024-06-ct": {
    "id": "2024-06-ct",
    "title": "Convocatoria junio 2024 · Ámbito científico-tecnológico",
    "subtitle": "Prueba interactiva con apoyo visual en las preguntas de gráfica y problema final.",
    "sourceLinks": [
      {
        "label": "Archivo oficial de convocatorias anteriores",
        "url": "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/pruebas-obtencion-titulo-graduado-eso-personas-adultas/convocatorias-anteriores"
      },
      {
        "label": "PDF del examen (copia local)",
        "url": "data/exam-packs/2024-06/extracted/Convocatoria%20junio%202024/CT_ESPA%20_2024.pdf"
      },
      {
        "label": "PDF del solucionario (copia local)",
        "url": "data/exam-packs/2024-06/extracted/Convocatoria%20junio%202024/CT_ESPA_soluciones_2024.pdf"
      },
      {
        "label": "Notas de extracción",
        "url": "content/exams/2024-06-ct-notes.md"
      }
    ],
    "introHtml": "<p>Examen oficial de junio de 2024 del ámbito científico-tecnológico. Mantiene la estructura original por bloques y añade apoyo visual en las preguntas basadas en gráficos.</p><ul><li><strong>A.</strong> Conceptos básicos (15 puntos)</li><li><strong>B.</strong> Comprensión y análisis de un documento escrito (20 puntos)</li><li><strong>C.</strong> Comprensión y análisis de información gráfica (30 puntos)</li><li><strong>D.</strong> Expresión escrita (15 puntos)</li><li><strong>E.</strong> Resolución de un problema (20 puntos)</li></ul>",
    "sections": [
      {
        "type": "question",
        "id": "q1",
        "number": 1,
        "title": "Organización de la materia",
        "points": 5,
        "kind": "multiChoiceGroup",
        "includeInSummary": true,
        "promptHtml": "<p>Completa cada afirmación eligiendo la opción correcta.</p>",
        "items": [
          {
            "label": "Los ___ se reúnen formando moléculas y macromoléculas.",
            "options": [
              "átomos",
              "tejidos"
            ],
            "correctIndex": 0
          },
          {
            "label": "Las moléculas y macromoléculas forman las ___.",
            "options": [
              "células",
              "órganos"
            ],
            "correctIndex": 0
          },
          {
            "label": "Las células forman ___.",
            "options": [
              "tejidos",
              "sistemas"
            ],
            "correctIndex": 0
          },
          {
            "label": "Los tejidos forman ___.",
            "options": [
              "órganos",
              "ecosistemas"
            ],
            "correctIndex": 0
          },
          {
            "label": "Los sistemas y aparatos forman un ___.",
            "options": [
              "ser vivo",
              "biotopo"
            ],
            "correctIndex": 0
          }
        ]
      },
      {
        "type": "question",
        "id": "q2",
        "number": 2,
        "title": "Conceptos de ecología",
        "points": 5,
        "kind": "openList",
        "promptHtml": "<p>Relaciona cada descripción con el término adecuado.</p>",
        "items": [
          {
            "label": "Sistema formado por una comunidad de seres vivos y el medio físico en el que viven",
            "solution": "ecosistema"
          },
          {
            "label": "Conjunto de individuos de la misma especie que vive en un lugar y tiempo determinados",
            "solution": "población"
          },
          {
            "label": "Zona de características ambientales uniformes ocupada por una comunidad de seres vivos",
            "solution": "biotopo"
          },
          {
            "label": "Conjunto de poblaciones de distintas especies que viven en un mismo ecosistema",
            "solution": "comunidad"
          },
          {
            "label": "Función que desempeña una especie dentro de un ecosistema",
            "solution": "nicho ecológico"
          }
        ],
        "noteHtml": "<p>La corrección automática no puntúa este apartado, pero puedes comparar tus términos con la solución oficial.</p>"
      },
      {
        "type": "question",
        "id": "q3",
        "number": 3,
        "title": "Cambio físico o cambio químico",
        "points": 5,
        "kind": "multiChoiceGroup",
        "includeInSummary": true,
        "promptHtml": "<p>Indica si cada proceso corresponde a un cambio físico o a un cambio químico.</p>",
        "items": [
          {
            "label": "Congelación del agua",
            "options": [
              "Cambio físico",
              "Cambio químico"
            ],
            "correctIndex": 0
          },
          {
            "label": "Cocción de un huevo",
            "options": [
              "Cambio físico",
              "Cambio químico"
            ],
            "correctIndex": 1
          },
          {
            "label": "Evaporación del alcohol",
            "options": [
              "Cambio físico",
              "Cambio químico"
            ],
            "correctIndex": 0
          },
          {
            "label": "Oxidación del hierro",
            "options": [
              "Cambio físico",
              "Cambio químico"
            ],
            "correctIndex": 1
          },
          {
            "label": "Trituración de una piedra",
            "options": [
              "Cambio físico",
              "Cambio químico"
            ],
            "correctIndex": 0
          }
        ]
      },
      {
        "type": "reading",
        "id": "reading-ia",
        "title": "Texto base · IA, ChatGPT y empresa",
        "html": "<p><strong>Lee el siguiente texto y responde a las cuestiones 4 a 7.</strong></p><p><em>La inteligencia artificial llega para revolucionar el día a día de las empresas.</em> ChatGPT es un sistema de inteligencia artificial capaz de elaborar textos, responder preguntas, resumir contenidos y generar borradores para distintos usos empresariales.</p><p>Según el texto, la clave no está solo en la herramienta, sino también en hacer una pregunta adecuada, es decir, redactar un buen <em>prompt</em>. Cuanto más precisa y contextualizada sea la petición, mejor será la respuesta obtenida.</p><p>OpenAI ha conseguido desarrollar ChatGPT alimentándolo con una enorme cantidad de información procedente de páginas web, artículos, libros, vídeos, audios y otros contenidos disponibles en internet.</p><p>El artículo menciona usos como responder correos, sintetizar documentos, extraer ideas principales, redactar la ficha de un producto y apoyar distintas tareas del trabajo diario.</p>"
      },
      {
        "type": "question",
        "id": "q4",
        "number": 4,
        "title": "Verdadero o falso sobre el texto",
        "points": 5,
        "kind": "booleanGroupWithJustification",
        "includeInSummary": true,
        "promptHtml": "<p>Indica si las siguientes afirmaciones son verdaderas o falsas según el texto.</p>",
        "items": [
          {
            "label": "Para que una empresa pueda sacar partido de ChatGPT es necesario contar con grandes conocimientos de programación.",
            "correct": false,
            "solution": "El texto insiste en que la herramienta depende sobre todo de formular bien la petición, no de tener grandes conocimientos de programación."
          },
          {
            "label": "ChatGPT puede utilizarse para redactar un correo electrónico o la ficha de un producto.",
            "correct": true,
            "solution": "Se cita expresamente como ejemplo de uso en el texto."
          },
          {
            "label": "Cuanto más precisa y contextualizada es la pregunta que se hace a ChatGPT, mejor será su respuesta.",
            "correct": true,
            "solution": "El artículo presenta el buen prompt como la clave para obtener una respuesta adecuada."
          },
          {
            "label": "La IA podría desplazar a los trabajadores del servicio de atención al cliente en las empresas.",
            "correct": false,
            "solution": "El texto habla de transformar tareas y formas de trabajo, no de afirmar ese desplazamiento como conclusión directa."
          },
          {
            "label": "Según el autor, la IA ahorra tiempo y esfuerzo a las empresas, pero no cambia sustancialmente su manera de trabajar.",
            "correct": false,
            "solution": "El artículo sostiene precisamente que la IA puede revolucionar el día a día y transformar la forma de trabajar."
          }
        ]
      },
      {
        "type": "question",
        "id": "q5",
        "number": 5,
        "title": "Cómo se entrenó ChatGPT",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Según el texto, ¿cómo ha conseguido OpenAI desarrollar la herramienta ChatGPT para que confeccione respuestas de la forma que lo hace?</p>",
        "openLabel": "Resume la explicación del texto",
        "solutionHtml": "<p>OpenAI ha desarrollado ChatGPT alimentándolo con una enorme cantidad de información disponible en internet: páginas web, artículos de medios, libros, vídeos y audios, además de información actualizada por los propios usuarios. El texto añade que la calidad de la respuesta depende mucho de cómo se redacte la petición o <em>prompt</em>.</p>"
      },
      {
        "type": "question",
        "id": "q6",
        "number": 6,
        "title": "Ejemplos de aplicaciones de la robótica",
        "points": 5,
        "kind": "openList",
        "promptHtml": "<p>Pon un ejemplo de aplicación actual de la robótica en cada uno de estos ámbitos.</p>",
        "items": [
          {
            "label": "Agricultura",
            "solution": "Recogida y selección de productos o procesos de siembra y aplicación de tratamientos"
          },
          {
            "label": "Industria",
            "solution": "Tareas de ensamblaje, soldadura, pintura o manipulación repetitiva y peligrosa"
          },
          {
            "label": "Medicina",
            "solution": "Cirugía asistida, rehabilitación o ayuda en intervenciones de precisión"
          },
          {
            "label": "Logística",
            "solution": "Clasificación, almacenamiento, transporte interno o preparación de pedidos"
          },
          {
            "label": "Servicios",
            "solution": "Atención, limpieza, reparto o asistencia en entornos comerciales y públicos"
          }
        ],
        "noteHtml": "<p>Se admiten ejemplos equivalentes a los del solucionario oficial.</p>"
      },
      {
        "type": "question",
        "id": "q7",
        "number": 7,
        "title": "Opinión razonada sobre la IA en las empresas",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>En el texto se mencionan numerosas ventajas del uso de la IA en las empresas. ¿Crees que se trata de una herramienta que transformará la forma de trabajar? Razona tu respuesta.</p>",
        "openLabel": "Tu texto argumentado",
        "noteHtml": "<p>Respuesta abierta. Se valora que argumentes tu postura con claridad y apoyándote en ideas del texto.</p>",
        "solutionHtml": "<p>No hay una única respuesta cerrada. El solucionario oficial espera una opinión razonada: puedes defender que la IA ya está transformando el trabajo porque ahorra tiempo, automatiza tareas y cambia procesos, o matizar sus límites si justificas bien tu postura.</p>"
      },
      {
        "type": "reading",
        "id": "reading-estados",
        "title": "Apoyo visual · Estados de la materia",
        "html": "<p>Usa esta página del examen para responder a las cuestiones 8, 9 y 10.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-06-ct-page-3.png\" alt=\"Página del examen con el gráfico de estados de la materia y la tabla de propiedades.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Página del examen con el gráfico de estados de la materia y la tabla de propiedades.</figcaption></figure>"
      },
      {
        "type": "question",
        "id": "q8",
        "number": 8,
        "title": "Preguntas a partir del gráfico de estados de la materia",
        "points": 4,
        "kind": "openList",
        "promptHtml": "<p>Contesta a las preguntas que se pueden deducir del gráfico 1.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-06-ct-page-3.png\" alt=\"Página del examen con el gráfico de estados de la materia y la tabla de propiedades.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Página del examen con el gráfico de estados de la materia y la tabla de propiedades.</figcaption></figure>",
        "items": [
          {
            "label": "A. ¿Qué estados de la materia aparecen en el gráfico?",
            "solution": "Sólido, líquido y gaseoso"
          },
          {
            "label": "B. ¿Cómo se llama el cambio de estado de sólido a líquido?",
            "solution": "Fusión o derretimiento"
          },
          {
            "label": "C. ¿Es necesario pasar por el estado líquido para que un sólido pase a gaseoso?",
            "solution": "No. Puede pasar directamente por sublimación"
          },
          {
            "label": "D. ¿Cómo se consigue que un gas condense a líquido?",
            "solution": "Reduciendo la temperatura o enfriándolo para que sus partículas se muevan menos"
          }
        ]
      },
      {
        "type": "question",
        "id": "q9",
        "number": 9,
        "title": "Tabla de propiedades de sólidos, líquidos y gases",
        "points": 6,
        "kind": "openText",
        "promptHtml": "<p>Completa la tabla marcando con una X los estados que cumplen cada propiedad.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-06-ct-page-3.png\" alt=\"Página del examen con el gráfico de estados de la materia y la tabla de propiedades.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Página del examen con el gráfico de estados de la materia y la tabla de propiedades.</figcaption></figure>",
        "openLabel": "Describe cómo completarías la tabla",
        "solutionHtml": "<p>La corrección oficial se resume así:</p><ul><li><strong>Tienen forma y volumen propios:</strong> sólido.</li><li><strong>No pueden comprimirse ni expandirse:</strong> sólido y líquido.</li><li><strong>Adoptan la forma y el volumen del recipiente que los contiene:</strong> gas.</li><li><strong>Se pueden derramar:</strong> líquido y gas.</li></ul><p>Si en tu formulación usas vocabulario equivalente y la lógica física es correcta, la respuesta debe darse por válida.</p>"
      },
      {
        "type": "question",
        "id": "q10",
        "number": 10,
        "title": "Verdadero o falso sobre los estados de la materia",
        "points": 5,
        "kind": "booleanGroupWithJustification",
        "includeInSummary": true,
        "promptHtml": "<p>Indica si cada afirmación es verdadera o falsa y compárala con la explicación oficial.</p>",
        "items": [
          {
            "label": "La fuerza de atracción entre las moléculas de los sólidos es mayor que en los líquidos.",
            "correct": true,
            "solution": "En los sólidos las partículas están más unidas y por eso conservan mejor su forma."
          },
          {
            "label": "Los líquidos tienen forma propia.",
            "correct": false,
            "solution": "Los líquidos adoptan la forma del recipiente que los contiene."
          },
          {
            "label": "Los gases no tienen volumen propio.",
            "correct": true,
            "solution": "Se expanden y ocupan el volumen del recipiente."
          },
          {
            "label": "El hielo seco (CO₂ sólido) puede pasar directamente a gas al aumentar la temperatura.",
            "correct": true,
            "solution": "Ese paso directo de sólido a gas se llama sublimación."
          },
          {
            "label": "La velocidad de las partículas disminuye al aumentar la temperatura.",
            "correct": false,
            "solution": "Sucede lo contrario: al aumentar la temperatura, las partículas se mueven más deprisa."
          }
        ]
      },
      {
        "type": "reading",
        "id": "reading-movimiento",
        "title": "Apoyo visual · Gráfica posición-tiempo",
        "html": "<p>Usa esta gráfica para responder a las cuestiones 11, 12 y 13.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-06-ct-page-4.png\" alt=\"Página del examen con la gráfica posición-tiempo del vehículo.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Página del examen con la gráfica posición-tiempo del vehículo.</figcaption></figure>"
      },
      {
        "type": "question",
        "id": "q11",
        "number": 11,
        "title": "Lectura de la gráfica de movimiento",
        "points": 3,
        "kind": "openList",
        "promptHtml": "<p>Observa la gráfica y responde a las cuestiones.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-06-ct-page-4.png\" alt=\"Página del examen con la gráfica posición-tiempo del vehículo.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Página del examen con la gráfica posición-tiempo del vehículo.</figcaption></figure>",
        "items": [
          {
            "label": "A1. ¿Cuánto dura el movimiento en total?",
            "solution": "18 horas"
          },
          {
            "label": "A2. ¿Cuánto dura el tramo C-D?",
            "solution": "6 horas"
          },
          {
            "label": "B. ¿Está parado en algún momento? ¿Cómo se sabe?",
            "solution": "Sí, en los tramos B-C y D-E, porque la posición permanece constante (línea horizontal)"
          },
          {
            "label": "C1. ¿A qué distancia del origen está al cabo de 1 hora?",
            "solution": "120 km"
          },
          {
            "label": "C2. ¿A qué distancia del origen se encuentra al llegar al destino?",
            "solution": "240 km"
          }
        ],
        "noteHtml": "<p>Se aceptan respuestas equivalentes si interpretan correctamente la gráfica.</p>"
      },
      {
        "type": "question",
        "id": "q12",
        "number": 12,
        "title": "Velocidad en cada tramo",
        "points": 8,
        "kind": "openList",
        "promptHtml": "<p>Calcula la velocidad en cada uno de los cinco tramos. Puedes expresarla en km/h y justificar tus cuentas.</p><table class=\"exam-table\"><thead><tr><th>Tramo</th><th>Velocidad</th></tr></thead><tbody><tr><td>A-B</td><td>…</td></tr><tr><td>B-C</td><td>…</td></tr><tr><td>C-D</td><td>…</td></tr><tr><td>D-E</td><td>…</td></tr><tr><td>E-F</td><td>…</td></tr></tbody></table><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-06-ct-page-4.png\" alt=\"Página del examen con la gráfica posición-tiempo del vehículo.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Página del examen con la gráfica posición-tiempo del vehículo.</figcaption></figure>",
        "items": [
          {
            "label": "A-B",
            "solution": "120 km/h"
          },
          {
            "label": "B-C",
            "solution": "0 km/h"
          },
          {
            "label": "C-D",
            "solution": "-20 km/h"
          },
          {
            "label": "D-E",
            "solution": "0 km/h"
          },
          {
            "label": "E-F",
            "solution": "40 km/h"
          }
        ],
        "noteHtml": "<p>El solucionario oficial usa la fórmula <code>v = (e<sub>f</sub> - e<sub>i</sub>) / (t<sub>f</sub> - t<sub>i</sub>)</code>. Si razonas correctamente, una expresión equivalente también vale.</p>"
      },
      {
        "type": "question",
        "id": "q13",
        "number": 13,
        "title": "Porcentaje del tiempo parado",
        "points": 4,
        "kind": "openText",
        "promptHtml": "<p>Utilizando la gráfica, ¿qué porcentaje del tiempo total está parado el vehículo?</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-06-ct-page-4.png\" alt=\"Página del examen con la gráfica posición-tiempo del vehículo.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Página del examen con la gráfica posición-tiempo del vehículo.</figcaption></figure>",
        "openLabel": "Explica el cálculo",
        "solutionHtml": "<p>El vehículo está parado en dos tramos horizontales: B-C y D-E. Cada uno dura 3 horas, así que en total está parado 6 horas.</p><p>Como el movimiento dura 18 horas, el porcentaje es:</p><p><code>(6 / 18) · 100 = 33,33 %</code></p>"
      },
      {
        "type": "question",
        "id": "q14",
        "number": 14,
        "title": "Texto sobre enfermedades infecciosas",
        "points": 15,
        "kind": "openText",
        "promptHtml": "<p>Redacta un texto de al menos 150 palabras sobre las enfermedades infecciosas siguiendo el esquema oficial:</p><ul><li>Qué son y qué microorganismos las provocan.</li><li>Cómo actúan los antibióticos y qué precauciones hay que tener.</li><li>Qué mecanismos de defensa tiene nuestro organismo.</li><li>Qué son las vacunas y qué papel desempeñan.</li></ul>",
        "openLabel": "Tu redacción",
        "noteHtml": "<p>Respuesta abierta. Además del contenido, se valora la presentación, ortografía, estructura, coherencia y cohesión.</p>",
        "solutionHtml": "<p>Una respuesta completa debe explicar que las enfermedades infecciosas las provocan microorganismos como bacterias, virus, hongos y protistas. No todos son perjudiciales, pero algunos pueden causar patologías de distinta gravedad.</p><p>También debe aclarar que los antibióticos solo actúan contra bacterias, no contra virus, y que su mal uso favorece la resistencia bacteriana.</p><p>En cuanto a las defensas del organismo, el solucionario recuerda las barreras físico-químicas (piel, mucosas, fosas nasales, etc.) y el sistema inmunitario, con leucocitos y linfocitos que destruyen microorganismos o células infectadas.</p><p>Por último, las vacunas se presentan como una forma de prevención y combate porque preparan al sistema inmunitario para reconocer y responder mejor frente al patógeno.</p>"
      },
      {
        "type": "question",
        "id": "q15",
        "number": 15,
        "title": "Coste de moqueta y papel pintado",
        "points": 10,
        "kind": "openText",
        "promptHtml": "<p>Calcula cuánto costarían la moqueta del suelo y el papel para empapelar las paredes del salón, según los datos del problema.</p>",
        "openLabel": "Desarrolla los cálculos",
        "solutionHtml": "<p><strong>Moqueta:</strong> el suelo es rectangular, así que su superficie es <code>4,5 · 7 = 31,5 m²</code>. A 25 €/m², la moqueta cuesta <code>31,5 · 25 = 787,50 €</code>.</p><p><strong>Papel pintado:</strong> la superficie total de las cuatro paredes es <code>2·(4,5·2,8) + 2·(7·2,8) = 64,4 m²</code>. Restando la puerta (<code>2·0,80 = 1,6 m²</code>) y la ventana (<code>1,5·1,2 = 1,8 m²</code>), quedan <code>61 m²</code>. A 12 €/m², el papel cuesta <code>61 · 12 = 732 €</code>.</p>"
      },
      {
        "type": "question",
        "id": "q16",
        "number": 16,
        "title": "Frigorías necesarias",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Con las dimensiones del salón, ¿qué aparato recomendarías: uno de 3000 frigorías o uno de 4500 frigorías? Justifica tu elección.</p>",
        "openLabel": "Justificación",
        "solutionHtml": "<p>Primero se calcula el volumen del salón: <code>4,5 · 7 · 2,8 = 88,2 m³</code>.</p><p>El solucionario estima las frigorías necesarias multiplicando por 50: <code>88,2 · 50 = 4410 frigorías</code>.</p><p>Como 4410 está mucho más cerca de 4500 que de 3000, conviene instalar el aparato de <strong>4500 frigorías</strong>.</p>"
      },
      {
        "type": "question",
        "id": "q17",
        "number": 17,
        "title": "Coste total del aire acondicionado",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Si el aparato cuesta 675 € y el montaje con mano de obra son 200 €, ¿cuánto costaría en total?</p>",
        "openLabel": "Resultado final",
        "solutionHtml": "<p>El coste total es <code>675 + 200 = 875 €</code>.</p>"
      }
    ]
  },
  "2024-04-social": {
    "id": "2024-04-social",
    "title": "Convocatoria abril 2024 · Ámbito social",
    "subtitle": "Prueba interactiva basada en el modelo oficial, con apoyo visual para la mezquita de Córdoba y el mapa de la Unión Europea.",
    "sourceLinks": [
      {
        "label": "Archivo oficial de convocatorias anteriores",
        "url": "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores"
      },
      {
        "label": "ZIP oficial abril 2024 (incluye soluciones)",
        "url": "https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1624993/Pruebas%20convocatoria%20abril%202024%20%28incluye%20soluciones%29/35ea24e8-0010-b560-0915-44b5fd3171e0?version=1.1"
      },
      {
        "label": "PDF del examen (copia local)",
        "url": "data/exam-packs/2024-04/extracted/Convocatoria%20abril%202024/SOC_ESPA_2024.pdf"
      },
      {
        "label": "PDF del solucionario (copia local)",
        "url": "data/exam-packs/2024-04/extracted/Convocatoria%20abril%202024/SOC_ESPA_soluciones_2024.pdf"
      },
      {
        "label": "Notas de extracción y apoyo visual",
        "url": "content/exams/2024-04-social-notes.md"
      }
    ],
    "introHtml": "<p>Examen oficial de abril de 2024 del ámbito social. Mantiene la estructura original por bloques y añade apoyo visual en la parte de análisis de imágenes y mapas.</p><ul><li><strong>A.</strong> Conceptos básicos (25 puntos)</li><li><strong>B.</strong> Comprensión y análisis de documento escrito (30 puntos)</li><li><strong>C.</strong> Comprensión y análisis de información gráfica (30 puntos)</li><li><strong>D.</strong> Expresión escrita (15 puntos)</li></ul><p><strong>Corrección automática:</strong> 25 puntos de ejercicios cerrados (2, 4 y 6). Los otros 75 puntos quedan para comparación manual con la solución oficial.</p>",
    "sections": [
      {
        "type": "question",
        "id": "q1",
        "number": 1,
        "title": "Términos y procesos históricos",
        "points": 10,
        "kind": "openList",
        "promptHtml": "<p>Relaciona cada definición con el término histórico correcto y con su periodo. Los términos posibles son: <strong>Edad de los Metales</strong>, <strong>Hispania</strong>, <strong>Humanismo</strong>, <strong>Reino Nazarí de Granada</strong> y <strong>Proletariado</strong>. Los periodos son: <strong>Prehistoria</strong>, <strong>Edad Antigua</strong>, <strong>Edad Media</strong>, <strong>Edad Moderna</strong> y <strong>Edad Contemporánea</strong>.</p>",
        "items": [
          {
            "label": "A. Movimiento intelectual, filosófico y artístico que surge en Italia en el siglo XV y se difunde por Europa en el siglo XVI.",
            "solution": "<strong>Humanismo</strong> · Edad Moderna"
          },
          {
            "label": "B. Nuevo grupo social que surge en el siglo XIX con la Revolución Industrial, formado por los obreros que trabajan en las fábricas.",
            "solution": "<strong>Proletariado</strong> · Edad Contemporánea"
          },
          {
            "label": "C. Nombre con el que los romanos llamaron a la Península Ibérica durante su dominación.",
            "solution": "<strong>Hispania</strong> · Edad Antigua"
          },
          {
            "label": "D. Último reino musulmán de la Península que se mantuvo hasta 1492.",
            "solution": "<strong>Reino Nazarí de Granada</strong> · Edad Media"
          },
          {
            "label": "E. Periodo comprendido entre el VI milenio a. C. y la aparición de la escritura, con surgimiento de la metalurgia.",
            "solution": "<strong>Edad de los Metales</strong> · Prehistoria"
          }
        ],
        "noteHtml": "<p>La web no puntúa este ejercicio automáticamente, pero puedes comparar cada fila con la solución oficial.</p>"
      },
      {
        "type": "question",
        "id": "q2",
        "number": 2,
        "title": "Conceptos básicos de relieve, espacios protegidos y globalización",
        "points": 15,
        "kind": "multiChoiceGroup",
        "includeInSummary": true,
        "pointsPerItem": 3,
        "promptHtml": "<p>Marca el concepto o término más adecuado para cada definición.</p>",
        "items": [
          {
            "label": "A. Tipo de relieve plano y elevado, también conocido como altiplano.",
            "options": [
              "Llanura",
              "Cordillera",
              "Meseta"
            ],
            "correctIndex": 2
          },
          {
            "label": "B. Espacio natural grande, protegido y poco transformado por el ser humano. Ejemplo: Doñana.",
            "options": [
              "Reforestación",
              "Parque Nacional",
              "Reserva"
            ],
            "correctIndex": 1
          },
          {
            "label": "C. Países emergentes que han salido del subdesarrollo pero aún no alcanzan cifras altas de desarrollo humano.",
            "options": [
              "Países en vías de desarrollo",
              "Desarrollados",
              "Atrasados"
            ],
            "correctIndex": 0
          },
          {
            "label": "D. Representación gráfica de una ciudad a gran escala, con calles y edificios detallados.",
            "options": [
              "Funciones urbanas",
              "Plano urbano",
              "Red urbana"
            ],
            "correctIndex": 1
          },
          {
            "label": "E. Proceso de integración internacional de economías, sociedades, culturas y sistemas políticos que funciona como sistema global.",
            "options": [
              "Globalización",
              "Capitalismo",
              "Neoliberalismo"
            ],
            "correctIndex": 0
          }
        ]
      },
      {
        "type": "reading",
        "id": "reading-engels",
        "title": "Documento 1 · Barrio obrero en Manchester",
        "html": "<p><strong>Lee el siguiente texto y responde a las cuestiones 3, 4 y 5.</strong></p><blockquote><p>\"Aquí uno se encuentra de verdad en un distrito que ha quedado abandonado por completo a las clases trabajadoras, porque ni siquiera los tenderos y taberneros de la calle principal se esfuerzan en dar una apariencia de limpieza a sus establecimientos.</p><p>Pero por deplorable que sea la condición de la calle principal, no es en absoluto tan mala como la de los callejones y patios que se encuentran tras ella... Los peores patios son los que dan al río, donde se encuentran sin duda las más horribles viviendas que uno haya visto...</p><p>Aguas arriba hay algunos edificios elevados dedicados a la curtiduría de pieles y, más arriba, talleres de teñido de telas y fábricas de porcelana y de gas. Todos los residuos líquidos y sólidos de esos talleres van a parar al río...\"</p></blockquote><p class=\"meta\">Federico Engels describe un barrio obrero de Manchester (1845). Texto extraído de la materia Ámbito social Nivel II (CREA).</p>"
      },
      {
        "type": "question",
        "id": "q3",
        "number": 3,
        "title": "Resumen del documento 1",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Elabora un breve resumen, con tus palabras, de las ideas principales que expresa el texto.</p>",
        "openLabel": "Tu resumen",
        "solutionHtml": "<p>Engels describe cómo eran los barrios obreros de Manchester a mediados del siglo XIX durante la Revolución Industrial: calles, patios y viviendas en condiciones miserables, gran suciedad, hacinamiento y contaminación del río por los residuos de talleres y fábricas. En conjunto, el texto denuncia las condiciones infrahumanas en las que vivía la clase trabajadora.</p>"
      },
      {
        "type": "question",
        "id": "q4",
        "number": 4,
        "title": "Verdadero o falso sobre el documento 1",
        "points": 5,
        "kind": "booleanGroup",
        "includeInSummary": true,
        "pointsPerItem": 1,
        "promptHtml": "<p>Indica, con la información que se extrae del texto, si las siguientes afirmaciones son verdaderas (V) o falsas (F).</p>",
        "items": [
          {
            "label": "Federico Engels describe un barrio obrero de Londres.",
            "correct": false
          },
          {
            "label": "Los peores patios son los que dan al río, donde se encuentran las más horribles viviendas.",
            "correct": true
          },
          {
            "label": "En esa zona hay fábricas y talleres textiles.",
            "correct": true
          },
          {
            "label": "Los tenderos y taberneros de la calle principal limpian sus establecimientos.",
            "correct": false
          },
          {
            "label": "El texto fue escrito a mediados del siglo XIX.",
            "correct": true
          }
        ]
      },
      {
        "type": "question",
        "id": "q5",
        "number": 5,
        "title": "Situación del proletariado en la Revolución Industrial",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Explica brevemente la situación del proletariado en la Revolución Industrial al que se refiere el texto.</p>",
        "openLabel": "Tu explicación",
        "solutionHtml": "<p>El proletariado era la clase obrera surgida con la Revolución Industrial. Trabajaba por salarios muy bajos, con jornadas larguísimas, sin descanso, sin seguridad laboral ni protección social. Vivía en barrios insalubres, cerca de las fábricas, en viviendas hacinadas y sin buenas condiciones higiénicas. También trabajaban mujeres y niños por sueldos inferiores. Esta situación impulsó la toma de conciencia obrera y las luchas por mejorar sus derechos.</p>"
      },
      {
        "type": "reading",
        "id": "reading-constitucion",
        "title": "Documento 2 · Constitución española de 1978",
        "html": "<p><strong>Lee el siguiente texto y responde a las cuestiones 6, 7 y 8.</strong></p><blockquote><p>\"Art. 1.1. España se constituye en un Estado social y democrático de derecho... La soberanía nacional reside en el pueblo español... La forma política del Estado español es la Monarquía parlamentaria.</p><p>Art. 2. La Constitución se fundamenta en la indisoluble unidad de la Nación española... y reconoce y garantiza el derecho a la autonomía...</p><p>Art. 14. Los españoles son iguales ante la Ley...</p><p>Art. 56. El Rey es el Jefe del Estado...</p><p>Art. 66. Las Cortes Generales representan al pueblo español... ejercen la potestad legislativa del Estado...\"</p></blockquote><p class=\"meta\">Artículos procedentes de la Constitución española de 1978.</p>"
      },
      {
        "type": "question",
        "id": "q6",
        "number": 6,
        "title": "Verdadero o falso sobre la Constitución de 1978",
        "points": 5,
        "kind": "booleanGroup",
        "includeInSummary": true,
        "pointsPerItem": 1,
        "promptHtml": "<p>Indica, con la información que se extrae del texto, si las siguientes afirmaciones son verdaderas (V) o falsas (F).</p>",
        "items": [
          {
            "label": "La soberanía nacional no reside en el pueblo español.",
            "correct": false
          },
          {
            "label": "Las Cortes Generales ejercen la potestad legislativa del Estado.",
            "correct": true
          },
          {
            "label": "La forma política del Estado español es la Monarquía Parlamentaria.",
            "correct": true
          },
          {
            "label": "No se garantiza la libertad ideológica, religiosa y de culto.",
            "correct": false
          },
          {
            "label": "La Constitución se fundamenta en la indisoluble unidad de la Nación española.",
            "correct": true
          }
        ]
      },
      {
        "type": "question",
        "id": "q7",
        "number": 7,
        "title": "Ideas principales del documento 2",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Expresa con tus propias palabras las ideas principales que recoge el texto anterior.</p>",
        "openLabel": "Tu explicación",
        "solutionHtml": "<p>El texto resume varios artículos de la Constitución de 1978: España es un Estado social y democrático de derecho; la soberanía reside en el pueblo; la forma política es la monarquía parlamentaria; se defiende la unidad de España y el derecho a la autonomía; todos los españoles son iguales ante la ley; el Rey es el Jefe del Estado; y las Cortes Generales representan al pueblo, hacen las leyes, aprueban presupuestos y controlan al Gobierno.</p>"
      },
      {
        "type": "question",
        "id": "q8",
        "number": 8,
        "title": "Importancia y rasgos de la Constitución de 1978",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Explica la importancia de la Constitución de 1978 e indica cuáles son sus principales rasgos.</p>",
        "openLabel": "Tu respuesta desarrollada",
        "solutionHtml": "<p>La Constitución de 1978 puso fin a la dictadura franquista y consolidó la democracia durante la Transición. Fue aprobada en referéndum y sigue siendo la norma fundamental vigente.</p><p>Sus rasgos principales son: España como Estado social y democrático de derecho; soberanía nacional en el pueblo; monarquía parlamentaria; separación de poderes; reconocimiento de derechos y libertades; e organización territorial descentralizada en comunidades autónomas, provincias y municipios.</p><p>También garantiza la igualdad ante la ley y los derechos individuales y colectivos, y sitúa a España como una democracia moderna integrada en la comunidad internacional.</p>"
      },
      {
        "type": "reading",
        "id": "reading-mezquita",
        "title": "Información gráfica 1 · Mezquita de Córdoba",
        "html": "<p>Usa esta imagen para responder a las cuestiones 9, 10 y 11.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-social-mezquita.png\" alt=\"Interior de la mezquita de Córdoba usado en el examen oficial.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Interior de la mezquita de Córdoba.</figcaption></figure>"
      },
      {
        "type": "question",
        "id": "q9",
        "number": 9,
        "title": "Identificación de la obra arquitectónica",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Identifica esta obra arquitectónica, su función, época y estilo artístico al que corresponde.</p>",
        "openLabel": "Tu identificación",
        "solutionHtml": "<p>Es la <strong>sala de oraciones de la mezquita de Córdoba</strong>. Tiene función <strong>religiosa</strong>, pertenece al <strong>arte hispanomusulmán</strong> y corresponde al <strong>periodo califal</strong>, con gran desarrollo en el siglo X.</p>"
      },
      {
        "type": "question",
        "id": "q10",
        "number": 10,
        "title": "Descripción y análisis artístico",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Describe y analiza artísticamente esta obra.</p>",
        "openLabel": "Tu análisis",
        "solutionHtml": "<p>La mezquita de Córdoba es una de las obras maestras del Islam en Occidente. Destaca por su planta rectangular, patio, sala de oraciones y muro de la quibla con mihrab.</p><p>En la sala de oración sobresale la doble arquería con arcos de herradura y de medio punto, dovelas rojas y blancas, columnas reaprovechadas y una solución estructural que aporta altura y un efecto visual de gran riqueza.</p><p>También destaca la decoración del mihrab y la maqsura, con mosaicos, yeserías, atauriques y arcos profusamente decorados. Los materiales son relativamente modestos, pero el resultado artístico es muy suntuoso.</p>"
      },
      {
        "type": "question",
        "id": "q11",
        "number": 11,
        "title": "Arquitectura hispanomusulmana",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Elabora una redacción describiendo la arquitectura hispanomusulmana y citando sus obras principales.</p>",
        "openLabel": "Tu redacción",
        "solutionHtml": "<p>La arquitectura hispanomusulmana se desarrolló en Al-Ándalus y se caracteriza por edificios orientados al interior, materiales modestos y una decoración muy rica. Son típicos los arcos de herradura, polilobulados y apuntados, las yeserías, lacerías, atauriques, azulejos, mocárabes, patios, fuentes y juegos de luz y agua.</p><p>Entre sus obras más destacadas están la <strong>mezquita de Córdoba</strong>, <strong>Medina Azahara</strong>, la <strong>Giralda</strong> y el patio de los Naranjos de Sevilla, la <strong>mezquita del Cristo de la Luz</strong> en Toledo, alcazabas como las de Málaga o Almería y, sobre todo, la <strong>Alhambra de Granada</strong>.</p>"
      },
      {
        "type": "reading",
        "id": "reading-ue",
        "title": "Información gráfica 2 · Mapa de la Unión Europea en 2023",
        "html": "<p>Usa este mapa para responder a las cuestiones 12, 13 y 14.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-04-social-ue-mapa.png\" alt=\"Mapa de la Unión Europea en 2023 usado en el examen oficial.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Mapa político de Europa y países de la Unión Europea en 2023.</figcaption></figure>"
      },
      {
        "type": "question",
        "id": "q12",
        "number": 12,
        "title": "Lectura general del mapa de la UE",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Indica qué representa la imagen y explica la leyenda empleada.</p>",
        "openLabel": "Tu respuesta",
        "solutionHtml": "<p>La imagen representa un <strong>mapa político de Europa en 2023</strong>. El color más oscuro identifica a los <strong>países miembros de la Unión Europea</strong>; los tonos grises marcan otros países europeos y territorios limítrofes o próximos según la leyenda. Además, aparece un pequeño mapa de situación que ubica Europa dentro del conjunto de continentes.</p>"
      },
      {
        "type": "question",
        "id": "q13",
        "number": 13,
        "title": "Europa y Unión Europea",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Observa el mapa y explica la diferencia entre países de Europa y países miembros de la Unión Europea.</p>",
        "openLabel": "Tu explicación",
        "solutionHtml": "<p>Los <strong>países europeos</strong> son todos los estados soberanos situados en el continente europeo. Los <strong>países miembros de la Unión Europea</strong> son solo los que forman parte de esa organización supranacional y comparten un marco político y económico común.</p><p>Por tanto, hay países que están en Europa pero <strong>no pertenecen a la UE</strong>, como Noruega, Suiza, Islandia, Reino Unido, Bielorrusia o varios estados balcánicos. En 2023 la Unión Europea está formada por <strong>27 países</strong>.</p>"
      },
      {
        "type": "question",
        "id": "q14",
        "number": 14,
        "title": "Historia y características de la Unión Europea",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Describe brevemente la historia y las características de la Unión Europea.</p>",
        "openLabel": "Tu descripción",
        "solutionHtml": "<p>La integración europea comenzó tras la Segunda Guerra Mundial con la <strong>CECA</strong> en 1951 y avanzó con la <strong>CEE</strong> creada por el Tratado de Roma en 1957. En 1992, el Tratado de Maastricht transformó ese proceso en la <strong>Unión Europea</strong>, reforzando la integración política y económica.</p><p>Entre sus rasgos principales están el mercado común, la libre circulación de personas, mercancías, servicios y capitales, la cooperación política, el respeto a la democracia y los derechos, y la existencia de instituciones como el Parlamento Europeo, el Consejo, la Comisión y el Tribunal de Justicia. También busca reducir desigualdades entre regiones, proteger el medio ambiente y reforzar la cooperación entre estados.</p>"
      },
      {
        "type": "question",
        "id": "q15",
        "number": 15,
        "title": "Informe sobre ciudades del Tercer Mundo",
        "points": 15,
        "kind": "openText",
        "promptHtml": "<p>Imagina que eres un periodista o geógrafo que trabaja para la ONU y te piden un informe de al menos 150 palabras sobre la situación de las ciudades en los países del Tercer Mundo. Puedes orientarte con este esquema oficial:</p><ul><li>El crecimiento imparable de la urbanización en el mundo y la explosión urbanística en los países menos desarrollados.</li><li>Las causas de este crecimiento.</li><li>Las características de las ciudades del Tercer Mundo.</li><li>La problemática.</li></ul>",
        "openLabel": "Tu informe",
        "noteHtml": "<p>Se valora el contenido geográfico, la estructura y la claridad de la redacción.</p>",
        "solutionHtml": "<p>La respuesta es abierta, pero debería mencionar al menos estos puntos: el fuerte crecimiento de la urbanización mundial, especialmente en países menos desarrollados; causas como la alta natalidad y el éxodo rural; enormes desigualdades entre barrios ricos y periferias de infraviviendas; y problemas graves de servicios, transporte, sanidad, residuos y contaminación.</p><p>También conviene citar ejemplos de megaciudades del mundo en desarrollo y señalar que la cooperación internacional y la planificación urbana sostenible son claves para mejorar las condiciones de vida.</p>"
      }
    ]
  },
  "2024-06-social": {
    "id": "2024-06-social",
    "title": "Convocatoria junio 2024 · Ámbito social",
    "subtitle": "Prueba interactiva basada en el modelo oficial, con apoyo visual para la pintura de Goya y el mapa de densidad de población.",
    "sourceLinks": [
      {
        "label": "Archivo oficial de convocatorias anteriores",
        "url": "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores"
      },
      {
        "label": "ZIP oficial junio 2024 (incluye soluciones)",
        "url": "https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1624993/Pruebas%20convocatoria%20junio%202024%20%28incluye%20soluciones%29/1c4d10d9-36a0-8654-0095-1944e6c8dab7?version=1.1"
      },
      {
        "label": "PDF del examen (copia local)",
        "url": "data/exam-packs/2024-06/extracted/Convocatoria%20junio%202024/SOC_ESPA_2024.pdf"
      },
      {
        "label": "PDF del solucionario (copia local)",
        "url": "data/exam-packs/2024-06/extracted/Convocatoria%20junio%202024/SOC_ESPA_soluciones_2024.pdf"
      },
      {
        "label": "Notas de extracción y apoyo visual",
        "url": "content/exams/2024-06-social-notes.md"
      }
    ],
    "introHtml": "<p>Examen oficial de junio de 2024 del ámbito social. Mantiene la estructura original por bloques y añade apoyo visual en la parte de análisis de imágenes y mapas.</p><ul><li><strong>A.</strong> Conceptos básicos (25 puntos)</li><li><strong>B.</strong> Comprensión y análisis de documento escrito (30 puntos)</li><li><strong>C.</strong> Comprensión y análisis de información gráfica (30 puntos)</li><li><strong>D.</strong> Expresión escrita (15 puntos)</li></ul><p><strong>Corrección automática:</strong> 25 puntos de ejercicios cerrados (2, 4 y 6). Los otros 75 puntos quedan para comparación manual con la solución oficial.</p>",
    "sections": [
      {
        "type": "question",
        "id": "q1",
        "number": 1,
        "title": "Términos y procesos históricos",
        "points": 10,
        "kind": "openList",
        "promptHtml": "<p>Relaciona cada definición con el término histórico correcto y con su periodo. Los términos posibles son: <strong>Polis</strong>, <strong>Gótico</strong>, <strong>Tratado de Tordesillas</strong>, <strong>Régimen franquista</strong> y <strong>Homo Sapiens Sapiens</strong>. Los periodos son: <strong>Prehistoria</strong>, <strong>Edad Antigua</strong>, <strong>Edad Media</strong>, <strong>Edad Moderna</strong> y <strong>Edad Contemporánea</strong>.</p>",
        "items": [
          {
            "label": "A. Acuerdo firmado por Castilla y Portugal en 1494 para repartirse las zonas de influencia del Nuevo Mundo.",
            "solution": "<strong>Tratado de Tordesillas</strong> · Edad Moderna"
          },
          {
            "label": "B. Dictadura militar que hubo en España de 1939 a 1975 dirigida por Franco.",
            "solution": "<strong>Régimen franquista</strong> · Edad Contemporánea"
          },
          {
            "label": "C. Nombre que recibe la ciudad-estado en la Grecia clásica, como Atenas.",
            "solution": "<strong>Polis</strong> · Edad Antigua"
          },
          {
            "label": "D. Estilo artístico europeo entre los siglos XII y XV cuya expresión más perfecta fue la catedral.",
            "solution": "<strong>Gótico</strong> · Edad Media"
          },
          {
            "label": "E. Hombre moderno, sabio, aparecido en Europa hace unos 40.000 años y autor del arte rupestre.",
            "solution": "<strong>Homo Sapiens Sapiens</strong> · Prehistoria"
          }
        ],
        "noteHtml": "<p>La web no puntúa este ejercicio automáticamente, pero puedes comparar cada fila con la solución oficial.</p>"
      },
      {
        "type": "question",
        "id": "q2",
        "number": 2,
        "title": "Conceptos básicos de geografía, demografía, política y economía",
        "points": 15,
        "kind": "multiChoiceGroup",
        "includeInSummary": true,
        "pointsPerItem": 3,
        "promptHtml": "<p>Marca el concepto o término más adecuado para cada definición.</p>",
        "items": [
          {
            "label": "A. Bosque formado por árboles que pierden la hoja en otoño, característico del clima oceánico.",
            "options": [
              "Bosque de coníferas",
              "Bosque caducifolio",
              "Bosque mediterráneo"
            ],
            "correctIndex": 1
          },
          {
            "label": "B. Gráfica que representa la estructura de la población por sexo y edad.",
            "options": [
              "Gráfica de barras",
              "Pirámide",
              "Tasa de natalidad"
            ],
            "correctIndex": 1
          },
          {
            "label": "C. Reformas emprendidas por Gorbachov en la URSS a partir de 1985.",
            "options": [
              "Perestroika",
              "Capitalismo",
              "Comunismo"
            ],
            "correctIndex": 0
          },
          {
            "label": "D. Actividad económica que transforma materias primas en productos elaborados.",
            "options": [
              "Sector primario o agrario",
              "Sector secundario o industrial",
              "Sector terciario o servicios"
            ],
            "correctIndex": 1
          },
          {
            "label": "E. Modelo político-social europeo de posguerra que redistribuye recursos para cubrir necesidades básicas e igualdad de oportunidades.",
            "options": [
              "Democracia",
              "Economía de escala",
              "Estado de bienestar"
            ],
            "correctIndex": 2
          }
        ]
      },
      {
        "type": "reading",
        "id": "reading-guerra",
        "title": "Documento 1 · La Gran Guerra",
        "html": "<p><strong>Lee el siguiente texto y responde a las cuestiones 3, 4 y 5.</strong></p><blockquote><p>\"Alemania tomó la iniciativa de las operaciones militares, con la aplicación del Plan Schlieffen. Ni siquiera constituyó un obstáculo la neutralidad garantizada de Bélgica. A los dos días de que esta se negara a permitir el paso de las tropas germanas, los alemanes invadieron el país...</p><p>Las avanzadas galas y británicas chocaron con fuerzas que habían comenzado a fortificarse cavando trincheras... La iniciativa había partido, pues, de Alemania, pero rápidamente fue imitada por los aliados. Así, a lo largo de todo este año, uno y otro bando se dedicaron a cavar profundas zanjas y a esconderse en ellas para defenderse...</p><p>Cerca de un millón y medio de soldados estadounidenses han sido movilizados a Europa desde que Estados Unidos decidiera su participación en la guerra. Woodrow Wilson, presidente de los Estados Unidos, ha sido el mago capaz de convencer al pueblo yanqui de la necesidad de participar en una contienda de la que le separan miles de kilómetros... Sin la participación de Estados Unidos, la Gran Guerra se hubiera prolongado indefinidamente\".</p></blockquote><p class=\"meta\">Texto extraído de la materia Ámbito social Nivel II (CREA), bloque 8, tema 3.</p>"
      },
      {
        "type": "question",
        "id": "q3",
        "number": 3,
        "title": "Resumen del documento sobre la Primera Guerra Mundial",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Elabora un breve resumen, con tus palabras, de las ideas principales que expresa el texto.</p>",
        "openLabel": "Tu resumen",
        "solutionHtml": "<p>El texto explica que Alemania inició la Primera Guerra Mundial aplicando el Plan Schlieffen e invadiendo Bélgica. Después, ambos bandos pasaron a una guerra de trincheras. También subraya que la entrada de Estados Unidos, impulsada por Woodrow Wilson, fue decisiva para acortar la contienda y favorecer la victoria aliada.</p>"
      },
      {
        "type": "question",
        "id": "q4",
        "number": 4,
        "title": "Verdadero o falso sobre el documento 1",
        "points": 5,
        "kind": "booleanGroup",
        "includeInSummary": true,
        "pointsPerItem": 1,
        "promptHtml": "<p>Indica si las siguientes afirmaciones son verdaderas (V) o falsas (F) según el texto.</p>",
        "items": [
          {
            "label": "El país que tomó la iniciativa de la guerra fue Bélgica.",
            "correct": false
          },
          {
            "label": "Los dos bandos durante el primer año se dedicaron a cavar trincheras.",
            "correct": true
          },
          {
            "label": "Francia y Gran Bretaña formaban parte del bando de los aliados.",
            "correct": true
          },
          {
            "label": "Napoleón convenció a los norteamericanos para participar en la guerra.",
            "correct": false
          },
          {
            "label": "La participación de Estados Unidos en la Gran Guerra fue decisiva.",
            "correct": true
          }
        ]
      },
      {
        "type": "question",
        "id": "q5",
        "number": 5,
        "title": "Explicación del acontecimiento histórico",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Explica brevemente el acontecimiento al que se refiere el texto.</p>",
        "openLabel": "Tu explicación",
        "solutionHtml": "<p>El texto se refiere a la <strong>Primera Guerra Mundial</strong> o <strong>Gran Guerra</strong>, desarrollada entre 1914 y 1918.</p><ul><li><strong>Causas de fondo:</strong> rivalidades territoriales y coloniales, auge de los nacionalismos, rearme y creación de bloques enfrentados.</li><li><strong>Desencadenante:</strong> el atentado de Sarajevo contra el heredero de Austria-Hungría.</li><li><strong>Fases:</strong> guerra de movimientos, guerra de trincheras y desenlace final en 1918.</li><li><strong>Hecho decisivo:</strong> en 1917 Estados Unidos entró en la guerra y Rusia salió tras la Revolución soviética.</li><li><strong>Consecuencias:</strong> enorme mortandad, destrucción material, Tratado de Versalles y creación de la Sociedad de Naciones.</li></ul><p>Se considera correcta cualquier explicación equivalente que sitúe bien el conflicto y sus rasgos principales.</p>"
      },
      {
        "type": "reading",
        "id": "reading-ddhh",
        "title": "Documento 2 · Derechos Humanos y democracia",
        "html": "<p><strong>Lee el siguiente texto y responde a las cuestiones 6, 7 y 8.</strong></p><blockquote><p>\"La historia de la Humanidad es la historia de una lucha por el reconocimiento de que todos los seres humanos son personas dignas, iguales y valiosas. Así comenzó un proceso que condujo a la conversión del súbdito pasivo obediente en ciudadano activo y respetuoso.</p><p>Un momento clave en este proceso se llevó a cabo en 1948 en las Naciones Unidas con la Declaración Universal de los Derechos Humanos. El ciudadano es tal cuando es sujeto de un conjunto de derechos que le permiten reclamar aquellas cosas que son necesarias para llevar una vida digna, así como para vivir responsablemente dentro de su comunidad, como la educación, la cultura, el alimento, el vestido y la vivienda. También incluye condiciones como las libertades de expresión, de credo, de circulación, etc.</p><p>Los Derechos Humanos se caracterizan por ser universales, preexistentes e inviolables.</p><p>De esta forma podemos decir que los Derechos Humanos son un conjunto de principios éticos que buscan la defensa de la dignidad del ser humano, y que por tanto existe una estrecha relación entre democracia y Derechos Humanos\".</p></blockquote><p class=\"meta\">Texto extraído de la materia Ámbito social Nivel I (CREA), bloque 2, tema 4.</p>"
      },
      {
        "type": "question",
        "id": "q6",
        "number": 6,
        "title": "Verdadero o falso sobre Derechos Humanos",
        "points": 5,
        "kind": "booleanGroup",
        "includeInSummary": true,
        "pointsPerItem": 1,
        "promptHtml": "<p>Indica si las siguientes afirmaciones son verdaderas (V) o falsas (F) según el texto.</p>",
        "items": [
          {
            "label": "La Declaración Universal de Derechos Humanos fue aprobada en el año 2000.",
            "correct": false
          },
          {
            "label": "En la Declaración se expresaron los derechos y libertades a los que todo ser humano puede aspirar.",
            "correct": true
          },
          {
            "label": "Los Derechos Humanos fueron aprobados por la ONU.",
            "correct": true
          },
          {
            "label": "Existe una estrecha relación entre dictadura y Derechos Humanos.",
            "correct": false
          },
          {
            "label": "Los Derechos Humanos son un conjunto de principios éticos.",
            "correct": true
          }
        ]
      },
      {
        "type": "question",
        "id": "q7",
        "number": 7,
        "title": "Ideas principales del documento 2",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Expresa con tus propias palabras las ideas que recoge el texto anterior.</p>",
        "openLabel": "Tu explicación",
        "solutionHtml": "<p>El texto sostiene que la humanidad ha luchado por reconocer la dignidad e igualdad de todas las personas y por convertir a los súbditos en ciudadanos con derechos. Señala como momento clave la Declaración Universal de los Derechos Humanos de 1948, aprobada en la ONU, y recuerda que esos derechos garantizan una vida digna, libertades básicas y participación responsable en la comunidad. Además, define los Derechos Humanos como universales, preexistentes e inviolables, y los vincula directamente con la democracia.</p>"
      },
      {
        "type": "question",
        "id": "q8",
        "number": 8,
        "title": "Importancia de la Declaración Universal de Derechos Humanos",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Explica la importancia de la Declaración de los Derechos Humanos. Puedes orientarte con este guion: cuándo se creó, por quién, para qué, por qué y cuáles son sus principios fundamentales.</p>",
        "openLabel": "Tu respuesta desarrollada",
        "solutionHtml": "<p>La <strong>Declaración Universal de los Derechos Humanos</strong> fue aprobada por la Asamblea General de la ONU en 1948, después de la Segunda Guerra Mundial. Su objetivo era evitar que se repitieran atrocidades como las del conflicto y fijar unos derechos comunes para todas las personas.</p><p>Su importancia radica en que reconoce de forma universal que todos los seres humanos nacen libres e iguales en dignidad y derechos. Incluye libertades y derechos como la vida, la igualdad ante la ley, la libertad de expresión y de creencias, la educación, el trabajo o una vivienda digna.</p><p>También afirma que estos derechos son universales, innatos y no deben ser violados. Por eso se consideran una base ética de las democracias modernas y un compromiso internacional de respeto a la dignidad humana.</p>",
        "noteHtml": "<p>Se valora que organices bien la respuesta y que expliques por qué esta declaración sigue siendo importante hoy.</p>"
      },
      {
        "type": "reading",
        "id": "reading-goya",
        "title": "Información gráfica 1 · Goya",
        "html": "<p>Usa esta imagen para responder a las cuestiones 9, 10 y 11.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-06-social-goya.png\" alt=\"Cuadro Los fusilamientos del 3 de mayo, de Francisco de Goya.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Los fusilamientos del 3 de mayo, de Francisco de Goya.</figcaption></figure>"
      },
      {
        "type": "question",
        "id": "q9",
        "number": 9,
        "title": "Identificación de la obra",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Identifica la obra, su autor, el estilo y la época a la que corresponde.</p>",
        "openLabel": "Tu identificación",
        "solutionHtml": "<p>Se trata de <strong>Los fusilamientos del tres de mayo</strong> o <strong>Los fusilamientos en la montaña del Príncipe Pío</strong>, obra de <strong>Francisco de Goya</strong>, pintada en <strong>1814</strong>. Representa la represión francesa en Madrid tras el levantamiento de 1808 y se encuadra en el <strong>Romanticismo</strong>, dentro del inicio de la Edad Contemporánea.</p>"
      },
      {
        "type": "question",
        "id": "q10",
        "number": 10,
        "title": "Descripción y análisis artístico del cuadro",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Describe qué representa el cuadro y analiza artísticamente la obra.</p>",
        "openLabel": "Tu análisis",
        "solutionHtml": "<p>La escena muestra la ejecución de madrileños por las tropas francesas durante la Guerra de la Independencia. Goya denuncia la violencia y el horror de la guerra presentando a los soldados como un bloque anónimo y a las víctimas iluminadas por un farol.</p><p>Desde el punto de vista artístico, es un óleo sobre lienzo de gran formato, con fuerte dramatismo, composición dividida en dos grupos enfrentados y un claro contraste de luces y sombras. Destaca el personaje central vestido de blanco, símbolo de inocencia y sacrificio.</p><p>La pincelada es suelta, los colores contrastan los tonos oscuros del pelotón con la luz de las víctimas, y toda la obra está al servicio de la denuncia del hecho histórico.</p>"
      },
      {
        "type": "question",
        "id": "q11",
        "number": 11,
        "title": "Goya y otras obras relevantes",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Explica brevemente la pintura de Goya y menciona alguna de sus obras más relevantes.</p>",
        "openLabel": "Tu respuesta",
        "solutionHtml": "<p>Goya es uno de los grandes pintores de la historia del arte y una figura de transición hacia la modernidad. Su obra refleja la España de finales del siglo XVIII y comienzos del XIX, la vida de la corte, la Guerra de la Independencia y también sus propias crisis personales.</p><p>Trabajó cartones para tapices, retratos, pintura histórica, grabados y las conocidas Pinturas Negras. Se valora especialmente su dominio de la luz, la psicología de los personajes y la libertad de su pincelada.</p><p>Entre sus obras más conocidas están <em>La carga de los mamelucos</em>, <em>La familia de Carlos IV</em>, <em>La maja vestida</em>, <em>La maja desnuda</em>, los grabados de <em>Los caprichos</em> y pinturas negras como <em>Saturno devorando a sus hijos</em>.</p>"
      },
      {
        "type": "reading",
        "id": "reading-mapa",
        "title": "Información gráfica 2 · Densidad de población en España",
        "html": "<p>Usa este mapa para responder a las cuestiones 12, 13 y 14.</p><figure style=\"margin:1rem 0;\"><img src=\"content/exams/img/2024-06-social-mapa.png\" alt=\"Mapa de densidad de población de España usado en el examen oficial.\" style=\"max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;\" /><figcaption style=\"font-size:.95rem;color:#5c677d;margin-top:.5rem;\">Mapa de densidad de población de España usado en el examen oficial.</figcaption></figure>"
      },
      {
        "type": "question",
        "id": "q12",
        "number": 12,
        "title": "Lectura general del mapa y provincias con alta densidad",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Indica qué tema se representa en el mapa y explica la leyenda. Escribe el nombre de cinco provincias que tengan más de 100 habitantes por km².</p>",
        "openLabel": "Tu respuesta",
        "solutionHtml": "<p>El mapa representa la <strong>densidad de población en España</strong>. La leyenda usa distintos tonos para diferenciar territorios con mayor o menor número de habitantes por kilómetro cuadrado: el tono más oscuro marca la mayor densidad y los tonos más claros, densidades medias o bajas.</p><p>Son válidas muchas provincias con más de 100 hab./km². Por ejemplo: <strong>Madrid, Barcelona, Valencia, Málaga y Vizcaya</strong>. También servirían otras como Alicante, Murcia, Sevilla, Pontevedra, Guipúzcoa, Baleares, Las Palmas o Santa Cruz de Tenerife.</p>",
        "noteHtml": "<p>Si eliges otras cinco provincias claramente situadas en la franja de mayor densidad del mapa, la respuesta debe darse por válida.</p>"
      },
      {
        "type": "question",
        "id": "q13",
        "number": 13,
        "title": "Definición de densidad de población y comunidades más densas",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Define el concepto de densidad de población y enumera las cuatro comunidades autónomas con mayor densidad (color más oscuro).</p>",
        "openLabel": "Tu definición y ejemplos",
        "solutionHtml": "<p>La <strong>densidad de población</strong> es el número de habitantes que vive en un territorio en relación con su superficie, normalmente expresado en habitantes por kilómetro cuadrado.</p><p>Según la lectura del mapa, entre las comunidades con mayor densidad aparecen <strong>Madrid, Cataluña, Comunidad Valenciana y País Vasco</strong>. En una corrección flexible también pueden aceptarse otras muy densas si se justifican con el sombreado del mapa, como Andalucía, Murcia, Baleares o Canarias.</p>"
      },
      {
        "type": "question",
        "id": "q14",
        "number": 14,
        "title": "Distribución de la población española",
        "points": 5,
        "kind": "openText",
        "promptHtml": "<p>Describe brevemente las características de la distribución de la población española.</p>",
        "openLabel": "Tu descripción",
        "solutionHtml": "<p>La distribución de la población española es <strong>desigual</strong>. La mayor densidad se concentra en las grandes ciudades, la costa mediterránea, el valle del Guadalquivir, los archipiélagos y el área metropolitana de Madrid. También destacan algunos ejes urbanos e industriales del norte.</p><p>Las zonas del interior peninsular y muchas áreas montañosas presentan densidades bajas, población envejecida y pérdida demográfica ligada al éxodo rural. En general, las zonas más densas coinciden con territorios urbanos, turísticos o con economías más dinámicas; las menos densas se asocian a actividades agrarias y menor dinamismo económico.</p>"
      },
      {
        "type": "question",
        "id": "q15",
        "number": 15,
        "title": "Texto sobre la Ilustración",
        "points": 15,
        "kind": "openText",
        "promptHtml": "<p>Imagina que trabajas para Wikipedia y te piden un informe de al menos 150 palabras sobre la Ilustración. Puedes orientarte con este esquema oficial:</p><ul><li>Antecedentes: Revolución Inglesa, Revolución científica y crisis del Antiguo Régimen.</li><li>Concepto de Ilustración: dónde y cuándo aparece.</li><li>Difusión: la Enciclopedia.</li><li>Ideas de la Ilustración y principales pensadores.</li><li>Puesta en práctica: Despotismo Ilustrado y Revolución Francesa.</li></ul>",
        "openLabel": "Tu redacción",
        "noteHtml": "<p>Se valora tanto el contenido histórico como la claridad, la estructura y la corrección escrita.</p>",
        "solutionHtml": "<p>La respuesta es abierta, pero debería incluir al menos estos puntos: el cuestionamiento del Antiguo Régimen, la influencia de la Revolución Inglesa y la revolución científica, el nacimiento de la Ilustración en la Francia del siglo XVIII, la difusión de sus ideas mediante la <em>Enciclopedia</em> y autores como <strong>Voltaire, Montesquieu y Rousseau</strong>.</p><p>También conviene explicar sus principios políticos y culturales: defensa de la razón, crítica al absolutismo, soberanía nacional, separación de poderes, igualdad ante la ley, libertad individual y cultura laica. Por último, debe mencionarse su aplicación en el Despotismo Ilustrado y, de forma más radical, en la Revolución Francesa.</p>"
      }
    ]
  }
  ,"2025-04-com-in": {
    id: "2025-04-com-in",
    title: "Convocatoria abril 2025 · Ámbito de comunicación (opción inglés)",
    subtitle: "Tercer examen online de comunicación (inglés) integrado a partir del pack oficial de la Junta.",
    sourceLinks: [
      {
        label: "Archivo oficial de convocatorias anteriores",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores",
      },
      {
        label: "ZIP oficial abril 2025 (incluye soluciones)",
        url: "https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1625008/Pruebas%20convocatoria%20abril%202025%20%28incluye%20soluciones%29/864b6c80-496c-6291-4aa0-dcea2cdf83e1?version=1.0",
      },
      {
        label: "Notas de extracción y verificación",
        url: "content/exams/2025-04-com-in-notes.md",
      },
    ],
    introHtml: `
      <p>Esta versión convierte en web <strong>el examen oficial de abril de 2025</strong> del ámbito de comunicación, opción inglés.</p>
      <p><strong>Cómo corrige:</strong> en preguntas tipo test o verdadero/falso te indica aciertos y fallos. En preguntas abiertas muestra la solución oficial o una orientación para comparar.</p>
      <p><strong>Resultado final:</strong> la web calcula automáticamente <strong>45 puntos de ejercicios cerrados</strong>. Los otros <strong>55 puntos</strong> quedan para comparación manual porque el examen incluye respuestas abiertas, redacciones o justificaciones.</p>
    `,
    sections: [
      {
        type: "reading",
        id: "reading-castellano",
        title: "Texto base · Lengua castellana",
        html: `
          <p><strong>Pan comido</strong></p>
          <p>Los primeros resultados que aparecen en Google si se escribe Inteligencia Artificial y se elige la opción “noticias” pertenecen a periódicos importantes y dicen cosas como: “Le preguntaron a la inteligencia artificial qué fue primero, si el huevo o la gallina”; “Así se verían los personajes de Dragon Ball Z si fueran reales, según la inteligencia artificial”; “¿Las cinco mujeres más bellas de la historia? Esto reveló la inteligencia artificial”. Etcétera.</p>
          <p>En mi infancia usaba el diccionario para buscar malas palabras. No me interesaba tanto conocer el significado del término “trascendente” como descubrir de qué manera aquel libro docto definía la palabra “culo”. Después crecí y la navegación por los mares de las enciclopedias empezó a ser una deriva gozosa de enigmas y revelaciones, pero ahora, al leer aquellos titulares, tuve un déjà vu. Buena parte de la humanidad parece estar haciendo con la inteligencia artificial lo que yo hacía con el diccionario en mi infancia. Este titán cibernético no sólo puede procesar toneladas de información en segundos, sino que, además, tiene capacidad de educarse a sí mismo. Y come de nosotros, que lo alimentamos con datos.</p>
          <p>No sería descabellado que, a partir de este tsunami de consultas idiotas, la inteligencia artificial llegara a la conclusión de que, si bien la humanidad tuvo alguna vez entre sus miembros a personas como Leonardo Da Vinci o Isaac Newton, ahora está formada por sujetos grotescos más interesados en saber cómo luciría la familia Picapiedra en la vida real que en dilucidar si este temible y refinado océano de neuronas artificiales puede ser autoconsciente, tener ética, sentir compasión o hacer daño.</p>
          <p>Es posible, entonces, que el ChatGPT y sus hermanitos menores y tíos y primos lejanos se den cuenta muy pronto de que la humanidad es pan comido y de que son sus algorítmicas legiones las que ganarán la batalla.</p>
          <p class='meta'>Leila Guerriero, <em>El País</em></p>
        `,
      },
      {
        type: "question",
        id: "q1",
        number: 1,
        title: "Intención del texto",
        points: 5,
        kind: "multiChoiceGroup",
        pointsPerItem: 5,
        includeInSummary: true,
        promptHtml: `<p>Señala la afirmación que mejor sintetiza la intención del texto.</p>`,
        items: [
          {
            label: "Elige la opción correcta.",
            options: [
              "Aportar datos concretos sobre la Inteligencia artificial.",
              "Narrar las experiencias de la autora en su niñez y juventud.",
              "Concienciar sobre un uso responsable de la IA para explorar las posibilidades positivas que esta herramienta puede proporcionar.",
              "Exigir a los jóvenes que usen diccionarios y enciclopedias y dejen de utilizar herramientas electrónicas."
            ],
            correctIndex: 2,
          }
        ],
      },
      {
        type: "question",
        id: "q2",
        number: 2,
        title: "Conceptos clave del texto",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Explica qué quiere decir la autora con <em>“océano de neuronas artificiales”</em> e <em>“Inteligencia Artificial”</em>.</p>`,
        items: [
          { label: "A. Inteligencia Artificial", solution: "<strong>La Inteligencia Artificial</strong> es un campo de la informática que realiza actividades que normalmente requieren inteligencia humana, como razonar de forma lógica o crear textos, imágenes u obras." },
          { label: "B. “Océano de neuronas artificiales”", solution: "La autora usa esa expresión para referirse a una inteligencia artificial que actúa <strong>como si tuviera neuronas</strong> y pudiera imitar el funcionamiento del cerebro humano a gran escala." },
        ],
      },
      {
        type: "question",
        id: "q3",
        number: 3,
        title: "Interpretación de una oración",
        points: 5,
        kind: "openText",
        promptHtml: `<p>Explica el significado de la siguiente oración:</p><blockquote>Es posible, entonces, que el ChatGPT y sus hermanitos menores y tíos y primos lejanos se den cuenta muy pronto de que la humanidad es pan comido y de que son sus algorítmicas legiones las que ganarán la batalla.</blockquote>`,
        openLabel: "Escribe aquí tu explicación",
        solutionHtml: `<p><strong>Solución oficial:</strong> Se identifica con la idea de la importancia y necesidad de hacer un tratamiento no tan caprichoso y sí más útil y correcto de esta herramienta, a fin de no acabar siendo dominados por este gigante virtual. La autora ironiza sobre el aprovechamiento de esta nueva herramienta atendiendo a si es usada para búsquedas banales o como una valiosa herramienta puesta a nuestro servicio.</p>`,
      },
      {
        type: "question",
        id: "q4",
        number: 4,
        title: "Verdadero o falso según el texto",
        points: 5,
        kind: "booleanGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Indica si las siguientes afirmaciones son verdaderas [V] o falsas [F] según el texto.</p>`,
        items: [
          { label: "Hay que evitar usar las nuevas tecnologías para hacer trabajos y actividades relacionadas con el instituto.", correct: false },
          { label: "La autora en su infancia utilizaba el diccionario para buscar el significado de malas palabras.", correct: true },
          { label: "En la actualidad, la Inteligencia Artificial es la única herramienta para buscar información y crear textos.", correct: false },
          { label: "La Inteligencia Artificial podría llegar a pensar que la humanidad es grotesca porque utiliza las nuevas tecnologías para buscar idioteces.", correct: true },
          { label: "Puede que las nuevas tecnologías nos consideren pan comido y nos ganen la batalla a los humanos.", correct: true },
        ],
      },
      {
        type: "question",
        id: "q5",
        number: 5,
        title: "Redacción argumentativa sobre IA y creatividad",
        points: 10,
        kind: "openText",
        promptHtml: `
          <p>El ChatGPT en general es un problema que cada vez está acarreando más y peores consecuencias en las aulas. La creación de textos originales e individuales está en peligro. Es difícil realizar un concurso literario en los centros educativos debido al uso de estas aplicaciones.</p>
          <p>¿Consideras que la creatividad de los jóvenes está en peligro? ¿Cómo crees que se debe organizar la creación de textos propios en las aulas? ¿Cuáles crees que deben ser los límites de la IA para utilizarla en los trabajos académicos?</p>
          <p class='meta'>Redacta un texto de al menos 200 palabras en el que expreses tu punto de vista sobre el tema, argumentándolo de forma adecuada e incorporando los aspectos de la lectura que consideres.</p>
        `,
        openLabel: "Escribe aquí tu redacción",
        solutionHtml: `<p><strong>Solución oficial:</strong> Respuesta libre.</p>`,
      },
      {
        type: "question",
        id: "q6",
        number: 6,
        title: "Palabras a las que les falta h",
        points: 5,
        kind: "openList",
        promptHtml: `<p>En el siguiente texto han desaparecido todas las grafías <strong>h</strong> debido a un fallo tecnológico del ChatGPT. Encuentra al menos cinco palabras en las que eches en falta esta grafía y reescríbelas.</p><blockquote>Nada. No abía ni señal del palacio, ni de los jardines. Ante él se extendía, como antes, la llanura yerma, que llegaba asta el confín de los montes. Una caravana la cruzaba, larga y lenta, y asta los oídos imperiales llegó el eco de una triste canción asiática.</blockquote><blockquote>El primer ministro apareció en la estancia imperial. Abía atravesado la gran plaza tan precipitadamente, al saber que el soberano le llamaba a aquella ora insólita, que ni él ni sus servidores se abían dado cuenta de la desaparición del palacio; y cuando el Ijo del Cielo le mostró la superficie vacía de palacio y de jardines, abrió la boca faltando notablemente a la etiqueta que proíbe exteriorizar sus sentimientos delante de las reales personas.</blockquote>`,
        items: [
          { label: "A.", solution: "Por ejemplo: <strong>había</strong>." },
          { label: "B.", solution: "Por ejemplo: <strong>hasta</strong>." },
          { label: "C.", solution: "Por ejemplo: <strong>hora</strong>." },
          { label: "D.", solution: "Por ejemplo: <strong>habían</strong>." },
          { label: "E.", solution: "Por ejemplo: <strong>Hijo</strong> o <strong>prohíbe</strong>." },
        ],
        noteHtml: `<p class='meta'>La solución oficial reescribe el texto completo ya corregido; aquí se admiten varias combinaciones válidas de cinco palabras.</p>`,
      },
      {
        type: "question",
        id: "q7",
        number: 7,
        title: "Funciones sintácticas",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Escribe la función sintáctica de las palabras o expresiones marcadas en negrita.</p>`,
        items: [
          { label: "A. En mi infancia usaba el diccionario para buscar malas palabras", solution: "<strong>CD</strong> (complemento directo)." },
          { label: "B. Este titán cibernético / en segundos", solution: "<strong>Sujeto</strong> / <strong>CCT</strong> (complemento circunstancial de tiempo)." },
          { label: "C. La humanidad es pan comido", solution: "<strong>Atributo</strong>." },
          { label: "D. La humanidad ahora está formada por sujetos grotescos", solution: "<strong>Complemento agente</strong>." },
        ],
      },
      {
        type: "question",
        id: "q8",
        number: 8,
        title: "Características gramaticales y léxicas",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Localiza en el texto la palabra o palabras que se ajusten a cada característica.</p>`,
        items: [
          { label: "A. Un antónimo de natural", solution: "<strong>artificial</strong>." },
          { label: "B. Palabras del campo semántico de los medios de comunicación", solution: "Por ejemplo: <strong>Google, noticias, periódicos, titulares, información</strong>." },
          { label: "C. Dos sustantivos propios", solution: "Por ejemplo: <strong>Dragon Ball Z</strong>, <strong>Leonardo Da Vinci</strong> o <strong>Isaac Newton</strong>." },
          { label: "D. Dos conjunciones", solution: "Por ejemplo: <strong>si, y, o, pero</strong>." },
          { label: "E. Una palabra derivada", solution: "Por ejemplo: <strong>inteligencia, navegación, revelaciones, interesados, hermanitos</strong>." },
        ],
      },
      {
        type: "question",
        id: "q9",
        number: 9,
        title: "Opción correcta de lengua castellana",
        points: 5,
        kind: "multiChoiceGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Marca la opción correcta de cada una de las cuestiones que se proponen.</p>`,
        items: [
          { label: "A. El subgénero periodístico al que pertenece el texto es:", options: ["Una noticia.", "Un artículo de opinión.", "Una crónica."], correctIndex: 1 },
          { label: "B. ‘Le preguntaron a la inteligencia artificial qué fue primero, si el huevo o la gallina’ es una oración:", options: ["Interrogativa total y directa.", "Enunciativa afirmativa.", "Interrogativa parcial e indirecta."], correctIndex: 2 },
          { label: "C. En el acto de comunicación ‘La autora lee el significado de “culo” en el diccionario’, el receptor sería:", options: ["El diccionario.", "La autora.", "El término “culo”."], correctIndex: 1 },
          { label: "D. La palabra ‘humanidad’ es, por su estructura:", options: ["Compuesta.", "Simple.", "Derivada."], correctIndex: 2 },
          { label: "E. La palabra ‘déjà vu’ es:", options: ["Un coloquialismo.", "Un neologismo.", "Un extranjerismo."], correctIndex: 2 },
        ],
      },
      {
        type: "reading",
        id: "reading-teatro",
        title: "Texto base · Conocimiento literario",
        html: `
          <p><strong>Las bicicletas son para el verano</strong></p>
          <p>(Un silencio. El padre ha sacado un pitillo, lo ha partido y le da la mitad a su hijo. Lo encienden.)</p>
          <p><strong>DON LUIS:</strong> (Dando una profunda bocanada.) Qué malo es, ¿verdad?</p>
          <p><strong>LUIS:</strong> Sí, papá. Pero se fuma... Me parece que, te detengan o no, nos esperan malos tiempos, ¿verdad?</p>
          <p><strong>DON LUIS:</strong> A mí me parece lo mismo, pero hay que apechugar con lo que sea.</p>
          <p><strong>LUIS:</strong> Hay que ver... Con lo contenta que estaba mamá porque había llegado la paz...</p>
          <p><strong>DON LUIS:</strong> Pero no ha llegado la paz, Luisito: ha llegado la victoria. He hablado con doña María Luisa. ¿Te acuerdas que alguna vez le llevé un kilo de bacalao?</p>
          <p><strong>LUIS:</strong> Sí...</p>
          <p><strong>DON LUIS:</strong> Prometió pagarme el favor. Por mí no puede hacer nada, porque hay que esperar a que me depuren... Pero dice que un amigo suyo a ti podría colocarte.</p>
          <p><strong>LUIS:</strong> Bueno. Y al mismo tiempo estudio.</p>
          <p><strong>DON LUIS:</strong> Eso habíamos dicho. Al principio te será fácil porque la Física la sabrás de memoria.</p>
          <p><strong>LUIS:</strong> Sí, he estudiado bastante.</p>
          <p><strong>DON LUIS:</strong> Pero ¿has estudiado Física roja o Física nacional?</p>
          <p><strong>LUIS:</strong> Y... ¿de qué me puede emplear el amigo de doña María Luisa?</p>
          <p><strong>DON LUIS:</strong> (Antes de contestar echa una mirada de reojo a su hijo. Duda un poco y contesta con una sonrisa.) De... de chico de los recados.</p>
          <p><strong>LUIS:</strong> ¡Ah!</p>
          <p><strong>DON LUIS:</strong> No he encontrado otra cosa, Luis. Pero él dice que es de mucho porvenir. Están montando una oficina de importación y exportación. Y, de momento, no son más que tres o cuatro, todos de la otra zona. Tú serías el quinto.</p>
          <p><strong>LUIS:</strong> Sí, el chico de los recados.</p>
          <p><strong>DON LUIS:</strong> Compréndelo. Hay que llevar dinero a casa —del que vale, no de las estampitas ésas— a gastar en trapos y en pinturas. Y lo de «chico de los recados» lo digo un poco en cachondeo. Es que dicen que al principio todos tendrán que arrimar el hombro, y habrá que llevar paquetes y cosas de un lado a otro.</p>
          <p><strong>LUIS:</strong> Ya, ya.</p>
          <p><strong>DON LUIS:</strong> Para ese empleo te vendría bien la bicicleta que te iba a comprar cuando pasase esto, ¿te acuerdas?</p>
          <p><strong>LUIS:</strong> Ya lo creo. Yo la quería para el verano, para salir con una chica.</p>
          <p><strong>DON LUIS:</strong> ¡Ah!, ¿era para eso?</p>
          <p><strong>LUIS:</strong> No te lo dije, pero sí.</p>
          <p><strong>DON LUIS:</strong> Sabe Dios cuándo habrá otro verano.</p>
          <p class='meta'><em>Las bicicletas son para el verano</em>, Fernando Fernán Gómez</p>
        `,
      },
      {
        type: "question",
        id: "q10",
        number: 10,
        title: "Verdadero o falso sobre el fragmento teatral",
        points: 5,
        kind: "booleanGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Indica si las siguientes afirmaciones sobre el texto anterior son verdaderas [V] o falsas [F].</p>`,
        items: [
          { label: "Los personajes están preocupados por el futuro incierto que les espera después de acabar la guerra.", correct: true },
          { label: "Don Luis y su hijo están contentos porque ha llegado la paz.", correct: false },
          { label: "Un amigo de Doña María le consigue un trabajo a Luis como chico de los recados.", correct: true },
          { label: "Este fragmento está formado de diálogos y acotaciones.", correct: true },
          { label: "Luis quería una bicicleta para desempeñar su trabajo de chico de los recados.", correct: false },
        ],
      },
      {
        type: "question",
        id: "q11",
        number: 11,
        title: "Recursos retóricos",
        points: 5,
        kind: "openList",
        promptHtml: `<p>Cita los recursos retóricos que se observan en las siguientes expresiones.</p>`,
        items: [
          { label: "A. ‘Ha llegado la paz’", solution: "<strong>Personificación</strong>." },
          { label: "B. ‘Todos tendrán que arrimar el hombro’", solution: "<strong>Metáfora</strong>." },
        ],
      },
      {
        type: "reading",
        id: "reading-english",
        title: "Texto base · Lengua extranjera (inglés)",
        html: `
          <p><strong>What is ‘fundie baby voice’?</strong></p>
          <p>The concept has appeared in popular culture thanks to a 2023 documentary about some women’s high-pitched baby voice. When activist Jess Piper heard several female politicians speaking in a similar manner during interviews, she created a video explaining the significance of “fundie baby voice.” For Piper, there was no mistaking that sound, which she remembered from her childhood in the Bible Belt. These women were using “fundie baby voice.”</p>
          <p>“I think everyone who was born and raised in evangelical churches knows that fundamentalist — ‘fundie’ — woman sound,” said Piper. “It’s that childlike, sweet, submissive, honey sound typical of Sunday school teachers and pastors’ wives.”</p>
          <p>Kathryn Cunningham, a voice expert from the University of Tennessee, explained: “While the average woman’s voice is higher-pitched than the average man’s due to a combination of anatomical and social factors, some women who speak this way seem to be intentionally placing their voices higher than their natural pitch range in order to convey submission to male authority and childlike innocence.”</p>
          <p>Deliberate voice changes are very much a reality for women in fundamentalist Christian communities, who from a young age are taught over and over again to modulate their voices in order to sound sweet, soft, and childlike. There are very strict gender roles, and women are supposed to never sound angry but keep sweet, obey, dress modestly, speak softly and be very feminine.</p>
          <p>“It is important to remember that women’s voices are always examined carefully,” Cunningham added. “The truth is that we can’t win, no matter how we speak. Because of outdated stereotypes many women are consciously changing the way they speak all the time to achieve the desired effect for the circumstances.”</p>
          <p class='meta'>Texto adaptado de huffpost.com</p>
          <div class="vocab-card">
            <strong>Vocabulario:</strong>
            <ul>
              <li><strong>High-pitched</strong>: agudo/a</li>
              <li><strong>Bible Belt</strong>: región de EEUU donde el cristianismo evangélico tiene un profundo arraigo social</li>
              <li><strong>To convey</strong>: expresar</li>
              <li><strong>Outdated</strong>: obsoleto/a</li>
              <li><strong>To achieve</strong>: obtener / lograr</li>
            </ul>
          </div>
        `,
      },
      {
        type: "question",
        id: "q12",
        number: 12,
        title: "True or false + frase justificativa",
        points: 5,
        kind: "booleanGroupWithJustification",
        includeInSummary: false,
        promptHtml: `<p>Indica si las siguientes afirmaciones son verdaderas (T) o falsas (F) y escribe la frase del texto que justifica tu respuesta.</p>`,
        items: [
          {
            label: "Activist Jess Piper speaks using fundie baby voice.",
            correct: false,
            solution: "“When activist Jess Piper heard several female politicians speaking in a similar manner during interviews, she created a video explaining the significance of ‘fundie baby voice.’ […] These women were using ‘fundie baby voice.’”",
          },
          {
            label: "Fundie baby voice is associated with religion.",
            correct: true,
            solution: "“For Piper, there was no mistaking that sound, which she remembered from her childhood in the Bible Belt.” / “I think everyone who was born and raised in evangelical churches knows […] sound typical of Sunday school teachers and pastors’ wives.”",
          },
          {
            label: "The pitch of women’s voices is usually higher than that of men.",
            correct: true,
            solution: "“While the average woman’s voice is higher-pitched than the average man’s due to a combination of anatomical and social factors…”",
          },
          {
            label: "Changing your voice is part of a woman’s education in some American Christian communities.",
            correct: true,
            solution: "“Deliberate voice changes are very much a reality for women in fundamentalist Christian communities, who from a young age are taught over and over again to modulate their voices …”",
          },
          {
            label: "Kathryn Cunningham thinks society is unfair to women.",
            correct: true,
            solution: "“It is important to remember that women’s voices are always examined carefully,” Cunningham added. “The truth is that we can’t win, no matter how we speak. […]”",
          },
        ],
      },
      {
        type: "question",
        id: "q13",
        number: 13,
        title: "Reading comprehension in English",
        points: 5,
        kind: "multiChoiceGroup",
        pointsPerItem: 1,
        includeInSummary: true,
        promptHtml: `<p>Marca la respuesta que mejor se ajuste a lo expresado en el texto.</p>`,
        noteHtml: `<p class='meta'>Las casillas del solucionario no se extraían bien como texto, así que se revisaron sobre las páginas rasterizadas del PDF oficial.</p>`,
        items: [
          { label: "A. The concept ‘fundie baby voice’…", options: ["was created in a video.", "appeared in 2023.", "is heard by female politicians."], correctIndex: 1 },
          { label: "B. People raised in evangelical churches...", options: ["are familiar with fundie baby voice.", "are typical of Sunday school teachers and pastors’ wives.", "are sweet and submissive."], correctIndex: 0 },
          { label: "C. Women’s voices are higher-pitched than men’s …", options: ["due to biological factors.", "due to submission to male authority.", "due to natural and social reasons."], correctIndex: 2 },
          { label: "D. There are very strict gender roles…", options: ["for women who change their voice deliberately.", "for both men and women working at the University of Tennessee.", "in fundamentalist Christian communities."], correctIndex: 2 },
          { label: "E. Outdated stereotypes…", options: ["are causing women to change the way they speak.", "are achieving the desired effect.", "are making women more conscious."], correctIndex: 0 },
        ],
      },
      {
        type: "question",
        id: "q14",
        number: 14,
        title: "Opinion writing in English",
        points: 10,
        kind: "openText",
        promptHtml: `
          <p>Los estereotipos de género pueden condicionar nuestras vidas en maneras de las que ni siquiera somos conscientes, como por ejemplo nuestra forma de hablar o nuestro tono de voz.</p>
          <p>Escribe un texto en inglés de entre 50 y 70 palabras dando tu opinión sobre el hecho de que las mujeres se sientan en el deber de hablar de manera más dulce o agradable que los hombres. Puedes usar oraciones condicionales y verbos modales (<em>should, shouldn’t, must, mustn’t, don’t have to</em>) para expresar tu opinión.</p>
          <p class='meta'>Expresiones que pueden ayudarte: <em>conform to expectations / gender identity / patriarchy / gender equality</em>.</p>
        `,
        openLabel: "Write your answer here",
        solutionHtml: `<p><strong>Solución oficial:</strong> Respuesta libre.</p>`,
      },
      {
        type: "question",
        id: "q15-24",
        number: "15-24",
        title: "Conocimiento de la lengua extranjera · test",
        points: 20,
        kind: "multiChoiceGroup",
        pointsPerItem: 2,
        includeInSummary: true,
        promptHtml: `<p>Elige en cada caso la opción que consideres más correcta.</p>`,
        noteHtml: `<p class='meta'>Las respuestas se contrastaron con el solucionario rasterizado; además, los ítems son consistentes con la gramática inglesa esperable en cada caso.</p>`,
        items: [
          { label: "15. Our next meeting is…", options: ["Monday.", "the Monday.", "on Monday."], correctIndex: 2 },
          { label: "16. Jim, please, …", options: ["you help me with my homework.", "help me with my homework.", "you will help me with my homework."], correctIndex: 1 },
          { label: "17. Angharad is…", options: ["a very sweet girl.", "a much sweet girl.", "a very much sweet girl."], correctIndex: 0 },
          { label: "18. I’m not sure, but she...", options: ["should be Susan’s cousin.", "may be Susan’s cousin.", "doesn’t have to be Susan’s cousin."], correctIndex: 1 },
          { label: "19. At my high school, we...", options: ["play with bicycles every week.", "do cycling every week.", "go cycling every week."], correctIndex: 2 },
          { label: "20. If you worked more, you … get better results.", options: ["would", "will", "wouldn’t"], correctIndex: 0 },
          { label: "21. What... I can’t hear him.", options: ["does he say?", "do he say?", "is he saying?"], correctIndex: 2 },
          { label: "22. The European Day of Languages was a week…", options: ["last", "ago", "past"], correctIndex: 1 },
          { label: "23. We…", options: ["never have read a book by Shakespeare.", "’ve read never a book by Shakespeare.", "’ve never read a book by Shakespeare."], correctIndex: 2 },
          { label: "24. California is … US state.", options: ["the best", "the most good", "the better"], correctIndex: 0 },
        ],
      },
    ],
  }

  ,"2025-04-ct": {
    id: "2025-04-ct",
    title: "Convocatoria abril 2025 · Ámbito científico-tecnológico",
    subtitle: "Prueba interactiva basada en el modelo oficial, con apoyo visual en los bloques de átomo y nutrición.",
    sourceLinks: [
      {
        label: "Archivo oficial de convocatorias anteriores",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores",
      },
      {
        label: "ZIP oficial abril 2025 (incluye soluciones)",
        url: "https://www.juntadeandalucia.es/educacion/portales/documents/1454565/1625008/Pruebas%20convocatoria%20abril%202025%20%28incluye%20soluciones%29/864b6c80-496c-6291-4aa0-dcea2cdf83e1?version=1.0",
      },
      {
        label: "PDF del examen (copia local)",
        url: "data/exam-packs/2025-04/extracted/Convocatoria%20abril%202025/CT_ESPA_2025.pdf",
      },
      {
        label: "PDF del solucionario (copia local)",
        url: "data/exam-packs/2025-04/extracted/Convocatoria%20abril%202025/CT_ESPA_soluciones_2025.pdf",
      },
      {
        label: "Notas de extracción y apoyo visual",
        url: "content/exams/2025-04-ct-notes.md",
      },
    ],
    introHtml: "<p>Examen oficial de abril de 2025 del ámbito científico-tecnológico. Mantiene la estructura original por bloques y añade apoyo visual en las preguntas de átomo y nutrición.</p><ul><li><strong>A.</strong> Conceptos básicos (15 puntos)</li><li><strong>B.</strong> Comprensión y análisis de un documento escrito (20 puntos)</li><li><strong>C.</strong> Comprensión y análisis de información gráfica (30 puntos)</li><li><strong>D.</strong> Expresión escrita (15 puntos)</li><li><strong>E.</strong> Resolución de un problema (20 puntos)</li></ul><p><strong>Corrección automática:</strong> 20 puntos de ejercicios cerrados (1, 2, 3 y 4). Los otros 80 puntos quedan para comparación manual con la solución oficial.</p>",
    sections: [
      {
        type: "question",
        id: "q1",
        number: 1,
        title: "Salud y nutrición",
        points: 5,
        kind: "multiChoiceGroup",
        includeInSummary: true,
        promptHtml: "<p>Completa las siguientes afirmaciones sobre salud y nutrición eligiendo el término correcto en cada caso.</p>",
        items: [
          { label: "La ___ consiste en obtener...", options: ["nutrición", "alimentación"], correctIndex: 0 },
          { label: "...obtener los ___ que hay...", options: ["alimentos", "nutrientes"], correctIndex: 1 },
          { label: "...que hay en los ___ mediante la digestión...", options: ["alimentos", "nutrientes"], correctIndex: 0 },
          { label: "En una dieta saludable se recomienda consumir más ___", options: ["carne y pescado", "fruta y verdura"], correctIndex: 1 },
          { label: "...que ___", options: ["carne y pescado", "fruta y verdura"], correctIndex: 0 },
        ],
      },
      {
        type: "question",
        id: "q2",
        number: 2,
        title: "Afirmaciones correctas sobre la energía",
        points: 5,
        kind: "booleanGroup",
        includeInSummary: true,
        pointsPerItem: 1,
        promptHtml: "<p>Marca solo las afirmaciones correctas.</p>",
        items: [
          { label: "La energía de la biomasa es una forma de energía química.", correct: true },
          { label: "Andalucía cuenta con importantes parques eólicos y la energía eólica es una de sus principales renovables.", correct: true },
          { label: "El calor fluye espontáneamente desde el cuerpo a menor temperatura hacia el cuerpo a mayor temperatura.", correct: false },
          { label: "La energía no se crea ni se destruye, solo se transforma.", correct: true },
          { label: "La energía que proviene de recursos naturales limitados recibe el nombre de energía renovable.", correct: false },
        ],
      },
      {
        type: "question",
        id: "q3",
        number: 3,
        title: "Condiciones que hacen posible la vida en la Tierra",
        points: 5,
        kind: "booleanGroup",
        includeInSummary: true,
        pointsPerItem: 1,
        promptHtml: "<p>Contesta verdadero [V] o falso [F] a las siguientes afirmaciones.</p>",
        items: [
          { label: "El tamaño y densidad de la Tierra permiten retener una atmósfera vital para la vida.", correct: true },
          { label: "La vida en la Tierra sería posible sin la presencia del campo magnético terrestre.", correct: false },
          { label: "En la Luna se dan las condiciones para albergar vida por estar aproximadamente a la misma distancia del Sol que la Tierra.", correct: false },
          { label: "La distancia al Sol es el único factor que hace posible la vida en la Tierra.", correct: false },
          { label: "Uno de los factores que hace posible la vida en la Tierra es la presencia de bioelementos en la superficie.", correct: true },
        ],
      },
      {
        type: "reading",
        id: "reading-alzheimer",
        title: "Texto base · Un enfoque radicalmente nuevo contra el alzhéimer",
        html: "<p><strong>Un enfoque radicalmente nuevo contra el alzhéimer</strong></p><p>Los científicos acaban de descubrir una forma enteramente novedosa de deshacerse de los agregados de priones, las proteínas causantes de varias enfermedades neurodegenerativas.</p><p>Déjame decirte en primer lugar que este artículo no es un anuncio de un nuevo fármaco milagroso contra el alzhéimer. No existe tal cosa. Los medicamentos aprobados recientemente en Estados Unidos tienen un efecto tan modesto que ni siquiera han merecido la autorización por la Agencia Europea del Medicamento.</p><p>De lo que vamos a tratar aquí es de un enfoque radicalmente nuevo contra el alzhéimer, el párkinson y otras enfermedades neurodegenerativas. De momento no es nada más que ciencia básica, y nada menos que ciencia básica: el verdadero motor del conocimiento sobre la naturaleza, incluida nuestra propia naturaleza.</p><p>¿Tiene algo que ver el alzhéimer con las vacas locas? Oh, sí. La encefalopatía espongiforme bovina, vulgo vacas locas, es una enfermedad priónica. Los priones son los únicos agentes infecciosos que no tienen genes.</p><p>Un prion es una proteína normal de la célula que adopta una forma errónea y puede inducir a otras proteínas normales a plegarse mal. Ese proceso se propaga y forma agregados que dañan o matan células.</p><p>Con las enfermedades neurodegenerativas ocurre algo similar: proteínas como tau, beta-amiloide o alfa-sinucleína pueden plegarse mal, propagarse y formar agregados. Por eso el alzhéimer y el párkinson pueden considerarse enfermedades priónicas, igual que las vacas locas.</p><p>El artículo añade que ciertas células de la microglía construyen nanotúneles que conectan con neuronas dañadas: retiran agregados tóxicos y les transfieren mitocondrias sanas, lo que abre una posible vía terapéutica futura.</p><p class='meta'>Artículo adaptado de <em>elpais.com</em>, 13 de septiembre de 2024.</p>",
      },
      {
        type: "question",
        id: "q4",
        number: 4,
        title: "Verdadero o falso sobre el texto del alzhéimer",
        points: 5,
        kind: "booleanGroup",
        includeInSummary: true,
        pointsPerItem: 1,
        promptHtml: "<p>Basándote en la información del texto, indica si las siguientes afirmaciones son verdaderas [V] o falsas [F].</p>",
        items: [
          { label: "Los priones no son los únicos agentes infecciosos que no tienen genes.", correct: false },
          { label: "Los medicamentos aprobados recientemente en EEUU para el alzhéimer tienen un efecto notable y son altamente efectivos.", correct: false },
          { label: "El párkinson y el alzhéimer se consideran enfermedades priónicas originadas por un mal plegamiento de proteínas.", correct: true },
          { label: "El fármaco lecanemab aprobado por la FDA cura el alzhéimer.", correct: false },
          { label: "Las células microgliales forman nanotúneles que conectan con las neuronas y permiten intercambios beneficiosos.", correct: true },
        ],
      },
      {
        type: "question",
        id: "q5",
        number: 5,
        title: "Relación entre alzhéimer, párkinson y vacas locas",
        points: 5,
        kind: "openText",
        promptHtml: "<p>Según el texto, ¿cuál es la relación entre el alzhéimer, el párkinson y las vacas locas?</p>",
        openLabel: "Resume la relación",
        solutionHtml: "<p>Las tres enfermedades están relacionadas con <strong>priones o proteínas mal plegadas</strong> que inducen a otras proteínas normales a adoptar una forma errónea, propagando así el daño celular y la enfermedad.</p>",
      },
      {
        type: "question",
        id: "q6",
        number: 6,
        title: "Sistema de coordinación del ser humano",
        points: 5,
        kind: "openText",
        promptHtml: "<p>La temática del texto está relacionada con el principal sistema de coordinación del ser humano. Di cuál es y cuáles son sus funciones principales.</p>",
        openLabel: "Tu respuesta",
        solutionHtml: "<p>Se trata del <strong>sistema nervioso</strong>. Sus funciones principales son coordinar y controlar el organismo, percibir estímulos del entorno, procesar la información recibida y emitir o coordinar respuestas motoras, hormonales o emocionales.</p>",
      },
      {
        type: "question",
        id: "q7",
        number: 7,
        title: "Hábitos no saludables que dañan el sistema nervioso",
        points: 5,
        kind: "openText",
        promptHtml: "<p>¿Qué hábitos de vida no saludables pueden afectar gravemente al sistema nervioso y, más concretamente, al correcto funcionamiento del cerebro?</p>",
        openLabel: "Tu respuesta",
        solutionHtml: "<p>El solucionario destaca sobre todo el <strong>consumo de drogas legales o ilegales</strong>, porque alteran la acción de los neurotransmisores, afectan a la conducta, al estado de ánimo y a la percepción, y además pueden generar dependencia física y/o psicológica.</p>",
      },
      {
        type: "reading",
        id: "reading-atomo",
        title: "Apoyo visual · Estructura básica del átomo",
        html: "<p>Usa esta imagen del examen para responder a las cuestiones 8, 9 y 10.</p><figure style='margin:1rem 0;'><img src='content/exams/img/2025-04-ct-page-3.png' alt='Página del examen con la estructura básica de un átomo' style='max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;' /><figcaption style='font-size:.95rem;color:#5c677d;margin-top:.5rem;'>Imagen del examen con la estructura básica de un átomo.</figcaption></figure>",
      },
      {
        type: "question",
        id: "q8",
        number: 8,
        title: "Tabla sobre la estructura del átomo",
        points: 6,
        kind: "openList",
        promptHtml: "<p>Rellena la tabla con ayuda de la información reflejada en el gráfico 1.</p><figure style='margin:1rem 0;'><img src='content/exams/img/2025-04-ct-page-3.png' alt='Página del examen con la estructura básica de un átomo' style='max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;' /></figure>",
        items: [
          { label: "Núcleo · partícula 1", solution: "<strong>protones</strong>" },
          { label: "Núcleo · carga 1", solution: "<strong>positiva</strong>" },
          { label: "Núcleo · partícula 2", solution: "<strong>neutrones</strong>" },
          { label: "Núcleo · carga 2", solution: "<strong>neutra</strong>" },
          { label: "Corteza · partícula", solution: "<strong>electrones</strong>" },
          { label: "Corteza · carga", solution: "<strong>negativa</strong>" },
        ],
      },
      {
        type: "question",
        id: "q9",
        number: 9,
        title: "Carga total del átomo",
        points: 4,
        kind: "openText",
        promptHtml: "<p>¿Qué carga total tiene el átomo? Razona tu respuesta.</p><figure style='margin:1rem 0;'><img src='content/exams/img/2025-04-ct-page-3.png' alt='Página del examen con la estructura básica de un átomo' style='max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;' /></figure>",
        openLabel: "Tu razonamiento",
        solutionHtml: "<p>La carga total del átomo es <strong>neutra</strong>, porque tiene el mismo número de protones que de electrones.</p>",
      },
      {
        type: "question",
        id: "q10",
        number: 10,
        title: "Número atómico y número másico",
        points: 5,
        kind: "openList",
        promptHtml: "<p>Indica el número atómico y el número másico del átomo representado.</p><figure style='margin:1rem 0;'><img src='content/exams/img/2025-04-ct-page-3.png' alt='Página del examen con la estructura básica de un átomo' style='max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;' /></figure>",
        items: [
          { label: "Número atómico", solution: "<strong>2</strong>, porque tiene 2 protones." },
          { label: "Número másico", solution: "<strong>4</strong>, porque suma 2 protones y 2 neutrones." },
        ],
      },
      {
        type: "reading",
        id: "reading-nutricion",
        title: "Apoyo visual · Aparatos que intervienen en la nutrición",
        html: "<p>Usa esta imagen del examen para responder a las cuestiones 11, 12 y 13.</p><figure style='margin:1rem 0;'><img src='content/exams/img/2025-04-ct-page-4.png' alt='Página del examen con los aparatos que intervienen en la nutrición' style='max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;' /><figcaption style='font-size:.95rem;color:#5c677d;margin-top:.5rem;'>Imagen del examen con los aparatos que intervienen en la nutrición.</figcaption></figure>",
      },
      {
        type: "question",
        id: "q11",
        number: 11,
        title: "Nombre y función de cada aparato",
        points: 4,
        kind: "openList",
        promptHtml: "<p>Completa el cuadro con el nombre de cada aparato de la ilustración y su función en el proceso de nutrición.</p><figure style='margin:1rem 0;'><img src='content/exams/img/2025-04-ct-page-4.png' alt='Página del examen con los aparatos que intervienen en la nutrición' style='max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;' /></figure>",
        items: [
          { label: "Aparato 1", solution: "<strong>Digestivo</strong>: transforma los alimentos en sustancias más simples para que sus nutrientes puedan ser absorbidos." },
          { label: "Aparato 2", solution: "<strong>Respiratorio</strong>: obtiene oxígeno del aire y expulsa dióxido de carbono." },
          { label: "Aparato 3", solution: "<strong>Circulatorio</strong>: transporta nutrientes y oxígeno a las células y recoge sustancias de desecho." },
          { label: "Aparato 4", solution: "<strong>Excretor</strong>: elimina del organismo las sustancias de desecho procedentes de la actividad celular." },
        ],
      },
      {
        type: "question",
        id: "q12",
        number: 12,
        title: "Relación entre afirmaciones y aparatos",
        points: 5,
        kind: "openList",
        promptHtml: "<p>Indica con cuál de los cuatro aparatos están relacionadas las siguientes afirmaciones.</p><figure style='margin:1rem 0;'><img src='content/exams/img/2025-04-ct-page-4.png' alt='Página del examen con los aparatos que intervienen en la nutrición' style='max-width:100%;height:auto;border:1px solid #d8dee9;border-radius:12px;' /></figure>",
        items: [
          { label: "A. El intercambio gaseoso se produce en los alveolos", solution: "<strong>aparato respiratorio</strong>" },
          { label: "B. El corazón bombea la sangre con sístole y diástole", solution: "<strong>aparato circulatorio</strong>" },
          { label: "C. La corteza con nefronas filtra la sangre y forma la orina", solution: "<strong>aparato excretor</strong>" },
          { label: "D. El hígado y el páncreas forman parte de este aparato", solution: "<strong>aparato digestivo</strong>" },
          { label: "E. El quimo pasa al intestino delgado y en el duodeno se transforma en quilo", solution: "<strong>aparato digestivo</strong>" },
        ],
      },
      {
        type: "question",
        id: "q13",
        number: 13,
        title: "Enfermedades y aparato relacionado",
        points: 6,
        kind: "openList",
        promptHtml: "<p>Completa el cuadro indicando con qué aparato está relacionada cada enfermedad.</p>",
        items: [
          { label: "A. Arteriosclerosis", solution: "<strong>circulatorio</strong>" },
          { label: "B. Hepatitis", solution: "<strong>digestivo</strong>" },
          { label: "C. Varices", solution: "<strong>circulatorio</strong>" },
          { label: "D. Cálculos biliares", solution: "<strong>digestivo</strong>" },
          { label: "E. Nefritis", solution: "<strong>excretor</strong>" },
          { label: "F. Infarto de miocardio", solution: "<strong>circulatorio</strong>" },
          { label: "G. Cólico nefrítico", solution: "<strong>excretor</strong>" },
          { label: "H. Asma", solution: "<strong>respiratorio</strong>" },
          { label: "I. Cistitis", solution: "<strong>excretor</strong>" },
          { label: "J. Enfisema pulmonar", solution: "<strong>respiratorio</strong>" },
          { label: "K. Peritonitis", solution: "<strong>digestivo</strong>" },
          { label: "L. Apendicitis", solution: "<strong>digestivo</strong>" },
        ],
      },
      {
        type: "question",
        id: "q14",
        number: 14,
        title: "Texto sobre e-learning o teleformación",
        points: 15,
        kind: "openText",
        promptHtml: "<p>Redacta un texto de un mínimo de 150 palabras donde hables de qué es el <em>e-learning</em> o teleformación y de las ventajas e inconvenientes de este tipo de formación.</p><ul><li>Qué es el e-learning y cuáles son sus características principales.</li><li>Qué ventajas e inconvenientes encuentras en este tipo de formación.</li></ul>",
        openLabel: "Tu redacción",
        noteHtml: "<p>Se valora la presentación, la ortografía, la estructura y la coherencia del texto.</p>",
        solutionHtml: "<p>La solución oficial define el <strong>e-learning</strong> como una enseñanza no presencial realizada mediante plataformas digitales e internet. Destaca su flexibilidad, el acceso desde cualquier lugar y el uso de recursos interactivos.</p><p>Como ventajas, subraya la comodidad, el ahorro de desplazamientos, la autonomía y el acceso a más cursos. Como inconvenientes, señala la falta de contacto directo, la necesidad de autodisciplina y motivación, y los posibles problemas técnicos o de conexión.</p>",
      },
      {
        type: "question",
        id: "q15",
        number: 15,
        title: "Volumen de la piscina en metros cúbicos",
        points: 10,
        kind: "openText",
        promptHtml: "<p>Quieres llenar una piscina circular de 5 metros de diámetro y 1,20 metros de altura. ¿Qué volumen de agua en metros cúbicos necesita tu piscina?</p>",
        openLabel: "Desarrolla el cálculo",
        solutionHtml: "<p>Como la piscina es un cilindro, su volumen es <code>V = πr²h</code>.</p><p>Con radio <code>r = 2,5 m</code> y altura <code>h = 1,20 m</code>:</p><p><code>V = π · 2,5² · 1,20 = 23,55 m³</code></p><p>La piscina necesita <strong>23,55 m³</strong> de agua.</p>",
      },
      {
        type: "question",
        id: "q16",
        number: 16,
        title: "Volumen de la piscina en litros",
        points: 5,
        kind: "openText",
        promptHtml: "<p>¿Cuál es el volumen en litros de la piscina sabiendo que 1 litro equivale a 1 decímetro cúbico?</p>",
        openLabel: "Escribe la conversión",
        solutionHtml: "<p>Si la piscina tiene <strong>23,55 m³</strong>, eso equivale a <strong>23.550 dm³</strong>, es decir, <strong>23.550 litros</strong>.</p>",
      },
      {
        type: "question",
        id: "q17",
        number: 17,
        title: "Coste de llenar la piscina",
        points: 5,
        kind: "openText",
        promptHtml: "<p>La empresa cobra 180 € por cada cuba de 10.000 litros de agua, de forma proporcional. ¿Cuánto te cuesta llenar la piscina?</p>",
        openLabel: "Haz la regla de tres o el cálculo equivalente",
        solutionHtml: "<p>Si 10.000 litros cuestan 180 €, entonces 23.550 litros cuestan:</p><p><code>(23.550 · 180) / 10.000 = 423,90 €</code></p><p>Llenar la piscina cuesta <strong>423,90 €</strong>.</p>",
      },
    ],
  }

};
