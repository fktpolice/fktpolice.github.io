const botonNumeros = document.getElementsByName('data-number')
const botonOpera = document.getElementsByName ('data-opera')
const botonIgual = document.getElementsByName('data-igual')[0]
const botonDelete = document.getElementsByName('data-delete')[0]
const Switch = document.getElementById('switch')

const Switch2 = document.getElementById('switch2')
const body = document.querySelector('body')
const contenedor = document.getElementById('contenedor')

let Result = document.getElementById('resultado')
let opeActual = '';
let opeAnterior ='';
let operacion = undefined; 


botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
    
});



botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        seleccionarOperacion(boton.innerText)

    })
    
});


botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay()

})


botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});



function seleccionarOperacion(op){
    if (opeActual=='') return;
    if (opeAnterior !== ''){
        calcular()
    }
    operacion= op.toString();
    opeAnterior = opeActual;
    opeActual = '';

}



function calcular(){
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual)

    if(isNaN(anterior) || isNaN(actual) )return;
    switch(operacion){
        case '+':
            calculo =anterior + actual;
            break;
            case '-':
                calculo = anterior - actual;
                break;
                case 'x':
                    calculo= anterior * actual;
                    break;
                    case '/':
                    calculo= anterior / actual;
                    break;
                    default:
                        return;

    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}


function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear (){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined
}


function actualizarDisplay (){
    Result.value = opeActual;
}

clear();


Switch2.addEventListener('click', () =>{
    
    body.classList.toggle('daymode');
    

})
