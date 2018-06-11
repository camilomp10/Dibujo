var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botonsito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color,xi,yi,xf,yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var xx = parseInt(texto.value);
  var lineas = xx;
  var l = 0 ;
  var o = xx;
  var s;
  var r;
  var espacio = ancho/lineas;

  while (l<lineas)
  {
    s = espacio*l;
    r = espacio*o;
    dibujarLinea("black",0,s,s,300);
    dibujarLinea("black",s,0,300,s);
    dibujarLinea("black",0,r,s,0);
    dibujarLinea("black",300,r,s,300);
    l=l+1;
    o=o-1;
  }
}
