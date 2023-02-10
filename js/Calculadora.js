//calculadora tareajavascript3
export class Calculadora{
    /**
     * 
     * @param {*} n1 
     * @param {*} n2 
     * @param {*} op 
     * constructor de la clase calculadora
     */
    constructor(n1,n2,op){
         this.n1=n1,
         this.n2=n2,
         this.op=op  
    }
   /**
    * @param función a la que se le pasa por parámetro un numero 
    *  */ 
   set setN1(n1){
    
    this.n1=n1;
    }
    /**
     * @return función que devuelve un dato de tipo numero
     */
   get getN1(){
    
    
        return this.n1;
    }
    /**
     * @param función a la que se le pasa por parámetro un número
     */
   set setN2(n2){
    
        this.n2=n2;
        
    }
    /**
     * @return función que devuelve un dato de tipo numérico
     */
    
   get getN2(){
        
        
     return this.n2;
    }
    /***
     * @param función a la que se le pasa por parámetro una cadena de texto con el operador de la calculadora
     */
   set setOp(op){
    
        this.op=op;
        }
    /**
     * @return función que devuelve una cadena de texto con el operador de la calculadora
     */
    
   get getOp(){
        
        
         return this.op;
    }
    /**
     * 
     * @return función que devuelve el resultado de una suma
     */
    
    sumar(){
    
        var sumar=this.n1+this.n2;
    
        return sumar;
    }
    /**
     * 
     * @return función que devuelve el resultado de una resta
     * 
     */
    restar(){
    
        var resta=this.n1-this.n2;
    
        return resta;
    }
    /**
     * 
     * @return función que devuelve el resultado de una multiplicación
     */
    mult(){
    
        var mult=this.n1*this.n2;
    
        return mult;
    }
    /**
     * 
     * @return función que devuelve el resultado de una division
     */
    div(){
    
        var div=this.n1/this.n2;
    
        return div;
    }
    /**
     * función para limpiar los campos
     */
    
    limpiar(){
    
       
    resultado.innerHTML = "";
    decimales = false;
    this.n1 = null;
    this.n2= null;
    this.op=null;
    
    
    }
    
    
    
}
