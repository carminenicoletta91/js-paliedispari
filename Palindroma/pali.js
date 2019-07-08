// Faccio inserire una parola all'utente
var scelta;
scelta = prompt("Scegli una parola");
console.log(scelta);
// inverto la parola dell'utente
var invertita;
invertita = revString(scelta);
console.log(invertita);
// controllo se la parola è palindroma
var esito;
esito = palindroma(invertita , scelta);
console.log(esito);

// creo funzione per invertire una stringa
function revString( str ) {
    return str.split("").reverse().join("");
}
// creo funzione per comparare due stringhe
function palindroma( x , y ){
  if(  x === y ){
    return "La prola è palindroma";
  }else{
    return "La parola non è palindroma";
  }
}
