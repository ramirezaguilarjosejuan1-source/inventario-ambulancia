
/-----------------------------------------------------------/
function cargarImagenBase64(src, callback){
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function(){
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(this,0,0);
    callback(canvas.toDataURL("image/png"));
  };
  img.src = src;
}

/************************************************
 * INVENTARIO AMBULANCIA – CRUZ ROJA
 * Autor del sistema: Jose Juan Ramirez Aguilar
 ************************************************/

/* ====== SECCIONES E INSUMOS ====== */
const secciones = [
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
    ["Mascarilla con reservorio",3,"num"],
    ["Mascarilla simple",3,"num"],
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
    ["Salbutamol / Ipatropio",1,"bool"],
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
    ["Mascarilla con reservorio",2,"num"],
    ["Mascarilla simple",2,"num"],
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

/* ====== CREAR FORMULARIO ====== */
const form = document.getElementById("formulario");
const salida = document.getElementById("salida");
let contador = 0;

secciones.forEach(sec=>{
  const h = document.createElement("h2");
  h.textContent = sec.titulo;
  form.appendChild(h);

  sec.items.forEach(i=>{
    const div = document.createElement("div");
    div.className = "fila";

    div.innerHTML = `
      <label>${i[0]}</label>
      ${
        i[2] === "bool"
        ? `<select id="i${contador}">
            <option value="1">Sí</option>
            <option value="0">No</option>
          </select>`
        : `<input type="number" id="i${contador}" placeholder="Cantidad">`
      }
    `;
    form.appendChild(div);
    contador++;
  });
});

/* ====== GUARDAR CONTEO ====== */
function guardar(){
  const responsable = document.getElementById("Responsable").value;
  const unidad = document.getElementById("Unidad").value;
  const guardia = document.getElementById("Guardia").value;

  const datos = [];
  let idx = 0;


  secciones.forEach(sec=>{
    sec.items.forEach(i=>{

const actual = Number(document.getElementById("i"+idx).value || 0);
const ideal = i[1];

datos.push({
  nombre: i[0],
  ideal,
  actual,
  faltante: Math.max(ideal - actual, 0)
});


      idx++;
    });
  });

localStorage.setItem("ultimo", JSON.stringify({
  unidad,
  guardia,
  responsable,
  fecha: new Date().toLocaleString(),
  datos
}));



  salida.textContent = " Conteo guardado correctamente";
}

/* ====== PDF COMPARATIVO PREMIUM ====== */
function pdfComparativo() {
  const r = JSON.parse(localStorage.getItem("ultimo"));
  if (!r) {
    alert("⚠️ Primero guarda el conteo ⚠️");
    return;
  }

  cargarImagenBase64("logo.png", function(logoBase64){
    cargarImagenBase64("ambulancia.png", function(ambuBase64){

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      /* ====== HEADER ROJO ====== */
      doc.setFillColor(200, 0, 0);
      doc.rect(0, 0, 210, 25, "F");

      doc.addImage(logoBase64, "PNG", 10, 5, 15, 15);
      doc.addImage(ambuBase64, "PNG", 185, 5, 15, 15);

      doc.setTextColor(255,255,255);
      doc.setFontSize(14);
      doc.text("CRUZ ROJA MEXICANA", 105, 12, { align:"center" });
      doc.setFontSize(11);
      doc.text("Inventario de Ambulancia", 105, 18, { align:"center" });

      /* ====== DATOS GENERALES ====== */
      let y = 35;
      doc.setTextColor(0,0,0);
      doc.setFontSize(11);

      doc.text(`Unidad: ${r.unidad}`, 14, y); y+=6;
      doc.text(`Guardia: ${r.guardia}`, 14, y); y+=6;
      doc.text(`Responsable: ${r.responsable || "No especificado"}`, 14, y); y+=6;
      doc.text(`Fecha: ${r.fecha}`, 14, y); y+=10;

      /* ====== TABLA ====== */
      doc.setFillColor(200,0,0);
      doc.setTextColor(255,255,255);
      doc.rect(14, y-6, 182, 8, "F");

      doc.text("Material", 16, y);
      doc.text("Ideal", 120, y);
      doc.text("Actual", 145, y);
      doc.text("Estado", 170, y);

      y+=8;
      doc.setTextColor(0,0,0);

let index = 0;

secciones.forEach(sec => {

  // Encabezado de sección
  if(y > 260){
    doc.addPage();
    y = 20;
  }

  doc.setFont(undefined, "bold");
  doc.setTextColor(200,0,0);
  doc.text(sec.titulo, 14, y);
  doc.setFont(undefined, "normal");
  doc.setTextColor(0,0,0);
  y += 6;

  sec.items.forEach(() => {
    const d = r.datos[index];

    if(y > 270){
      doc.addPage();
      y = 20;
    }

    if(d.faltante > 0){
      doc.setFillColor(255, 205, 210);
      doc.rect(14, y-6, 182, 8, "F");
      doc.text(`FALTAN ${d.faltante}`, 165, y);
    } else {
      doc.setFillColor(200, 230, 201);
      doc.rect(14, y-6, 182, 8, "F");
      doc.text("OK", 175, y);
    }

    doc.setTextColor(0,0,0);
    doc.text(d.nombre, 16, y);
    doc.text(String(d.ideal), 125, y);
    doc.text(String(d.actual), 150, y);

    y += 8;
    index++;
  });

  y += 4;
});


        if(d.actual < d.ideal){
          doc.setFillColor(255, 205, 210);
          doc.rect(14, y-6, 182, 8, "F");
          doc.text("FALTANTE", 168, y);
        } else {
          doc.setFillColor(200, 230, 201);
          doc.rect(14, y-6, 182, 8, "F");
          doc.text("OK", 175, y);
        }

        doc.setTextColor(0,0,0);
        doc.text(d.nombre, 16, y);
        doc.text(String(d.ideal), 125, y);
        doc.text(String(d.actual), 150, y);

        y+=8;
      });

      doc.save(`Inventario_${r.unidad}.pdf`);
    });
  });
}
