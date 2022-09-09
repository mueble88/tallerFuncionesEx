let calcularDistancia = (x1,y1,x2,y2) => (Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))) 

// llamar a la funcion
let distancia = calcularDistancia(0,0,12,0)
console.log(`la distancia es ${distancia}`)

// let calcular = (numero) => Math.pow(numero, 3);
// if (calcular(2) > 8){
//     console.log('frondend');
// }else{
//     console.log('backend');
// }