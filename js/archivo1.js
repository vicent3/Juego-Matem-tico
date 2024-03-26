
let datos = [8,2,4,1,16];
let resultado = 0;
let cont=0;

function botonSI(numero){
    if(numero==1){
        resultado = resultado + datos[0];
        // Redirigir a otra página
        window.location.href = "tabla2.html";
        console.log(resultado);
    }if(numero==2){
        resultado = resultado + datos[1];
        window.location.href = "tabla3.html";
        console.log(resultado);
    }
    if(numero==3){
        resultado = resultado + datos[2];
        window.location.href = "tabla4.html";
        console.log(resultado);
    }
    if(numero==4){
        resultado = resultado + datos[3];
        window.location.href = "tabla5.html";
        console.log(resultado);
    }
    if(numero==5){
        resultado = resultado + datos[4];
        window.location.href = "resultado.html";
        console.log(resultado);
        document.write("<div> El numero que usted eligio es: "+resultado+"</div>");
        
    }
    
    
}
/*
function botonNO(numero){
    if(numero==1){
        resultado = resultado + datos[0];
        // Redirigir a otra página
        window.location.href = "tabla2.html";
        console.log(resultado);
    }if(numero==2){
        resultado = resultado + datos[1];
        window.location.href = "tabla3.html";
        console.log(resultado);
    }
    if(numero==3){
        resultado = resultado + datos[2];
        window.location.href = "tabla4.html";
        console.log(resultado);
    }
    if(numero==4){
        resultado = resultado + datos[3];
        window.location.href = "tabla5.html";
        console.log(resultado);
    }
    if(numero==5){
        resultado = resultado + datos[4];
        window.location.href = "resultado.html";
        console.log(resultado);
        document.write("<div> El numero que usted eligio es: "+resultado+"</div>");
        
    }
    
    
}
*/

function getResultado(){
    return resultado;
}
    