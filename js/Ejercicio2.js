// importacion de la clase calculadora
import {Calculadora} from "./Calculadora.js";
//se declara e incializa un objeto de la clase calculadora
var cal=new Calculadora('','','');
//variables donde se van a guardar los numeros
var numero="";
var numero2="";

// variables donde se almacenarán los numeros relacionados con el id del html
var resultado= document.getElementById("resultado");
var num0=document.getElementById('cero');
var num1=document.getElementById('uno');
var num2=document.getElementById('dos');
var num3=document.getElementById('tres');
var num4=document.getElementById('cuatro');
var num5=document.getElementById('cinco');
var num6=document.getElementById('seis');
var num7=document.getElementById('siete');
var num8=document.getElementById('ocho');
var num9=document.getElementById('nueve');

//eventos que se activarán cuando el usuario pulse los botones de la claculadora
num0.addEventListener('click', ()=>{


  resultado.textContent =resultado.textContent+0;
  
});

num1.addEventListener('click', ()=>{


  resultado.textContent=resultado.textContent+1;

  
  
});
num2.addEventListener('click', ()=>{


  resultado.textContent =resultado.textContent+2;
  
});
num3.addEventListener('click', ()=>{


  resultado.textContent =resultado.textContent+3;
  
});
num4.addEventListener('click', ()=>{


  resultado.textContent =resultado.textContent+4;
 

});
num5.addEventListener('click', ()=>{


  resultado.textContent =resultado.textContent+5;
  
});
num6.addEventListener('click', ()=>{


  resultado.textContent =resultado.textContent+6;
});
num7.addEventListener('click', ()=>{


  resultado.textContent =resultado.textContent+7;
});
num8.addEventListener('click', ()=>{


  resultado.textContent =resultado.textContent+8;
});
num9.addEventListener('click', ()=>{


  resultado.textContent =resultado.textContent+9;
});

//variable donde se va a guardar el id de punto designado en la calculadora

var punto=document.getElementById('punto');

var decimales=false; //variable boolean que almacenará si existen decimales o no
//evento que se activará en el caso de que haya un punto
punto.addEventListener('click', ()=>{

if(decimales==false){
  resultado.textContent =resultado.textContent+".";
  decimales=true;
}
});

//variables que guardan los operadores relacionados con el id del html

var sumar=document.getElementById('sumar');
var restar=document.getElementById('restar');
var mult=document.getElementById('mult');
var dividir=document.getElementById('dividir');
var igual=document.getElementById('igual');
var masMenos=document.getElementById('masMenos');

/**
 * eventos que se activaran cuando el usuario pulse uno de los botones de los operadoras
 */

sumar.addEventListener('click', ()=>{
  numero=resultado.textContent;
  cal.setN1=parseFloat(numero);
  console.log(numero);
  resultado.textContent= cal.getN1+"+";
  cal.setOp='+';
  decimales=false;
});

restar.addEventListener('click', ()=>{

  numero=resultado.textContent;
  cal.setN1=parseFloat(numero);
  console.log(numero);
  resultado.textContent= cal.getN1+"-";
  cal.setOp='-';
  decimales=false;
});

mult.addEventListener('click', ()=>{

  numero=resultado.textContent;
  cal.setN1=parseFloat(numero);
  console.log(numero);
  resultado.textContent= cal.getN1+"*";
  cal.setOp='*';
  decimales=false;
});

dividir.addEventListener('click', ()=>{

  numero=resultado.textContent;
  cal.setN1=parseFloat(numero);
  console.log(numero);
  resultado.textContent= cal.getN1+"/";
  cal.setOp='/';
  decimales=false;
});

masMenos.addEventListener('click', ()=>{


  resultado.textContent =resultado.textContent+"-";
});
igual.addEventListener('click', ()=>{

  numero2=resultado.textContent.substring(numero.length+1);
  cal.setN2=parseFloat(numero2);
  console.log(numero2);
  operaciones();
  decimales=false;
  
});
// funcion donde se van a realizar todas las operaciones mediante el objeto calculadora
function operaciones(){
var res="";
  switch(cal.getOp){

    case '+':

      res=cal.sumar();
      
    break;

    case '-':
      res=cal.restar();
    
    break;

    case'*':
    res=cal.mult()
    break;

    case'/':
    if(cal.getN2==0){


      res=0;
    }else{
      res=cal.div();
    }

    break;



  }
  console.log(res);
  resultado.textContent=res;

}

//evento que va a limpiar la pantalla de la calculadora una vez que se pulse el boton creado en html
var reset=document.getElementById('reset');
reset.addEventListener('click',()=>{

limpiar=cal.limpiar();

resultado.textContent=limpiar;


});

