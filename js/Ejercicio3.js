//constantes y variables donde se guardan los nombres designados en el id de html
const piedra=document.getElementById("piedra");
const papel=document.getElementById("papel");
const tijera=document.getElementById("tijera");
const resulText=document.getElementById("start-text");
const userImg=document.getElementById("img-user");
const machineImg=document.getElementById("img-machine");
const inicializar=document.getElementById("inicializar");
const contUser=document.getElementById("contUser");
const contMachine=document.getElementById("contMachine");
let contadorU=0;
let contadorM=0;
const rock=0;
const paper=1;
const scissors=2;
const empate=0;
const ganar=1;
const perder=2;
// opciones del usuario
piedra.addEventListener('click',()=>{

jugar(rock,"rock.png");
console.log("piedra");

});

papel.addEventListener('click',()=>{
    jugar(paper,"paper.png");
console.log("papel");
    
});

tijera.addEventListener('click',()=>{
    jugar(scissors,"scissors.png");
console.log("tijera");
    
});
inicializar.addEventListener('click',()=>{
    reinicio();
});

// funcion para opciones de la maquina


function jugar(opUser,img){
//imagenes
userImg.src="../imagenes/"+img;

const opMaquina=Math.floor(Math.random()*3);
console.log(opMaquina);

//calcular resultado
const res=calResultado(opUser,opMaquina);



switch(opMaquina){

    case 0:
        machineImg.src="../imagenes/rock.png";
        break;
    case 1:
        machineImg.src="../imagenes/paper.png";
        break;
    case 2:
        machineImg.src="../imagenes/scissors.png";
        break;



   }

  
switch(res){

    case empate:
            resulText.innerHTML="Empate!";
            console.log("Empate!");
        break;

    case ganar:
        resulText.innerHTML="Ganaste!";
        console.log("Ganaste!");
        contadorU++;
        break;

    case perder:
        resulText.innerHTML="Perdiste!";
        console.log("Perdiste!");
        contadorM++;
        break;


}

contUser.textContent=contadorU;
contMachine.textContent=contadorM;
partida();

}



// funcion para  comprobar opciones
function calResultado(opUser,opMaquina){
    if(opUser===opMaquina){

        return empate;
    }else if(opUser===rock){
        if(opMaquina===paper) return perder;
        if(opMaquina===scissors) return ganar;
    
    }else if(opUser==paper){
    
        if(opMaquina===scissors) return perder;
        if(opMaquina===rock) return ganar;
    
    }else if(opUser==scissors){
    
        if(opMaquina===rock) return perder;
        if(opMaquina===paper) return ganar;
    }


}
//funcion donde se compara los contadores y se da a elegir si se quiere salir de la partida

function partida(){

if(contadorU==5 || contadorM==5){

    if(contadorU > contadorM){

        if(window.confirm(" Usuario: "+contadorU+",Maquina: "+contadorM+" Has ganado la partida. ¿Deseas volver a empezar otra nueva?")){


            reinicio();
        }else{

            window.close()
        }

    }else{

        if(window.confirm(" Usuario: "+contadorU+",Maquina: "+contadorM+" Ha ganado la máquina. ¿Deseas volver a empezar otra nueva?")){


            reinicio();
        }else{

            window.close()
        }

    }


}

}
// funcion reinicio de partida

function reinicio(){

resulText.innerHTML="Elige una opcion:";
userImg.src="";
machineImg.src="";
contUser.textContent="";
contMachine.textContent="";
contadorU=0;
contadorM=0;

     

}
