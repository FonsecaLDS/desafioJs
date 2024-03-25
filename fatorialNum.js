function fatorial(numero){
    var resultado = numero;

    while( numero - 1 ){
        numero--
        resultado = resultado *= numero
    }

    return resultado;
}


console.log(fatorial(5));