function iseven(num) {
    if( num % 2 === 0 ) {
        return true;
    }
    return false;
 }
 /*
    restituisce un numero random in un range min e max
 */
 function getrandomumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
 /*
    restituisce una lista di X(numeri) random tra min e max
 */
 function getrandomnumberslist(nElements, min, max) {
    let numbers = [];
    for(let i = 0; i < nElements; i++) {
        numbers.push(getRandomNumber(min, max));
    }
    return numbers;
 }
 // restituisce una lista lista di numeri che non si ripetono
 function getnonrepetelistnumber(nElements, min, max){
    let numbers = [];
    while(numbers.length < nElements){
       let numeroRipetuto = getrandomumber(min, max)
       if (!numbers.includes(numeroRipetuto)){
          numbers.push(numeroRipetuto)
       }
    }
    return numbers
 }
 function numeroutente (){
    let NumeroInserito = 0;
    do{
       NumeroInserito = Number(prompt("inserisci un numero da 1 a 100"));
       if(isNaN(NumeroInserito)){
          alert("puoi inserire solo numeri");
       } if (NumeroGiaInserito.includes(NumeroInserito)){
          alert("hai già inserito questo numero")
       } else(NumeroInserito.push(NumeroGiaInserito));
         
    } while (isNaN(NumeroInserito))  NumeroGiaInserito.includes(NumeroInserito);
    return NumeroInserito;
 }
 //
 //_________________________________________________
 //
 //                   MAIN
 //__________________________________________________
 
 // creo una costante di numenri "bomba" che non si ripetono
 // const NumeriBomba = getnonrepetelistnumber(2, 1, 10); // due numeri bomba da 1 a 10
 // // console.log(NumeriBomba);
 // let NumeroInserito = 0;
 // let NumeroGiaInserito =[];
 
 
 // genero i livelli di difficoltà
 let LivelloDifficolta
 do{
     LivelloDifficolta = Number(prompt("inserisci il livello di difficolà tra 0 e 2"));
 }while(isNaN(LivelloDifficolta) || LivelloDifficolta < 0 || LivelloDifficolta > 2 ){
 
 }
 
 let totalnumbers;
 if(LivelloDifficolta === 0){
    totalnumbers = 100;
 }else if(LivelloDifficolta === 1){
    totalnumbers = 80;
 }else{
    totalnumbers = 50;
 }
 console.log(totalnumbers)
 // CREO LE BOMBE
 const bombs = [];
 let BombExploded = false;
 let attemps = [];
 const numberBombs = 16;
 const numberattemps = totalnumbers - numberBombs;
  while(bombs.length < numberBombs){
     const bomb = getrandomumber(1, totalnumbers);
     if(bombs.includes(bomb) === false){
        bombs.push(bomb);
     }
  }
   console.log(bombs)
 while(BombExploded === false && attemps.length < numberattemps){ // al posto di "bombExploded === falso "possiamo negare la variabile con il ! quindi in questo caso "!bombsExploded".
     let userNumber;
     do{
        userNumber = Number(prompt("inserisci un numero da 1 a 100"));
     }while(isNaN(userNumber) || userNumber < 1 || userNumber > totalnumbers)
 
     if(bombs.includes(userNumber)){
        BombExploded = true;
     } else if(attemps.includes(userNumber)){
        alert("il numero lo hai già inserito");
     }else{
        attemps.push(userNumber);
     }
 }
 
 // console.log("hai perso")
 if(BombExploded){
    alert(`HAI PERSO il tuo punteggio è ${attemps.length}`)
 }else{
    alert("hai vinto!!!!!")
 }