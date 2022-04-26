function sumArray (arregloIngresado) {

    var arreglo = arregloIngresado
 
    var sumatoria = 0
    
    for (var i = 0; i < arreglo.length; i ++) {
        
        var sumatoria = sumatoria + arreglo [i];
        
    }
    
    console.log(sumatoria)
}
sumArray([1,2,3])            //Comprobación 1
sumArray([10,3,10,4])        //comprobación 2
sumArray([-5,100])          //Comprobación 3



