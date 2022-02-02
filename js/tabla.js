

function creartabla () {
    
   filas = document.getElementById("filas").value;
   columnas = document.getElementById("columnas").value;
   //var tabla = document.getElementById("dibujartabla");
   let contenidoTabla = "";
   contenidoTabla +='<table border="1">';
    for (var i = 0; i < filas; i++) {   
        //contenidoTabla +='</br>';
        contenidoTabla +='<tr>';
        for(var j = 0; j < columnas; j++){
       contenidoTabla +='<td>';
       contenidoTabla +=(j);
       contenidoTabla +='</td>';
          //  console.log(i+j);
        }
       contenidoTabla +='</tr>';
    }
   contenidoTabla +='</table>';

   console.log(contenidoTabla);

   document.getElementById("dibujartabla").innerHTML=contenidoTabla;

}
