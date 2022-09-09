/* 5. PROBLEMA: Watto paga a su personal de ventas un salario de 
3500000 mensuales, más una comisión de 1500000 por cada 
licencia de software vendida menos el 5% de deducciones por 
impuestos. Codifica un programa que calcule e imprima el 
salario mensual de un vendedor dado */

let valorSalario = 3500000;
let valorComision = 1500000;

let calcularSalario = venta => {
    if (venta > 0){
        let montoComision = (valorComision * venta); 
        let totalSalario = valorSalario + montoComision;     
        let deduccion = (totalSalario * 0.5) /100;       
        let salarioMes =  totalSalario - deduccion ;   
        console.log('--------- Cuenta de pago mensual ---------')         
        console.log("Salario neto:                $"+totalSalario);
        console.log("Valor de la comisión:        $"+valorComision);
        console.log("Comisión por ventas del mes: $"+montoComision);
        console.log("Deducción:                   $"+deduccion);
        console.log("TOTAL Salario Mes:           $"+salarioMes);
        console.log('-------------------------------------------')
    }else{
        valorComision =  0;
        console.log('--------- Cuenta de pago mensual ---------')         
        console.log("Salario neto:                $"+valorSalario);
        console.log("Valor de la comisión:        $"+valorComision);
        console.log("TOTAL Salario Mes:           $"+valorSalario);
        console.log('-------------------------------------------')
    }
}

calcularSalario(5) // Respuesta si hay ventas
calcularSalario(0) // Respuesta si no hay ventas


