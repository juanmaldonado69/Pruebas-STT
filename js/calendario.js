function bisiesto (){
   
    var Anio = document.getElementById("anio").value;
    console.log(Anio);
        //
        if ((Anio % 4 == 0) ){
            document.getElementById('respuesta').innerHTML = " Si es bisiesto. ";      
        }
        else {
            document.getElementById('respuesta').innerHTML = ( "No es bisiesto. ");
        }     
      
}


