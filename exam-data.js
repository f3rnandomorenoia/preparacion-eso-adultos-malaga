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
          <p class="meta">Francesc Miralles, elpais.com, 12/10/2023 (texto adaptado)</p>
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
          <p class="meta">Recuerda: en la puntuación se tendrán en cuenta, de forma proporcional, la expresión, la presentación, la ortografía, la estructura y la cohesión del texto.</p>
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
            <p class="meta">Que estás en la tierra (1962), Gloria Fuertes</p>
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
          <p class="meta">Texto adaptado de www.deseret.com</p>
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
        noteHtml: `<p class="meta">Nota: en el PDF de soluciones la marca visible de estas casillas no aparece al extraer el texto; por eso se confirmaron visualmente a partir del propio PDF rasterizado, además de comprobarse contra el texto oficial.</p>`,
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
          <p class="meta">Puedes usar <em>can</em>, <em>mustn’t</em>, <em>should</em> y oraciones condicionales. Expresiones sugeridas: <em>YouTube channel / exploitation / views / show sympathy</em>.</p>
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
        noteHtml: `<p class="meta">Igual que en el ejercicio 13, estas respuestas se confirmaron visualmente a partir del PDF de soluciones rasterizado, porque el texto extraído no muestra la casilla marcada.</p>`,
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
          <p class="meta">Texto adaptado extraído de vera.es</p>
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
          <p class="meta">Redacta un texto de al menos 200 palabras en el que expreses tu punto de vista sobre el tema, argumentándolo de forma adecuada. En la puntuación se tendrán en cuenta, de forma proporcional, la expresión, la presentación, la ortografía, la estructura y la cohesión del texto.</p>
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
        noteHtml: `<p class="meta">Nota: en esta versión web, los sintagmas que iban subrayados en el PDF aparecen resaltados dentro de cada oración.</p>`,
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
            <p class="meta"><em>Soledades, galerías y otros poemas</em>, Antonio Machado</p>
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
          <p class="meta">Texto adaptado de bbc.co.uk/learningenglish</p>
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
        noteHtml: `<p class="meta">Nota: estas respuestas quedaron confirmadas visualmente al revisar las casillas marcadas en el solucionario rasterizado.</p>`,
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
          <p class="meta">Expresiones que pueden ayudarte: <em>heart disease / intake / nutrition / to follow a healthy diet</em>.</p>
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
        noteHtml: `<p class="meta">Igual que en el ejercicio 13, estas respuestas quedaron confirmadas visualmente al revisar las casillas marcadas en el solucionario rasterizado.</p>`,
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
};
