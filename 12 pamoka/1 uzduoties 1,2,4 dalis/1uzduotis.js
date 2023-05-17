window.onload = function () {
    let x = 12;
    let rezultatas = veiksmas (x);
    console.log (rezultatas);

let y = prompt ("Įveskite Y");
let z = prompt ("Įveskite X");
let rezult = veiksmas2 (y, z);
console.log (rezult);



let a = prompt ("iveskite pirma skaiciu");
let b = prompt ("iveskite antra skaiciu");
let rezult2 = sudetiSkaiciusKaipTeksta (a,b);
console.log (rezult2);

}




function veiksmas (x){
    return x*2 - 10;

}

function veiksmas2(a,b){
    return a * b / (a + b);
}


function sudetiSkaiciusKaipTeksta (a, b){
    return a + "" + b;
}

