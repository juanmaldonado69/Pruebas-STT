function PintarTabla(bmx){
    let valores = bmx.bmx.series[0].datos;
    
    let tabla = `<h5>${bmx.bmx.series[0].titulo}</h5>
                    <table border="1">
                    <tr>
                        <th>Fecha</th>
                        <th>Valor</th>
                    </tr>`;
    valores.forEach(fila=>{
        tabla += `<tr>
                    <td>${fila.fecha}</td>
                    <td>$ ${fila.dato}</td>
                </tr>`;
    });

    tabla+=`</table>`;

    document.getElementById('apirest').innerHTML = tabla;
}

let token = '453fb48293bf75b6edff538602d75182ab27c9dfdd360805e793721154031a25';

function ConsumirApi(){
    //consultamos la fecha de hoy y la guardamos en la variable hoy
    let hoy = new Date();
    //tomamos la variable hoy y la pasamos a formato YYYY-mm-dd y guardamos en la variable fechaFin
    let fechaFin = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    //  consultamos la fecha de hoy en milisegundos y la guardamos en la variable fechaInicio
    let fechaInicio = Date.now();
    // Consultamos cuantos milisegundos tiene un dia y lo guardamos en la variable milisegundos
    let milisegundos = 1000*60*60*24;
    // descontamos de la fechaInicio menos 5 dias en milisengunos 
    fechaInicio=fechaInicio-(milisegundos*5);
    // formatemos los milisegundos a fecha y guardamos en fechaInicio
    fechaInicio = new Date(fechaInicio);
    // tomamos la variable fechaInicio y la pasamos a formato YYYY-mm-dd y guardamos en la variable fechaInicio
    fechaInicio = fechaInicio.getFullYear()+'-'+(fechaInicio.getMonth()+1)+'-'+fechaInicio.getDate();
    // enviamos la peticion desde  la fecha 5 dias atras hasta el dia de hoy y la respuesta la convertimos en un JSON
    let peticion = fetch(`https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/${fechaInicio}/${fechaFin}?token=${token}`)
        .then(respuesta1=>respuesta1.json())       
        .then(respuesta2=>PintarTabla(respuesta2));

        
}

window.addEventListener('load', ()=>{
    ConsumirApi();
});