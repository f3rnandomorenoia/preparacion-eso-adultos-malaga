const facts = [
  {
    title: "Quién puede presentarse",
    text: "Personas mayores de 18 años o que cumplan esa edad dentro del año natural de la convocatoria.",
    sourceLabel: "Junta · Exámenes libres",
    source: "https://www.juntadeandalucia.es/temas/estudiar/adultos/examenes-libres.html",
  },
  {
    title: "Cómo se organiza",
    text: "La ESO para personas adultas en Andalucía se agrupa por ámbitos: comunicación, científico-tecnológico y social.",
    sourceLabel: "Junta · ESO personas adultas",
    source: "https://www.juntadeandalucia.es/educacion/portals/es/web/ced/educacion-permanente-eso",
  },
  {
    title: "Modalidades",
    text: "Se puede cursar en modalidad presencial, semipresencial o a distancia. Para la prueba libre, lo importante es usar los materiales oficiales y practicar modelos.",
    sourceLabel: "Junta · Modalidades",
    source: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/eso/modalidades",
  },
  {
    title: "Qué título se obtiene",
    text: "Si se supera la prueba, se obtiene el título de Graduado en ESO y se abren vías para Bachillerato, FP o acceso laboral.",
    sourceLabel: "Junta · Obtención del Graduado en ESO",
    source: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso",
  },
  {
    title: "Ámbitos ya superados",
    text: "Si ya tienes ámbitos aprobados o equivalencias reconocidas, no siempre tendrás que repetirlos. Antes de estudiar de cero, conviene comprobarlo.",
    sourceLabel: "Junta · FAQ oficial",
    source: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/preguntas-frecuentes",
  },
  {
    title: "Importante para preparar bien",
    text: "La propia FAQ oficial recuerda que para la prueba hay que prepararse los contenidos de Nivel I y Nivel II.",
    sourceLabel: "Junta · FAQ oficial",
    source: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/preguntas-frecuentes",
  },
];

const calendar = [
  {
    date: "03 feb → 17 feb 2026",
    title: "Inscripción convocatoria de abril",
    note: "Ventana de solicitud para la primera convocatoria de 2026.",
  },
  {
    date: "11 abril 2026",
    title: "Examen convocatoria de abril",
    note: "Fecha de realización de la prueba en la primera convocatoria.",
  },
  {
    date: "13 abril → 04 mayo 2026",
    title: "Inscripción convocatoria de junio",
    note: "Segunda oportunidad de inscripción para 2026.",
  },
  {
    date: "20 junio 2026",
    title: "Examen convocatoria de junio",
    note: "Fecha de realización de la prueba en la segunda convocatoria.",
  },
];

const ambitos = [
  {
    title: "Ámbito de comunicación",
    badge: "Lengua + idioma extranjero",
    description:
      "Aquí se trabaja sobre todo comprensión lectora, expresión escrita, gramática, ortografía y la lengua extranjera del ámbito. Para preparar bien la prueba conviene apoyarse en los materiales oficiales de Lengua y de Inglés; en Nivel I la Junta también ofrece Francés.",
    focus: [
      "Redacción y comprensión de textos.",
      "Ortografía, gramática y uso correcto del léxico.",
      "Expresión clara y coherente: la corrección escrita cuenta en la nota.",
      "Práctica de inglés básico/funcional si esa es la opción de preparación.",
    ],
    materials: [
      {
        label: "Nivel I · Comunicación Lengua",
        url: "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=1&materia=2#space",
        meta: "Material oficial Junta",
      },
      {
        label: "Nivel I · Comunicación Inglés",
        url: "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=1&materia=4#space",
        meta: "Material oficial Junta",
      },
      {
        label: "Nivel I · Comunicación Francés",
        url: "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=1&materia=3#space",
        meta: "Material oficial Junta · útil si el centro trabaja esa opción",
      },
      {
        label: "Nivel II LOMLOE · Comunicación Lengua",
        url: "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=2&materia=349#space",
        meta: "Material oficial Junta",
      },
      {
        label: "Nivel II LOMLOE · Comunicación Inglés",
        url: "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=2&materia=350#space",
        meta: "Material oficial Junta",
      },
    ],
    exams: [
      {
        label: "Archivo oficial de modelos de convocatorias anteriores",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores",
        meta: "Busca dentro del archivo los modelos del ámbito de comunicación",
      },
      {
        label: "Exámenes resueltos y práctica adicional",
        url: "https://www.educaciongratuita.es/examenes/pruebas-libres-titulo-graduado-eso/examenes-resueltos-pruebas-libres-eso.php",
        meta: "Recurso complementario",
      },
    ],
  },
  {
    title: "Ámbito científico-tecnológico",
    badge: "Matemáticas + ciencias + tecnología",
    description:
      "Es el bloque donde más suele ayudar practicar problemas y ejercicios. Aquí entran contenidos matemáticos y científicos, con enfoque aplicado y de resolución paso a paso.",
    focus: [
      "Cálculo, proporciones, porcentajes y problemas cotidianos.",
      "Geometría básica, lectura de datos y razonamiento lógico.",
      "Ciencias naturales y tecnología en un nivel práctico.",
      "Entrenamiento constante con ejercicios parecidos a examen.",
    ],
    materials: [
      {
        label: "Nivel I · Científico-Tecnológico",
        url: "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=1&materia=1#space",
        meta: "Material oficial Junta",
      },
      {
        label: "Nivel II LOMLOE · Científico-Tecnológico",
        url: "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=2&materia=347#space",
        meta: "Material oficial Junta",
      },
      {
        label: "Portal oficial de recursos ESO adultos",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/eso/recursos",
        meta: "Punto de entrada a materiales de todos los niveles",
      },
    ],
    exams: [
      {
        label: "Archivo oficial de modelos de convocatorias anteriores",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores",
        meta: "Consulta los modelos del ámbito científico-tecnológico",
      },
      {
        label: "Colección adicional de pruebas para practicar",
        url: "https://www.muchosexamenes.com/examenes/pruebas-libres-para-la-obtencion-del-titulo-de-graduado-en-eso-para-adultos/",
        meta: "Recurso complementario",
      },
    ],
  },
  {
    title: "Ámbito social",
    badge: "Geografía, historia y ciudadanía",
    description:
      "El ámbito social suele mezclar comprensión de procesos históricos, geografía, organización social y lectura de información. Ayuda mucho resumir temas y practicar preguntas cortas y desarrollo breve.",
    focus: [
      "Historia y geografía en un nivel claro y práctico.",
      "Organización política y social básica.",
      "Lectura de mapas, gráficos y textos breves.",
      "Preparar esquemas y repasos muy visuales.",
    ],
    materials: [
      {
        label: "Nivel I · Ámbito Social",
        url: "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=1&materia=5#space",
        meta: "Material oficial Junta",
      },
      {
        label: "Nivel II LOMLOE · Ámbito Social",
        url: "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=2&materia=348#space",
        meta: "Material oficial Junta",
      },
      {
        label: "Información general de la prueba y normativa",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/normativa",
        meta: "Para revisar el marco oficial",
      },
    ],
    exams: [
      {
        label: "Archivo oficial de modelos de convocatorias anteriores",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores",
        meta: "Consulta los modelos del ámbito social",
      },
      {
        label: "Exámenes y recopilaciones complementarias",
        url: "https://www.educaciongratuita.es/examenes/pruebas-libres-titulo-graduado-eso/examenes-resueltos-pruebas-libres-eso.php",
        meta: "Recurso complementario",
      },
    ],
  },
];

const steps = [
  "Mirar primero la estructura oficial, la FAQ y el calendario para saber exactamente a qué se presenta y si hay ámbitos exentos.",
  "Descargar los materiales oficiales de Nivel I y Nivel II de los tres ámbitos. La prueba exige preparación completa, no solo la parte final.",
  "Empezar por el ámbito más flojo y reservar práctica semanal fija para científico-tecnológico y redacción/comprensión en comunicación.",
  "Usar los modelos de convocatorias anteriores como simulacros reales: primero a mano, luego con tiempo controlado.",
  "En Málaga, revisar además la información del IPEP Málaga por si interesa apoyo, matrícula o resolver dudas con un centro de adultos.",
  "Antes de la inscripción, comprobar de nuevo plazos, sede, documentación y posibles reconocimientos en la web oficial de la Junta.",
];

const examCards = [
  {
    title: "Archivo oficial de la Junta",
    text: "Es la referencia más importante para practicar. La FAQ oficial indica que hay pruebas publicadas desde la convocatoria de abril de 2009; la página de modelos enlaza las convocatorias anteriores y aclara que los modelos 2019-2024 corresponden al currículo LOMCE.",
    links: [
      {
        label: "Modelos de convocatorias anteriores",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores",
      },
      {
        label: "FAQ oficial",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/preguntas-frecuentes",
      },
    ],
  },
  {
    title: "Dónde ver la estructura real",
    text: "Antes de hacer tests al azar, conviene entender el formato, la corrección y la lógica del examen. La Junta centraliza esa información en la página oficial de la prueba.",
    links: [
      {
        label: "Información general de la prueba",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso",
      },
      {
        label: "Calendario oficial",
        url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/calendario",
      },
    ],
  },
  {
    title: "Recursos complementarios para machacar práctica",
    text: "No sustituyen la fuente oficial, pero vienen bien para tener más ejercicios resueltos, recopilar modelos y entrenar sin quedarse corta de material.",
    links: [
      {
        label: "EducacionGratuita · exámenes resueltos",
        url: "https://www.educaciongratuita.es/examenes/pruebas-libres-titulo-graduado-eso/examenes-resueltos-pruebas-libres-eso.php",
      },
      {
        label: "MuchosExamenes · recopilación",
        url: "https://www.muchosexamenes.com/examenes/pruebas-libres-para-la-obtencion-del-titulo-de-graduado-en-eso-para-adultos/",
      },
    ],
  },
];

const malaga = [
  {
    title: "IPEP Málaga · información ESPA",
    text: "Referencia local útil si queréis resolver dudas, valorar apoyo por centro o consultar la oferta de adultos en Málaga. También recuerda dos cambios prácticos del curso 2024-25: 8 convocatorias por ámbito y convocatoria extraordinaria de septiembre.",
    url: "https://www.ipepmalaga.es/informacion-espa/",
    label: "Abrir IPEP Málaga",
  },
  {
    title: "Secretaría Virtual de la Junta",
    text: "Para la solicitud telemática cuando se abra el plazo. Si toca hacerlo online, este es el punto serio a guardar.",
    url: "https://www.juntadeandalucia.es/educacion/secretariavirtual/solicitudes/",
    label: "Abrir Secretaría Virtual",
  },
  {
    title: "Normativa + convocatoria",
    text: "Aquí están la orden reguladora, la resolución de convocatoria y el resto del marco oficial que conviene revisar si surge cualquier duda administrativa.",
    url: "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/normativa",
    label: "Abrir normativa oficial",
  },
];

const sourceGroups = [
  {
    title: "Fuentes oficiales Junta de Andalucía",
    items: [
      ["Educación para adultos y mayores", "https://www.juntadeandalucia.es/temas/estudiar/adultos.html"],
      ["ESO para personas adultas", "https://www.juntadeandalucia.es/educacion/portals/es/web/ced/educacion-permanente-eso"],
      ["Modalidades", "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/eso/modalidades"],
      ["Recursos oficiales ESO adultos", "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/eso/recursos"],
      ["Obtención del Graduado en ESO", "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso"],
      ["Calendario oficial", "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/calendario"],
      ["Preguntas frecuentes", "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/preguntas-frecuentes"],
      ["Modelos de convocatorias anteriores", "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores"],
    ],
  },
  {
    title: "Materiales oficiales por nivel",
    items: [
      ["Nivel I · índice de materiales", "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=1"],
      ["Nivel II · índice de materiales", "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=2"],
      ["Nivel II LOMLOE · Comunicación Lengua", "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=2&materia=349#space"],
      ["Nivel II LOMLOE · Comunicación Inglés", "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=2&materia=350#space"],
      ["Nivel II LOMLOE · Científico-Tecnológico", "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=2&materia=347#space"],
      ["Nivel II LOMLOE · Social", "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?etapa=2&materia=348#space"],
    ],
  },
  {
    title: "Málaga y trámites",
    items: [
      ["IPEP Málaga · información ESPA", "https://www.ipepmalaga.es/informacion-espa/"],
      ["Secretaría Virtual · solicitudes", "https://www.juntadeandalucia.es/educacion/secretariavirtual/solicitudes/"],
      ["Exámenes libres · resumen Junta", "https://www.juntadeandalucia.es/temas/estudiar/adultos/examenes-libres.html"],
    ],
  },
  {
    title: "Recursos complementarios",
    items: [
      ["EducacionGratuita · exámenes resueltos ESO adultos", "https://www.educaciongratuita.es/examenes/pruebas-libres-titulo-graduado-eso/examenes-resueltos-pruebas-libres-eso.php"],
      ["MuchosExamenes · pruebas libres ESO adultos", "https://www.muchosexamenes.com/examenes/pruebas-libres-para-la-obtencion-del-titulo-de-graduado-en-eso-para-adultos/"],
    ],
  },
];

function cardHTML(item) {
  return `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <a class="meta" href="${item.source}" target="_blank" rel="noreferrer">${item.sourceLabel} ↗</a>
    </article>
  `;
}

function dateHTML(item) {
  return `
    <article class="date-card">
      <time>${item.date}</time>
      <h4>${item.title}</h4>
      <p class="meta">${item.note}</p>
    </article>
  `;
}

function linkListHTML(items) {
  return `
    <ul class="link-list">
      ${items
        .map(
          (item) => `
            <li>
              <a href="${item.url}" target="_blank" rel="noreferrer">${item.label} ↗</a>
              ${item.meta ? `<small>${item.meta}</small>` : ""}
            </li>
          `,
        )
        .join("")}
    </ul>
  `;
}

function ambitoHTML(ambito) {
  return `
    <article class="ambito">
      <div class="ambito__header">
        <div>
          <h3>${ambito.title}</h3>
          <p>${ambito.description}</p>
        </div>
        <span class="ambito__badge">${ambito.badge}</span>
      </div>
      <div class="ambito__columns">
        <div>
          <h4>Qué conviene trabajar</h4>
          <ul class="ambito__list">
            ${ambito.focus.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h4>Materiales oficiales</h4>
          ${linkListHTML(ambito.materials)}
          <h4>Exámenes y práctica</h4>
          ${linkListHTML(ambito.exams)}
        </div>
      </div>
    </article>
  `;
}

function examHTML(item) {
  return `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      ${linkListHTML(item.links)}
    </article>
  `;
}

function malagaHTML(item) {
  return `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <a class="button button--ghost" href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>
    </article>
  `;
}

function sourceGroupHTML(group) {
  return `
    <article class="source-card">
      <h3>${group.title}</h3>
      <ul class="link-list">
        ${group.items
          .map(
            ([label, url]) => `
              <li>
                <a href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>
              </li>
            `,
          )
          .join("")}
      </ul>
    </article>
  `;
}

let currentExam = null;

function getAllQuestions(exam) {
  return exam.sections.filter((section) => section.type === "question");
}

function sourceLinksHTML(links = []) {
  return links
    .map(
      (link) =>
        `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label} ↗</a>`,
    )
    .join("");
}

function buildExamUrl(examId) {
  return `examen.html?exam=${encodeURIComponent(examId)}`;
}

function renderExamIndex() {
  const host = document.getElementById("exam-index");
  const catalog = window.examCatalog || [];

  if (!host || !catalog.length) {
    return;
  }

  host.innerHTML = catalog
    .map((item) => {
      const exam = window.examData?.[item.id];
      return `
        <article class="exam-index-card">
          <div>
            <span class="pill">${item.status || "Examen online"}</span>
            <h3>${item.label}</h3>
            <p>${exam?.subtitle || "Examen online con corrección por ejercicio y fuentes oficiales."}</p>
          </div>
          <div class="exam-index-card__meta">
            <span class="exam-index-chip">${item.totalPoints} puntos</span>
            <span class="exam-index-chip">Auto: ${item.autoPoints}</span>
            <span class="exam-index-chip">Manual: ${item.manualPoints}</span>
          </div>
          <div class="exam-actions">
            <a class="button button--primary" href="${buildExamUrl(item.id)}">Abrir examen aparte</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderExamSelector() {
  const host = document.getElementById("exam-selector");
  const catalog = window.examCatalog || [];

  if (!host || !catalog.length) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const forcedExamId = params.get("exam");
  const selectedId = forcedExamId && catalog.some((item) => item.id === forcedExamId) ? forcedExamId : catalog[0].id;
  const selectedExam = catalog.find((item) => item.id === selectedId);

  if (forcedExamId && selectedExam) {
    host.innerHTML = `
      <div class="exam-selector__card exam-selector__card--simple">
        <h3>${selectedExam.label}</h3>
        <p><strong>Cómo usarlo:</strong></p>
        <ul class="checklist checklist--compact">
          <li>Lee el texto o pregunta.</li>
          <li>Marca una respuesta o escribe la tuya.</li>
          <li>Pulsa <strong>Corregir este ejercicio</strong>.</li>
        </ul>
        <div class="exam-actions">
          <a class="button button--ghost" href="./#examenes-online">Volver al índice</a>
        </div>
      </div>
    `;

    loadExam(selectedId);
    return;
  }

  host.innerHTML = `
    <div class="exam-selector__card">
      <h3>Elegir examen</h3>
      <p class="meta">Elige un examen y pulsa el botón para verlo.</p>
      <div class="exam-selector__controls">
        <select id="exam-select">
          ${catalog
            .map(
              (exam) =>
                `<option value="${exam.id}" ${exam.id === selectedId ? "selected" : ""}>${exam.label}</option>`,
            )
            .join("")}
        </select>
        <button class="button button--primary" id="exam-load-button" type="button">Ver examen</button>
        <a class="button button--ghost" href="./#examenes-online">Volver al índice</a>
      </div>
    </div>
  `;

  const select = document.getElementById("exam-select");
  const button = document.getElementById("exam-load-button");

  const loadSelected = () => {
    const examId = select.value;
    const url = new URL(window.location.href);
    url.searchParams.set("exam", examId);
    window.history.replaceState({}, "", url);
    loadExam(examId);
  };

  button.addEventListener("click", loadSelected);
  select.addEventListener("change", loadSelected);
  loadSelected();
}

function renderReading(section) {
  return `
    <article class="exam-reading">
      <h3>${section.title}</h3>
      ${section.html}
    </article>
  `;
}

function renderQuestion(question) {
  const header = `
    <div class="exam-question__header">
      <div>
        <h3>Ejercicio ${question.number} · ${question.title}</h3>
      </div>
      <span class="exam-question__points">${question.points} puntos</span>
    </div>
  `;

  const note = question.noteHtml ? `<div class="exam-inline-note">${question.noteHtml}</div>` : "";

  let body = "";

  if (question.kind === "mcqSingleWithOpen") {
    body = `
      <div class="exam-group">
        <div class="exam-options">
          ${question.options
            .map(
              (option, index) => `
                <div class="exam-option">
                  <label>
                    <input type="radio" name="${question.id}__choice" value="${index}" />
                    <span>${option}</span>
                  </label>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="exam-fields">
          <label for="${question.id}__open">${question.openLabel || "Tu respuesta"}</label>
          <textarea id="${question.id}__open"></textarea>
        </div>
      </div>
    `;
  }

  if (question.kind === "openText") {
    body = `
      <div class="exam-fields">
        <label for="${question.id}__text">${question.openLabel || "Tu respuesta"}</label>
        <textarea id="${question.id}__text"></textarea>
      </div>
    `;
  }

  if (question.kind === "openList") {
    body = `
      <div class="exam-subitems">
        ${question.items
          .map(
            (item, index) => `
              <div class="exam-subitem">
                <label for="${question.id}__${index}">${item.label}</label>
                <textarea id="${question.id}__${index}"></textarea>
              </div>
            `,
          )
          .join("")}
      </div>
    `;
  }

  if (question.kind === "booleanGroup" || question.kind === "booleanGroupWithJustification") {
    body = `
      <div class="exam-subitems">
        ${question.items
          .map(
            (item, index) => `
              <div class="exam-bool-row">
                <p><strong>${String.fromCharCode(65 + index)}.</strong> ${item.label}</p>
                <div class="exam-bool-controls">
                  <label><input type="radio" name="${question.id}__${index}" value="true" /> V</label>
                  <label><input type="radio" name="${question.id}__${index}" value="false" /> F</label>
                </div>
                ${
                  question.kind === "booleanGroupWithJustification"
                    ? `<label for="${question.id}__justification_${index}">Tu frase justificativa</label><textarea id="${question.id}__justification_${index}"></textarea>`
                    : ""
                }
              </div>
            `,
          )
          .join("")}
      </div>
    `;
  }

  if (question.kind === "multiChoiceGroup") {
    body = `
      <div class="exam-subitems">
        ${question.items
          .map(
            (item, index) => `
              <div class="exam-subitem">
                <p><strong>${item.label}</strong></p>
                <div class="exam-options">
                  ${item.options
                    .map(
                      (option, optionIndex) => `
                        <div class="exam-option">
                          <label>
                            <input type="radio" name="${question.id}__${index}" value="${optionIndex}" />
                            <span>${option}</span>
                          </label>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    `;
  }

  return `
    <article class="exam-question" id="${question.id}" data-question-id="${question.id}" data-kind="${question.kind}">
      ${header}
      ${question.promptHtml}
      ${note}
      ${body}
      <div class="exam-actions">
        <button class="button button--ghost exam-correct-button" type="button" data-question-id="${question.id}">Corregir este ejercicio</button>
      </div>
      <div class="exam-result" id="result-${question.id}" hidden></div>
    </article>
  `;
}

function renderExamSection(section) {
  if (section.type === "reading") {
    return renderReading(section);
  }

  return renderQuestion(section);
}

function renderExamMeta(exam) {
  const metaHost = document.getElementById("exam-meta");

  if (!metaHost) {
    return;
  }

  const catalogItem = (window.examCatalog || []).find((item) => item.id === exam.id);

  metaHost.innerHTML = `
    <div class="exam-meta__card exam-meta__card--simple">
      <span class="pill">${catalogItem?.status || "Examen online"}</span>
      <h3>${exam.title}</h3>
      <p class="meta">Puntuación automática: ${catalogItem?.autoPoints ?? "—"} puntos · Comparación manual: ${catalogItem?.manualPoints ?? "—"} puntos.</p>
      <details>
        <summary>Ver fuentes y notas</summary>
        <div class="exam-meta__sources">${sourceLinksHTML(exam.sourceLinks)}</div>
      </details>
    </div>
  `;
}

function bindExamButtons(exam) {
  document.querySelectorAll(".exam-correct-button").forEach((button) => {
    button.addEventListener("click", () => {
      const questionId = button.dataset.questionId;
      const question = getAllQuestions(exam).find((item) => item.id === questionId);
      const article = document.getElementById(questionId);
      const result = document.getElementById(`result-${questionId}`);

      if (!question || !article || !result) {
        return;
      }

      result.hidden = false;
      result.innerHTML = gradeQuestion(question, article);
      updateExamSummary();
    });
  });

  const finalButton = document.getElementById("exam-final-button");
  if (finalButton) {
    finalButton.addEventListener("click", updateExamSummary);
  }
}

function gradeQuestion(question, article) {
  if (question.kind === "mcqSingleWithOpen") {
    const selected = article.querySelector(`input[name="${question.id}__choice"]:checked`);
    const isCorrect = selected && Number(selected.value) === question.correctIndex;
    return `
      <p class="exam-feedback ${
        !selected ? "exam-feedback--warn" : isCorrect ? "exam-feedback--ok" : "exam-feedback--bad"
      }">
        ${
          !selected
            ? "No has marcado ninguna opción."
            : isCorrect
              ? "La opción marcada es correcta."
              : "La opción marcada no es correcta."
        }
      </p>
      ${question.solutionHtml}
    `;
  }

  if (question.kind === "openText") {
    return question.solutionHtml;
  }

  if (question.kind === "openList") {
    return `
      <p class="exam-feedback exam-feedback--warn">Este ejercicio es de comparación manual: te muestro la solución oficial.</p>
      <ul>
        ${question.items.map((item) => `<li><strong>${item.label}</strong> ${item.solution}</li>`).join("")}
      </ul>
    `;
  }

  if (question.kind === "booleanGroup" || question.kind === "booleanGroupWithJustification") {
    const rows = question.items
      .map((item, index) => {
        const selected = article.querySelector(`input[name="${question.id}__${index}"]:checked`);
        const value = selected ? selected.value === "true" : null;
        const isCorrect = value === item.correct;
        return `
          <li>
            <strong>${String.fromCharCode(65 + index)}.</strong> ${item.label}<br />
            <span class="${
              value === null
                ? "exam-feedback exam-feedback--warn"
                : isCorrect
                  ? "exam-feedback exam-feedback--ok"
                  : "exam-feedback exam-feedback--bad"
            }">
              ${
                value === null
                  ? "Sin responder."
                  : isCorrect
                    ? `Correcto (${item.correct ? "V" : "F"}).`
                    : `Incorrecto. La respuesta correcta es ${item.correct ? "V" : "F"}.`
              }
            </span>
            ${item.solution ? `<div class="meta">Solución oficial: ${item.solution}</div>` : ""}
          </li>
        `;
      })
      .join("");

    return `<ul>${rows}</ul>`;
  }

  if (question.kind === "multiChoiceGroup") {
    const rows = question.items
      .map((item, index) => {
        const selected = article.querySelector(`input[name="${question.id}__${index}"]:checked`);
        const value = selected ? Number(selected.value) : null;
        const isCorrect = value === item.correctIndex;
        return `
          <li>
            <strong>${item.label}</strong><br />
            <span class="${
              value === null
                ? "exam-feedback exam-feedback--warn"
                : isCorrect
                  ? "exam-feedback exam-feedback--ok"
                  : "exam-feedback exam-feedback--bad"
            }">
              ${
                value === null
                  ? "Sin responder."
                  : isCorrect
                    ? "Correcto."
                    : "Incorrecto."
              }
            </span>
            <div class="meta">Respuesta correcta: ${item.options[item.correctIndex]}</div>
          </li>
        `;
      })
      .join("");

    return `<ul>${rows}</ul>`;
  }

  return `<p class="exam-feedback exam-feedback--warn">No se ha encontrado un corrector para este tipo de ejercicio.</p>`;
}

function countObjectiveAnswered(question, root) {
  if (!question.includeInSummary) {
    return { answered: 0, total: 0 };
  }

  if (question.kind === "booleanGroup" || question.kind === "multiChoiceGroup") {
    const total = question.items.length;
    const answered = question.items.filter((_, index) =>
      root.querySelector(`input[name="${question.id}__${index}"]:checked`),
    ).length;
    return { answered, total };
  }

  return { answered: 0, total: 0 };
}

function scoreObjectiveQuestion(question, root) {
  if (!question.includeInSummary) {
    return { earned: 0, max: 0 };
  }

  if (question.kind !== "booleanGroup" && question.kind !== "multiChoiceGroup") {
    return { earned: 0, max: 0 };
  }

  const pointsPerItem = question.pointsPerItem || 1;
  const max = question.items.length * pointsPerItem;
  const correct = question.items.filter((item, index) => {
    const checked = root.querySelector(`input[name="${question.id}__${index}"]:checked`);
    if (!checked) {
      return false;
    }

    if (question.kind === "booleanGroup") {
      return (checked.value === "true") === item.correct;
    }

    return Number(checked.value) === item.correctIndex;
  }).length;

  return { earned: correct * pointsPerItem, max };
}

function updateExamSummary() {
  if (!currentExam) {
    return;
  }

  const summary = document.getElementById("exam-summary-content");
  if (!summary) {
    return;
  }

  const questions = getAllQuestions(currentExam);
  const objectiveTotals = questions.reduce(
    (acc, question) => {
      const score = scoreObjectiveQuestion(question, document);
      const answered = countObjectiveAnswered(question, document);
      acc.earned += score.earned;
      acc.max += score.max;
      acc.answered += answered.answered;
      acc.totalItems += answered.total;
      return acc;
    },
    { earned: 0, max: 0, answered: 0, totalItems: 0 },
  );

  const manualQuestions = questions.filter((question) => !question.includeInSummary);
  const manualPoints = manualQuestions.reduce((sum, question) => sum + question.points, 0);

  summary.innerHTML = `
    <p>Cuando quieras ver tu resultado provisional, pulsa este botón. El cálculo automático solo cuenta los ejercicios cerrados del examen.</p>
    <div class="exam-actions">
      <button class="button button--primary" id="exam-final-button" type="button">Mostrar resultado del examen</button>
    </div>
    <div class="exam-summary__stats">
      <div class="exam-stat">
        <span class="meta">Puntuación automática</span>
        <strong>${objectiveTotals.earned}/${objectiveTotals.max}</strong>
      </div>
      <div class="exam-stat">
        <span class="meta">Ítems cerrados respondidos</span>
        <strong>${objectiveTotals.answered}/${objectiveTotals.totalItems}</strong>
      </div>
      <div class="exam-stat">
        <span class="meta">Comparación manual</span>
        <strong>${manualPoints} puntos</strong>
      </div>
    </div>
    <div class="exam-inline-note">
      <p><strong>Ojo:</strong> quedan fuera del cálculo automático todos los ejercicios abiertos o con justificación escrita: ${manualQuestions
        .map((question) => question.number)
        .join(", ")}.</p>
    </div>
  `;

  document.getElementById("exam-final-button")?.addEventListener("click", updateExamSummary, {
    once: true,
  });
}

function loadExam(examId) {
  const exam = window.examData?.[examId];
  const runner = document.getElementById("exam-runner");

  if (!exam || !runner) {
    return;
  }

  currentExam = exam;
  document.title = `${exam.title} · ESO Adultos Málaga`;
  renderExamMeta(exam);

  runner.innerHTML = `
    <div class="exam-blocks">
      <section class="exam-summary exam-summary--start">
        <h3>Aquí empieza el examen</h3>
        <p>Ve ejercicio por ejercicio. Cuando termines uno, pulsa <strong>Corregir este ejercicio</strong>.</p>
      </section>
      ${exam.sections.map(renderExamSection).join("")}
      <section class="exam-summary">
        <h3>Resultado del examen</h3>
        <div id="exam-summary-content"></div>
      </section>
    </div>
  `;

  bindExamButtons(exam);
  updateExamSummary();
}

function setHTMLIfPresent(id, html) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = html;
  }
}

function mount() {
  setHTMLIfPresent("facts-grid", facts.map(cardHTML).join(""));
  setHTMLIfPresent("calendar-grid", calendar.map(dateHTML).join(""));
  setHTMLIfPresent("ambitos-grid", ambitos.map(ambitoHTML).join(""));
  setHTMLIfPresent("steps-list", steps.map((step) => `<li>${step}</li>`).join(""));
  setHTMLIfPresent("exam-grid", examCards.map(examHTML).join(""));
  setHTMLIfPresent("malaga-grid", malaga.map(malagaHTML).join(""));
  setHTMLIfPresent("sources-grid", sourceGroups.map(sourceGroupHTML).join(""));
  renderExamIndex();
  renderExamSelector();
}

mount();
