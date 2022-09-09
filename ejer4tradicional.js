/* PROBLEMA: QUI-GON JINN está encargado de revisar n sables 
de luz y contabilizar la cantidad de energía de sables que tienen 
negativa en Joules 
Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables 
defectuosos con energía negativa fue de 2 sables. */ 

let sablesDeLuz = [];
sablesDeLuz.push(2,4,-8,5,-6);

function revisarSablesDeLuz(sablesDeLuz){
    let filtroNumeros = sablesDeLuz.filter(function(filtro){
        return filtro < 0 ;
    })
    let negativos = filtroNumeros.length;
    console.log('La cantidad de sables de luz con energia negativa fue de '+ negativos)
}

revisarSablesDeLuz(sablesDeLuz)





