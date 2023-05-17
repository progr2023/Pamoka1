window.onload = function () {
    let x = +prompt ("Įveskite amžių. Patikrinsime, ar jis yra tinkamas");
alert ("Ar skaičius yra tinkamas" + arTinkamas(x));
  
}


function arTinkamas(x) {
    return x > 0 && x < 120;
    
   
    
}