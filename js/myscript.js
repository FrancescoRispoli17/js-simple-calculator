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
        cont=0;
        screen.textContent+=numero;
    })
}
let numeri=[];
let operazioni=[];

operazionis(summ,summ.textContent);
operazionis(subtraction,subtraction.textContent);
// operazionis(multiplication,multiplication.textContent);
// operazionis(division,division.textContent);

function operazionis(operazione,simbolo){
    operazione.addEventListener('click', function(){
        numeri.push(screen.textContent);
        screen.textContent='';
        operazioni.push(simbolo);
     }) 
}
let cont=0;
risultato.addEventListener('click', function(){
        numeri.push(screen.textContent);
        cont=1;
        let ris=Number(numeri[0]);
        for(let i=0; i<operazioni.length; i++){
            if(operazioni[i]=='+')
                ris+=Number(numeri[i+1]);
            if(operazioni[i]=='-')
                ris-=Number(numeri[i+1]);
            // if(operazioni[i]=='&#215;')
            //     ris=Number(numeri[i+1]);
            // if(operazioni[i]=='&#247;')
            //     ris-=Number(numeri[i+1]);
            // console.log(ris);
        }
        screen.textContent=ris;
        numeri=[];
        operazioni=[];
     })


