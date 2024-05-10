'use strict';
const screen=document.querySelector('#screen');

const seven=document.querySelector('#seven');
const eight=document.querySelector('#eight');
const nine=document.querySelector('#nine');
const five=document.querySelector('#five');
const four=document.querySelector('#four');
const three=document.querySelector('#three');
const two=document.querySelector('#two');
const one=document.querySelector('#one');
const six=document.querySelector('#six');
const zero=document.querySelector('#zero');
const summ=document.querySelector('#summ');
const subtraction=document.querySelector('#subtraction');
const multiplication=document.querySelector('#multiplication');
const division=document.querySelector('#division');
const risultato=document.querySelector('.ris');


addnum(seven.textContent,seven);
addnum(eight.textContent,eight);
addnum(nine.textContent,nine);
addnum(four.textContent,four);
addnum(five.textContent,five);
addnum(six.textContent,six);
addnum(one.textContent,one);
addnum(two.textContent,two);
addnum(three.textContent,three);
addnum(zero.textContent,zero);

function addnum(numero,tasto){
    tasto.addEventListener('click', function(){
        if(screen.textContent == '0'||cont == 1)
            screen.textContent='';

        screen.textContent+=numero;
    })
}



