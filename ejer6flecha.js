// declarando la funcion
let crearAprendiz = (nombre, planeta, edad, estatura, clasificarAprendiz) => {
    let datosAprendiz={
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura,
    }   
    clasificarAprendiz(datosAprendiz) 
}

// llamando la funcion
crearAprendiz('Camilo', 'Tierra', 34, 1.70, function(aprendiz){
    if(aprendiz.edad>=15){
        console.log("Usted se va para la fuerza sable de luz");
    }else{
        console.log("Usted se va para la clase de la fuerza");
    }
})