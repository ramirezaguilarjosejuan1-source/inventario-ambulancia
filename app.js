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

const form=document.getElementById("formulario");
let contador=0;

secciones.forEach(sec=>{
  const h=document.createElement("h2");
  h.textContent=sec.titulo;
  form.appendChild(h);

  sec.items.forEach(i=>{
    const div=document.createElement("div");
    div.className="fila";
    div.innerHTML=`
      <label>${i[0]}</label>
      ${i[2]=="bool"
        ? `<select id="i${contador}"><option value="1">Sí</option><option value="0">No</option></select>`
        : `<input type="number" id="i${contador}" placeholder="Cantidad">`}
    `;
    form.appendChild(div);
    contador++;
  });
});

function guardar(){
  const datos=[];
  let idx=0;

  secciones.forEach(sec=>{
    sec.items.forEach(i=>{
      datos.push({
        nombre:i[0],
        ideal:i[1],
        actual:Number(document.getElementById("i"+idx).value||0)
      });
      idx++;
    });
  });

  localStorage.setItem("ultimo",JSON.stringify({
    unidad:unidad.value,
    guardia:guardia.value,
    fecha:new Date().toLocaleString(),
    datos
  }));

  salida.textContent="✅ Conteo guardado correctamente";
}


doc.setFontSize(12);
doc.text(`Unidad: ${unidad}`, 10, 20);
doc.text(`Guardia: ${guardia}`, 10, 28);
doc.text(`Fecha: ${fecha}`, 10, 36);

function pdfComparativo(){
  const unidad = document.getElementById("Unidad").value;
const guardia = document.getElementById("Guardia").value;
const fecha = new Date().toLocaleDateString();
  
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const r = JSON.parse(localStorage.getItem("ultimo"));

  let y = 10;

  doc.setFontSize(12);
  doc.text("INVENTARIO DE AMBULANCIA", 10, y); y+=6;
  doc.setFontSize(10);
  doc.text(`Unidad: ${r.unidad}`, 10, y); y+=5;
  doc.text(`Guardia: ${r.guardia}`, 10, y); y+=5;
  doc.text(`Fecha: ${r.fecha}`, 10, y); y+=8;

  // Encabezados tabla
  doc.setFillColor(220,220,220);
  doc.rect(10, y-4, 190, 8, "F");
  doc.text("Material", 12, y);
  doc.text("Ideal", 110, y);
  doc.text("Actual", 135, y);
  doc.text("Estado", 165, y);
  y+=8;

  r.datos.forEach(d=>{
    if(y > 270){
      doc.addPage();
      y = 20;
    }

    if(d.actual < d.ideal){
      doc.setFillColor(255, 199, 206); // rojo claro
      doc.rect(10, y-4, 190, 8, "F");
      doc.text("FALTANTE", 165, y);
    } else {
      doc.setFillColor(198, 239, 206); // verde claro
      doc.rect(10, y-4, 190, 8, "F");
      doc.text("OK", 170, y);
    }

    doc.setTextColor(0,0,0);
    doc.text(d.nombre, 12, y);
    doc.text(String(d.ideal), 115, y);
    doc.text(String(d.actual), 140, y);
    y+=8;
  });

  doc.save("Inventario_Comparativo.pdf");
}

