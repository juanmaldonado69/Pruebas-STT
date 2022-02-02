function Union(conjunto1, conjunto2){
    return [...new Set([...conjunto1,...conjunto2])];
}

function Interseccion(conjunto1, conjunto2){
    return [...new Set(conjunto1.filter(valor => conjunto2.includes(valor)))];
}

function Diferencia(conjunto1,conjunto2){
    return [
                [...new Set(conjunto1.filter(valor => !conjunto2.includes(valor)))],
                [...new Set(conjunto2.filter(valor => !conjunto1.includes(valor)))]
            ];
}

function DiferenciaSimetrica(conjunto1,conjunto2){
    [array1, array2] = Diferencia(conjunto1,conjunto2);
    return [...array1,...array2];
}
function  generateRandomTexto  ()  {    
    let caracteres ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 
    let arraytexto1 = [];  
    let arraytexto2 = [];     
    const caracterestamanio = caracteres.length;
    for ( let i = 0; i < 20; i++ ) {
        if(i < 9){            
            arraytexto1.push(caracteres.charAt(Math.floor(Math.random() * caracterestamanio)));
        }else{            
            arraytexto2.push(caracteres.charAt(Math.floor(Math.random() * caracterestamanio)))
        }        
    }
    document.getElementById("listadoLetras").innerHTML= '<strong>listado 1=</strong>' +arraytexto1 +"<strong> listado 2=</strong> "+arraytexto2;
    document.getElementById("AUB").innerHTML=Union(arraytexto1,arraytexto2);
    document.getElementById("AnB").innerHTML=Interseccion(arraytexto1,arraytexto2);
     [AB, BA] = Diferencia(arraytexto1,arraytexto2);
    document.getElementById("ADB").innerHTML= "<strong>A-B= </strong>" + AB;
    document.getElementById("BDA").innerHTML= "<strong>B-A= </strong>" + BA;
    document.getElementById("AmenosB").innerHTML=DiferenciaSimetrica(arraytexto1,arraytexto2);
}