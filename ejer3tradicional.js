/* 3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello 
hay que hacer un monitoreo constante, Cree una función de flecha que 
permita calcular la temperatura media de la luna a partir de la 
temperatura máxima y mínima de cada día */


function calcularTemperatura(temperaturaMaxima, temperaturaMinima) {
    let temperatura;
    let promedio;
    let temperaturaMedia;
    if(temperaturaMaxima > temperaturaMinima){
        temperatura = temperaturaMaxima - temperaturaMinima;
        console.log('----- TEMPERATURA DE LA LUNA -----')
        console.log('     Temperatura maxima: ' + temperaturaMaxima+ 'C°');
        console.log('     Temperatura minima: ' + temperaturaMinima+ 'C°');
        promedio = temperatura / 2;
        temperaturaMedia = promedio + temperaturaMinima;
        return console.log('     Temperatura media:  ' +temperaturaMedia+ 'C°');
    }else{
        console.log('----------------------------------------------')
        console.log('ALERTA!!! Las temperaturas estan mal digitadas')
    }
}

calcularTemperatura(50,20) // Respuesta si estan bien digitadas
calcularTemperatura(10,20) // Respuesta si no estan bien digitadas

