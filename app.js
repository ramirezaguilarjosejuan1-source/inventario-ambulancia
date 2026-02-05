/************************************************
 * INVENTARIO AMBULANCIA – CRUZ ROJA
 * Autor del sistema: Jose Juan Ramirez Aguilar
 ************************************************/

/* ====== SECCIONES E INSUMOS ====== */
const secciones = [
{
  titulo:"🛡️ MATERIAL DE ATENCIÓN",
  items:[
    ["No. Manómetro", "", "text"],
    ["No. Tanque de Oxígeno", "", "text"],
    ["DAE / Life Pack", "", "text"],
    ["Libras Tanque Fijo", 0, "num"],
    ["Libras Tanque Portátil", 0, "num"],
    ["Estado Tanque y DAE", null, "file"]
  ]
},
{
  titulo:"🔥 SEGURIDAD Y BIOSEGURIDAD",
  items:[
    ["Extintor",1,"bool"],
    ["Gel antibacterial",1,"bool"],
    ["Desinfectante equipos y superficies",1,"bool"],
    ["Guantes de látex",10,"num"],
    ["Cubrebocas",10,"num"],
    ["Mascarilla N95",2,"num"],
    ["Bote RPBI",1,"bool"],
    ["Bote basura común",1,"bool"]
  ]
},
{
  titulo:"🛏️ TRASLADO Y CONFORT DEL PACIENTE",
  items:[
    ["Sábanas",1,"bool"],
    ["Cobertor",1,"bool"],
    ["Sábana térmica",1,"bool"],
    ["Camilla marina",1,"bool"],
    ["Carro camilla",1,"bool"]
  ]
},
{
  titulo:"🩺 SIGNOS VITALES",
  items:[
    ["Baumanómetro adulto",1,"bool"],
    ["Baumanómetro pediátrico",1,"bool"],
    ["Estetoscopio",1,"bool"],
    ["Glucómetro",1,"bool"],
    ["Tiras reactivas",10,"num"],
    ["Lancetas",10,"num"],
    ["Torundas",1,"bool"],
    ["Termómetro",1,"bool"],
    ["Oxímetro",1,"bool"]
  ]
},
{
  titulo:"🚑 TRAUMA, INMOVILIZACIÓN Y EXTRICACIÓN",
  items:[
    ["Sábana para quemados",1,"bool"],
    ["Torniquete CAT / Táctico",1,"bool"],
    ["Tabla de RCP",1,"bool"],
    ["Chaleco de extracción",1,"bool"],
    ["FEL",1,"bool"],
    ["Collarín cervical adulto",1,"bool"],
    ["Collarín cervical pediátrico",1,"bool"],
    ["Inmovilizador de cráneo",1,"bool"],
    ["Araña para camilla",1,"bool"],
    ["Juego de férulas",1,"bool"],
  ]
},
{
  titulo:"🩹 CURACIÓN Y HERIDAS GAVETA",
  items:[
    ["Iodopovidona o Benzal",1,"bool"],
    ["Jabón quirúrgico",1,"bool"],
    ["Gasas estériles (paquetes)",10,"num"],
    ["Apósitos",10,"num"],
    ["Venda 5 cm",3,"num"],
    ["Venda 10 cm",3,"num"],
    ["Venda 15 cm",3,"num"],
    ["Venda 30 cm",3,"num"],
    ["Tela adhesiva",1,"num"]
  ]
},
{
  titulo:"🚺 GINECO - OBSTÉTRICO",
  items:[
    ["Kit ginecológico",1,"bool"]
  ]
},
{
  titulo:"🏷️ TRIAGE Y DESASTRES",
  items:[
    ["Targets de triage",10,"num"]
  ]
},
{
  titulo:"🫁 VÍA AÉREA Y OXIGENOTERAPIA",
  items:[
    ["Cánula nasofaríngea 3.5",1,"bool"],
    ["Cánula nasofaríngea 4.0",1,"bool"],
    ["Cánula nasofaríngea 4.5",1,"bool"],
    ["Cánula nasofaríngea 5.5",1,"bool"],
    ["Cánula nasofaríngea 6.5",1,"bool"],
    ["Cánula nasofaríngea 7.0",1,"bool"],
    ["Cánula nasofaríngea 7.5",1,"bool"],
    ["Cánula nasofaríngea 8.0",1,"bool"],
    ["Cánula nasofaríngea 9.0",1,"bool"],

    ["Cánula orofaríngea 00",1,"bool"],
    ["Cánula orofaríngea 0",1,"bool"],
    ["Cánula orofaríngea 1",1,"bool"],
    ["Cánula orofaríngea 2",1,"bool"],
    ["Cánula orofaríngea 3",1,"bool"],
    ["Cánula orofaríngea 4",1,"bool"],
    ["Cánula orofaríngea 5",1,"bool"],
    ["Cánula orofaríngea 6",1,"bool"],

    ["Puntas nasales",3,"num"],
    ["Puntas nasales pediatrico",3,"num"],
    ["Mascarilla con reservorio",3,"num"],
    ["Mascarilla con reservorio pediatrico",3,"num"],
    ["Mascarilla simple",3,"num"],
    ["Mascarilla simple pediatrico",3,"num"],
    ["BVM neonatal",1,"bool"],
    ["BVM pediátrico",1,"bool"],
    ["BVM adulto",1,"bool"],
    ["Aspirador funcional",1,"bool"],
    ["Mascarillas laríngeas",1,"bool"]
  ]
},
{
  titulo:"💉 TERAPIA INTRAVENOSA",
  items:[
    ["Normogotero",3,"num"],
    ["Agujas hipodérmicas",3,"num"],

    ["Catéter venoso #14",3,"num"],
    ["Catéter venoso #16",3,"num"],
    ["Catéter venoso #18",3,"num"],
    ["Catéter venoso #19",3,"num"],
    ["Catéter venoso #20",3,"num"],
    ["Catéter venoso #21",3,"num"],
    ["Catéter venoso #22",3,"num"],
    ["Catéter venoso #24",3,"num"],

    ["Jeringa insulina",3,"num"],
    ["Jeringa 3 ml",3,"num"],
    ["Jeringa 5 ml",3,"num"],
    ["Jeringa 10 ml",3,"num"],
    ["Jeringa 20 ml",3,"num"]
  ]
},
{
  titulo:"💧 SOLUCIONES INTRAVENOSAS",
  items:[
    ["Hartmann 500 ml",3,"num"],
    ["Cloruro de sodio 500 ml",3,"num"],
    ["Glucosa 5% 500 ml",3,"num"],

    ["Hartmann 250 ml",3,"num"],
    ["Cloruro de sodio 250 ml",3,"num"],
    ["Glucosa 5% 250 ml",3,"num"],
    ["Glucosa 50% 50 ml",3,"num"]
  ]
},
{
  titulo:"💊 MEDICAMENTOS",
  items:[
    ["Electrolitos orales",5,"num"],
    ["Atropina",3,"num"],
    ["Epinefrina",3,"num"],
    ["Isosorbida / Trinitrato",1,"bool"],
    ["Salbutamol / Ipratropio",1,"bool"],
    ["Ácido acetilsalicílico 500mg",1,"bool"]
  ]
},
{
  titulo:"🩹 EQUIPO DE BOTIQUÍN",
  items:[

    ["Hartmann 250 ml",2,"num"],
    ["Cloruro de sodio 250 ml",2,"num"],
    ["Glucosa 5% 250 ml",2,"num"],
    ["Glucosa 50% 50 ml",2,"num"],
    ["Iodopovidona o Benzal",1,"bool"],
    ["Jabón quirúrgico",1,"bool"],
    ["Gasas estériles (paquetes)",5,"num"],
    ["Apósitos",5,"num"],
    ["Venda 5 cm",2,"num"],
    ["Venda 10 cm",2,"num"],
    ["Venda 15 cm",2,"num"],
    ["Venda 30 cm",2,"num"],
    ["Tela adhesiva",1,"num"],
    ["Puntas nasales",2,"num"],
    ["Puntas nasales pediatrico",2,"num"],
    ["Mascarilla con reservorio",2,"num"],
    ["Mascarilla con reservorio pediatrico",2,"num"],
    ["Mascarilla simple",2,"num"],
    ["Mascarilla simple pediatrico",2,"num"],
    ["Normogotero",2,"num"],
    ["Agujas hipodérmicas",2,"num"],
    ["Catéter venoso #14",2,"num"],
    ["Catéter venoso #16",2,"num"],
    ["Catéter venoso #18",2,"num"],
    ["Catéter venoso #19",2,"num"],
    ["Catéter venoso #20",2,"num"],
    ["Catéter venoso #21",2,"num"],
    ["Catéter venoso #22",2,"num"],
    ["Catéter venoso #24",2,"num"],
    ["Jeringa insulina",2,"num"],
    ["Jeringa 3 ml",2,"num"],
    ["Jeringa 5 ml",2,"num"],
    ["Jeringa 10 ml",2,"num"],
    ["Jeringa 20 ml",2,"num"]
  ]
}

];

/* ====== CARGAR IMAGEN PROMISE ====== */
function cargarImagenBase64(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
      const canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(this, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => reject(new Error(`No se pudo cargar la imagen: ${src}`));
    img.src = src;
  });
}

/* ====== CREAR FORMULARIO ====== */
const form = document.getElementById("formulario");
const salida = document.getElementById("salida");
let contador = 0;

secciones.forEach(sec => {
  const card = document.createElement("div");
  card.className = "card";

  const h = document.createElement("div");
  h.className = "header";
  h.textContent = sec.titulo;
  card.appendChild(h);

  const content = document.createElement("div");
  content.className = "content";

  sec.items.forEach(i => {
    const div = document.createElement("div");
    div.className = "item";

    let inputHtml = "";
    if (i[2] === "bool") {
      inputHtml = `<select id="i${contador}">
                    <option value="1">Sí</option>
                    <option value="0">No</option>
                   </select>`;
    } else if (i[2] === "text") {
      inputHtml = `<input type="text" id="i${contador}" placeholder="...">`;
    } else if (i[2] === "file") {
      inputHtml = `<input type="file" id="i${contador}" accept="image/*">`;
    } else {
      inputHtml = `<input type="number" id="i${contador}" value="0" min="0">`;
    }

    div.innerHTML = `
      <label>${i[0]}</label>
      ${inputHtml}
    `;
    content.appendChild(div);
    contador++;
  });
  card.appendChild(content);
  form.appendChild(card);
});

/* ====== EVENTOS ====== */
document.getElementById("Guardia").addEventListener("change", function() {
  document.getElementById("turno-actual").textContent = this.value;
});

/* ====== PROCESAR IMAGEN (RESIZING) ====== */
function procesarImagen(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 1024;
        const scale = Math.min(1, MAX_WIDTH / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ====== GUARDAR CONTEO ====== */
async function guardar() {
  const responsableInput = document.getElementById("Responsable");
  const responsable = responsableInput.value.trim();

  if (!responsable) {
    alert("⚠️ Por favor ingresa el nombre del responsable ⚠️");
    responsableInput.style.borderColor = "red";
    responsableInput.focus();
    return;
  }
  responsableInput.style.borderColor = "";

  // Validar campos de Material de Atención (Sección 0)
  let idxCheck = 0;
  for (let sIdx = 0; sIdx < secciones.length; sIdx++) {
    const sec = secciones[sIdx];
    for (let iIdx = 0; iIdx < sec.items.length; iIdx++) {
      const itemDef = sec.items[iIdx];
      if (sec.titulo.includes("MATERIAL DE ATENCIÓN")) {
        const el = document.getElementById("i" + idxCheck);
        if (itemDef[2] === "text" && !el.value.trim()) {
          alert(`⚠️ El campo "${itemDef[0]}" es obligatorio ⚠️`);
          el.focus();
          return;
        }
        if (itemDef[2] === "file" && (!el.files || !el.files[0])) {
          alert(`⚠️ La foto de "${itemDef[0]}" es obligatoria ⚠️`);
          el.focus();
          return;
        }
      }
      idxCheck++;
    }
  }

  salida.textContent = "⏳ Guardando...";
  salida.style.display = "block";

  const unidad = document.getElementById("Unidad").value;
  const guardia = document.getElementById("Guardia").value;

  const inventarioPorSeccion = [];
  let idx = 0;

  for (const sec of secciones) {
    const items = [];
    for (const i of sec.items) {
      const el = document.getElementById("i" + idx);
      let valorActual;

      if (i[2] === "file") {
        if (el.files && el.files[0]) {
          valorActual = await procesarImagen(el.files[0]);
        } else {
          valorActual = null;
        }
      } else if (i[2] === "text") {
        valorActual = el.value || "";
      } else {
        valorActual = Number(el.value || 0);
      }

      const ideal = i[1];

      items.push({
        nombre: i[0],
        tipo: i[2] || "num",
        ideal,
        actual: valorActual,
        faltante: (typeof valorActual === 'number' && typeof ideal === 'number') ? Math.max(ideal - valorActual, 0) : 0
      });
      idx++;
    }
    inventarioPorSeccion.push({
      titulo: sec.titulo,
      items: items
    });
  }

  localStorage.setItem("ultimo", JSON.stringify({
    unidad,
    guardia,
    responsable,
    fecha: new Date().toLocaleString(),
    secciones: inventarioPorSeccion
  }));

  salida.textContent = "✅ Conteo guardado correctamente";
  salida.style.color = "green";
  salida.style.fontWeight = "bold";
  salida.style.textAlign = "center";
  salida.style.display = "block";
  salida.style.marginTop = "10px";

  setTimeout(() => { salida.textContent = ""; }, 3000);
}

/* ====== PDF COMPARATIVO PREMIUM CON AUTOTABLE ====== */
async function pdfComparativo() {
  const r = JSON.parse(localStorage.getItem("ultimo"));
  const responsableActual = document.getElementById("Responsable").value.trim();

  if (!r) {
    alert("⚠️ Primero guarda el conteo ⚠️");
    return;
  }

  if (!responsableActual) {
    alert("⚠️ Por favor ingresa el nombre del responsable antes de generar el PDF ⚠️");
    document.getElementById("Responsable").focus();
    return;
  }

  if (r.responsable !== responsableActual) {
    alert("⚠️ El nombre del responsable ha cambiado. Por favor guarda el conteo nuevamente. ⚠️");
    return;
  }

  try {
    const [logoBase64, ambuBase64] = await Promise.all([
      cargarImagenBase64("logo.png"),
      cargarImagenBase64("ambulancia.png")
    ]);

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    /* ====== HEADER ROJO ====== */
    doc.setFillColor(200, 0, 0);
    doc.rect(0, 0, 210, 25, "F");
    doc.addImage(logoBase64, "PNG", 10, 5, 15, 15);
    doc.addImage(ambuBase64, "PNG", 185, 5, 15, 15);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text("CRUZ ROJA MEXICANA", 105, 12, { align: "center" });
    doc.setFontSize(11);
    doc.text("Inventario de Ambulancia", 105, 18, { align: "center" });

    /* ====== DATOS GENERALES ====== */
    let y = 35;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.text(`Unidad: ${r.unidad}`, 14, y); y += 6;
    doc.text(`Guardia: ${r.guardia}`, 14, y); y += 6;
    doc.text(`Responsable: ${r.responsable}`, 14, y); y += 6;
    doc.text(`Fecha: ${r.fecha}`, 14, y); y += 10;

    /* ====== TABLA CON AUTOTABLE ====== */
    const ambulanciaItems = [];
    const botiquinItems = [];
    const materialAtencionItems = [];
    let fotoEvidencia = null;

    const seccionesData = r.secciones || [{ titulo: "General", items: r.datos || [] }];

    seccionesData.forEach(sec => {
      if (sec.titulo.includes("BOTIQUÍN")) {
        botiquinItems.push(...sec.items);
      } else if (sec.titulo.includes("MATERIAL DE ATENCIÓN")) {
        sec.items.forEach(item => {
          if (item.tipo === "file") {
            fotoEvidencia = item.actual;
          } else {
            materialAtencionItems.push(item);
          }
        });
      } else {
        ambulanciaItems.push(...sec.items);
      }
    });

    const createTable = (data, title, startY) => {
      if (startY > 270) {
        doc.addPage();
        startY = 20;
      }
      doc.setFontSize(12);
      doc.setTextColor(200, 0, 0);
      doc.text(title, 14, startY);

      const tableData = data.map(d => {
        let idealVal = d.ideal;
        let actualVal = d.actual;
        let status = "OK";

        if (d.tipo === "bool") {
          idealVal = d.ideal ? "Sí" : "No";
          actualVal = d.actual ? "Sí" : "No";
          status = (d.ideal && !d.actual) ? "Faltante" : "OK";
        } else if (d.tipo === "text") {
          idealVal = "-";
          actualVal = d.actual || "-";
          status = "Info";
        } else {
          // num
          const missing = Math.max(d.ideal - d.actual, 0);
          status = missing > 0 ? `Faltan ${missing}` : "OK";
        }

        return [d.nombre, idealVal, actualVal, status];
      });

      doc.autoTable({
        startY: startY + 5,
        head: [['Material', 'Ideal', 'Actual', 'Estado']],
        body: tableData,
        theme: 'striped',
        headStyles: {
          fillColor: [200, 0, 0],
          halign: 'center'
        },
        columnStyles: {
          0: { cellWidth: 80 },
          1: { halign: 'center' },
          2: { halign: 'center' },
          3: { halign: 'center', fontStyle: 'bold' }
        },
        didParseCell: function (data) {
          if (data.section === 'body' && data.column.index === 3) {
            const val = data.cell.raw.toString();
            if (val.startsWith('Faltan') || val === 'Faltante') {
              data.cell.styles.textColor = [200, 0, 0];
            } else if (val === 'OK') {
              data.cell.styles.textColor = [0, 128, 0];
            } else {
              data.cell.styles.textColor = [0, 0, 0];
            }
          }
        }
      });
      return doc.lastAutoTable.finalY;
    };

    let nextY = y;
    if (materialAtencionItems.length > 0) {
      nextY = createTable(materialAtencionItems, "EQUIPO Y MATERIAL DE ATENCIÓN", nextY);
      nextY += 10;
    }

    nextY = createTable(ambulanciaItems, "INVENTARIO GENERAL DE AMBULANCIA", nextY);

    doc.addPage();
    createTable(botiquinItems, "INVENTARIO EQUIPO DE BOTIQUÍN", 20);

    if (fotoEvidencia) {
      doc.addPage();
      doc.setTextColor(200, 0, 0);
      doc.setFontSize(14);
      doc.text("EVIDENCIA FOTOGRÁFICA (TANQUE Y DAE)", 105, 20, { align: "center" });
      doc.addImage(fotoEvidencia, "JPEG", 15, 30, 180, 135);
    }

    /* ====== MARCA DE AGUA FINAL ====== */
    const pageCount = doc.internal.getNumberOfPages();
    doc.setPage(pageCount);
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(9);
    doc.text("® Jose Juan Ramirez - Desarrollado por Jose Juan Ramirez", 105, 290, { align: "center" });

    doc.save(`Inventario_${r.unidad}.pdf`);
  } catch (error) {
    console.error(error);
    alert("Hubo un problema al generar el PDF. Verifica que las imágenes existan.");
  }
}
