let sablesDeLuz = [];
sablesDeLuz.push(2,4,-8,5,-6);

let revisarSablesDeLuz = sablesDeLuz => {
    let filtroNumeros = sablesDeLuz.filter(function(filtro){
        return filtro < 0 ;
    })
    console.log('La cantidad de sables de luz con energia negativa fue de '+ filtroNumeros.length)
}
revisarSablesDeLuz(sablesDeLuz)