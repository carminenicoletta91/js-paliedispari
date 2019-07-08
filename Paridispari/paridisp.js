// faccio scegliere all'utente tra pari e dispari
var sceltaUtente = prompt( "ciao scegli se il numero sarà pari o dispari" );
console.log( sceltaUtente );

var num1,num2;
var somma;
var risultatopartita,esito;
// genero due numeri casuali
num1 = generaNum();
num2 = generaNum();
console.log( "Il num1 è:" +num1 );
console.log( "Il num2 è:" +num2 );

// sommo due numeri casuali
somma = somma( num1 , num2 );
console.log( "La somma è:" + somma );
// verifico se la somma sarà pari e dispari
risultatopartita = paridispari( somma );
console.log( "Il risultato della partita è:" + risultatopartita );
// comunico l'esito all'utente
esito = esitopartita( sceltaUtente , risultatopartita );
console.log( esito );




// creo funzione per generare numeri casuali da 1 a 5
function generaNum (){
  var risultato = Math.floor(Math.random() * (5)+1);
  return risultato;
}
/* creo funzione per verificare se il numero
 della somma sarà pari o dispari*/
function paridispari( x ){
  if ( x % 2 == 0 ){
    return "pari";
  }else {
    return "dispari";
  }
}
// creo funzione che somma due numeri
function somma( x , y) {
var z = x + y;
return z;
}
// creo funzione per controllare se l'utente ha vinto o perso
function esitopartita( x , y ){
  if ( x === y){
    return "Hai vinto";
  }else{
    return "Hai perso";
  }
}
