'use strict';
const screen=document.querySelector('#screen');
const summ=document.querySelector('#summ');
const subtraction=document.querySelector('#subtraction');
const multiplication=document.querySelector('#multiplication');
const division=document.querySelector('#division');
const canc=document.querySelector('.delete');
const numbers=document.querySelector('.numbers');

let numeri=[];
let operazioni=[];
let cont=0;

numbers.addEventListener('click', function(event){
    const currentEleemt=event.target;
    if(isNaN(parseInt(currentEleemt.innerText))){
        numeri.push(screen.innerText);
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
    }
    else{
        if(screen.innerText == '0'||cont == 1)
            screen.innerText='';
            cont=0;
            screen.innerText+=currentEleemt.innerText;
    } 
    
    
});

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

// risultato.addEventListener('click', function(){
//         numeri.push(screen.textContent);
//         cont=1;
//         let ris=Number(numeri[0]);
//         for(let i=0; i<operazioni.length; i++){
//             if(operazioni[i]=='+')
//                 ris+=Number(numeri[i+1]);
//             if(operazioni[i]=='-')
//                 ris-=Number(numeri[i+1]);
//             // if(operazioni[i]=='&#215;')
//             //     ris=Number(numeri[i+1]);
//             // if(operazioni[i]=='&#247;')
//             //     ris-=Number(numeri[i+1]);
//             // console.log(ris);
//         }
//         screen.textContent=ris;
//         numeri=[];
//         operazioni=[];
//      })
     canc.addEventListener('click', function(){
        numeri=[];
        operazioni=[];
        cont=0;
        screen.textContent='0';
     })


