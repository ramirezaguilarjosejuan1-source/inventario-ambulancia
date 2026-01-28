
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
 * Autor del sistema: (puedes poner tu nombre)
 ************************************************/

/* ====== SECCIONES E INSUMOS ====== */
const secciones = [
  {
    titulo:"🩹 TRAUMA",
    items:[
      ["Extintor",1,"bool"],
      ["Gel antibacterial",1,"bool"],
      ["Desinfectante de equipos",1,"bool"],
      ["Sábanas",10,"num"],
      ["Torniquete CAT o táctico",1,"num"],
      ["Carro camilla",1,"num"],
      ["Camilla marina",1,"num"],
      ["FEL",1,"num"],
      ["Tabla de RCP",1,"num"],
      ["Chaleco de extracción",1,"num"],
      ["Collarín cervical adulto",1,"num"],
      ["Collarín cervical pediátrico",1,"num"],
      ["Inmovilizador de cráneo",1,"bool"],
      ["Araña",1,"bool"],
      ["Férula EI bota",1,"num"],
      ["Férula EI larga",1,"num"],
      ["Férula ES larga",1,"num"],
      ["Férula ES corta",1,"num"],
      ["Paquete de gasas estériles",10,"num"],
      ["Paquete de apósitos",5,"num"],
      ["Venda 5cm",6,"num"],
      ["Venda 10cm",6,"num"],
      ["Venda 15cm",6,"num"],
      ["Venda 30cm",2,"num"],
      ["Kit gineco",1,"num"],
      ["Sábana térmica",1,"num"],
      ["Sábana para quemados",1,"num"],
      ["Cobertor",1,"num"]
    ]
  },
  {
    titulo:"❤️ SIGNOS VITALES",
    items:[
      ["Baumanómetro adulto",1,"num"],
      ["Baumanómetro pediátrico",1,"num"],
      ["Estetoscopio",1,"num"],
      ["Glucómetro",1,"num"],
      ["Tiras reactivas",10,"num"],
      ["Torundas",1,"num"],
      ["Termómetro",1,"num"],
      ["Oxímetro",1,"num"]
    ]
  },
  {
    titulo:"🫁 VÍA AÉREA",
    items:[
      ["Puntas nasales",5,"num"],
      ["Mascarilla reservorio",5,"num"],
      ["Mascarilla simple",5,"num"],
      ["BVM neonatal",1,"num"],
      ["BVM pediátrico",1,"num"],
      ["BVM adulto",1,"num"],
      ["Aspirador funcional",1,"bool"],
      ["Juego de mascarillas laríngeas",1,"bool"],
      ["Salbutamol / Ipatropio",1,"bool"]
    ]
  },
  {
    titulo:"💊 MEDICAMENTOS",
    items:[
      ["Ácido acetilsalicílico 500mg",1,"bool"],
      ["Electrolitos orales",5,"num"],
      ["Atropina",3,"num"],
      ["Epinefrina",3,"num"],
      ["Isosorbida / Trinitrato",1,"bool"]
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

  const unidad = document.getElementById("Unidad").value;
  const guardia = document.getElementById("Guardia").value;

  const datos = [];
  let idx = 0;

  secciones.forEach(sec=>{
    sec.items.forEach(i=>{
      datos.push({
        nombre: i[0],
        ideal: i[1],
        actual: Number(document.getElementById("i"+idx).value || 0)
      });
      idx++;
    });
  });

  localStorage.setItem("ultimo", JSON.stringify({
    unidad,
    guardia,
    fecha: new Date().toLocaleString(),
    datos
  }));

  salida.textContent = "✅ Conteo guardado correctamente";
}

/* ====== PDF COMPARATIVO PREMIUM ====== */
function pdfComparativo(){

  const unidad = document.getElementById("Unidad").value;
  const guardia = document.getElementById("Guardia").value;
  const responsable = document.getElementById("responsable").value || "No especificado";

  cargarImagenBase64("logo.png", function(logoBase64){
    cargarImagenBase64("ambulancia.png", function(ambuBase64){

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      // 🔴 BARRA ROJA SUPERIOR
      doc.setFillColor(198,40,40);
      doc.rect(0,0,210,22,"F");

      // 🖼️ LOGOS
      doc.addImage(logoBase64,"PNG",10,4,14,14);
      doc.addImage(ambuBase64,"PNG",186,4,14,14);

      // 🏷️ TITULO
      doc.setTextColor(255,255,255);
      doc.setFontSize(14);
      doc.text("Inventario de Ambulancia",105,14,{align:"center"});

      // 📋 DATOS GENERALES
      doc.setTextColor(0,0,0);
      doc.setFontSize(10);

      doc.text("Unidad: " + limpiarTexto(unidad),14,30);
      doc.text("Guardia: " + limpiarTexto(guardia),14,36);
      doc.text("Responsable: " + limpiarTexto(responsable),14,42);

      let y = 55;

      // 🔽 AQUÍ SIGUE TU TABLA Y CONTENIDO NORMAL
      // (NO TOCAMOS TU LÓGICA DE INVENTARIO)

      // AL FINAL
      doc.save("Inventario_" + unidad + ".pdf");

    });
  });
}
