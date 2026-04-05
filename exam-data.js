window.examCatalog = [
  {
    id: "2024-04-com-in",
    label: "Abril 2024 · Ámbito de comunicación (inglés)",
    totalPoints: 100,
    autoPoints: 40,
    manualPoints: 60,
    status: "Piloto verificado",
  },
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
};
