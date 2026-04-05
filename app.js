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

function mount() {
  document.getElementById("facts-grid").innerHTML = facts.map(cardHTML).join("");
  document.getElementById("calendar-grid").innerHTML = calendar.map(dateHTML).join("");
  document.getElementById("ambitos-grid").innerHTML = ambitos.map(ambitoHTML).join("");
  document.getElementById("steps-list").innerHTML = steps.map((step) => `<li>${step}</li>`).join("");
  document.getElementById("exam-grid").innerHTML = examCards.map(examHTML).join("");
  document.getElementById("malaga-grid").innerHTML = malaga.map(malagaHTML).join("");
  document.getElementById("sources-grid").innerHTML = sourceGroups.map(sourceGroupHTML).join("");
}

mount();
