function getRandomInt() {
    let arreglonumeros = [];
    let respuesta = '';
    for(var i = 0; i<20 ;i++){ 
        //guardamos los numeros en un arreglo        
         arreglonumeros.push(Math.floor(Math.random() * (100 - 1)) + 1);
    }
    //procedemos a ordenar
    for(let i=0; i<arreglonumeros.length; i++){
        //movemos a la derecha si es menor
        for(let j=0; j<arreglonumeros.length-1; j++){
            if(arreglonumeros[j+1]<arreglonumeros[j]){
                let aux =arreglonumeros[j];
                arreglonumeros[j] = arreglonumeros[j+1];
                arreglonumeros[j+1] = aux;
            }
        }  
    }
    
    console.log(arreglonumeros);
    document.getElementById("listadoNumeros").innerHTML= arreglonumeros;
   
  }

  