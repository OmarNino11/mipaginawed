
let operacion = '';

function menu(){
    operacion = prompt(`\nCalculadora basica
        1 - suma
        2 - resta
        3 - multiplicacion
        4 - division
        0 - salir
        
        elije una opcion:`);
        
    if(operacion === '1' || operacion === '2' || operacion === '3' || operacion === '4'){
        capturaDatos();
        menu();
    }else if (operacion === '0' || operacion === null){
        alert ('fin de la operacion');
    }else{
        alert('opcion No valida');
        menu();
    }
}

function capturaDatos(){
    let num1, num2;
    while (isNaN(num1)){
        num1 = prompt('ingrese el primer numero: ');
    }
    while(isNaN(num2)){
        num2 = prompt('ingrese segundo numero');
    }
    realizarOperacion(Number(num1), Number(num2), operacion);
}

function realizarOperacion(num1,num2,operacion){
    if (operacion === '1')
        alert(`el resultado de la suma es: ${num1 + num2}`); 
    else if (operacion ==='2')
        alert(`el resultado de la resta es: ${num1-num2}`);
    else if (operacion ==='3')
        alert(`el resultado de la multiplicacion es: ${num1*num2} `);
    else if (operacion ==='4'){
        if(num2 !== 0)
            alert(`el resultado de la division es: ${num1/num2}`);
        else
            alert("no se admite division x 0");
    }
    
}

menu();
    