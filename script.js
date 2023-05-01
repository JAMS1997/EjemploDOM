const h1     = document.querySelector('h1');
const input  = document.querySelector('input');
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2');
const btn    = document.querySelector('#btncalcular');
const presult= document.querySelector('#result');
const form   = document.querySelector('#form');

//Par adejar el html mas limpio sin codigo JS se usa addEventListener y agregamos evntos

//llamamos variable.addEventListener('nombreDelEvento',codigo que vamos a llamar)
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(){
//Los inputs trane texto por defecto, para sumarlo ahay que parsearlo
//hay dos formas con number() y parseInt()
    event.preventDefault();//Evita que se recargue la pagina al mandar el formulario
    const sumaInputs = Number(input1.value) + parseInt(input2.value);
    presult.innerText ="Resultado" +  sumaInputs;
}