/*
Partite dall’esercizio precedente introducendo un array
contenente oggetti con autore e titolo e ricercando i titoli che
corrispondono ad una sequenza di caratteri. Se corrisponde solo
un libro visualizzate autore e titolo (ad es. nella console),
altrimenti il numero di libri corrispondenti.
Come per l’esercizio precedente, impostate i valori in variabili,
senza complicarvi la vita con l’interfaccia grafica.
*/

// Import stylesheets
import './style.css';

// Write Javascript code!

const AutoriTitoli=[
  {autore:"Dante", titolo:"La Divina Commedia"},
  {autore:"Svevo", titolo:"Senilità"},
  {autore:"Piranello", titolo:"Il fu Mattia Pascal"},
  {autore:"Manzoni", titolo:"I promessi sposi"},
];
let stringa="ma";
const conta=[];
AutoriTitoli.forEach(cerca);

function cerca(value){
 if(value["autore"].toLowerCase().includes(stringa.toLowerCase()) || value["titolo"].toLowerCase().includes(stringa.toLowerCase())){
   conta.push(value);
 }
}

if(conta.length>1){
  console.log(conta.length);
}
else{
  console.log(conta[0]);
}
 



