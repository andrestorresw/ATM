var texto = document.getElementById("texto");
var boton = document.getElementById("boton");
var lienzo = document.getElementById("canvas");
var lienzo = lienzo.getContext("2d");
boton.addEventListener("click", retirarEfectivo);

var cajero = new Image();
cajero.src = "cajero.gif";
cajero.addEventListener("load",dibujar);

function dibujar()
{
  lienzo.drawImage(cajero, 0, 0);
}

var cb500 = 2;
var cb200 = 3;
var cb100 = 2;
var cb50 = 1;
var b500 = 0;
var b200 = 0;
var b100 = 0;
var b50 = 0;
var cantidadRestante = 0;
var cantidadEntregada = 0;

function retirarEfectivo()
{
  if (texto.value % 50 == 0)
  {
    if (texto.value >= 500)
    {
      b500 = Math.trunc(texto.value/500);
      cb500 = cb500 - b500;
      cantidadEntregada = b500 * 500;
      cantidadRestante = texto.value - cantidadEntregada;
      document.write("Te doy " + b500 + " billetes de 500");
    }
    else
    {
      cantidadRestante = texto.value;
    }

    if (cantidadRestante >= 200)
    {
      b200 = Math.trunc(cantidadRestante/200);
      cb200 = cb200 - b200;
      cantidadEntregada = cantidadEntregada + (b200*200);
      cantidadRestante = texto.value - cantidadEntregada;
      document.write("<br/>Te doy " + b200 + " billetes de 200");
    }

    if (cantidadRestante >= 100)
    {
      b100 = Math.trunc(cantidadRestante/100);
      cb100 = cb100 - b100;
      cantidadEntregada = cantidadEntregada + (b100*100);
      cantidadRestante = texto.value - cantidadEntregada;
      document.write("<br/>Te doy " + b100 +" billetes de 100");
    }

    if (cantidadRestante >= 50)
    {
      b50 = Math.trunc(cantidadRestante/50);
      cb50 = cb50 - b50;
      cantidadEntregada = cantidadEntregada + (b50*50);
      cantidadRestante = texto.value - cantidadEntregada;
      document.write("<br/>Te doy " + b50 + " billetes de 50");
    }
  }
  else
  {
    document.write("No puedo entregarte esa cantidad");
  }
}
