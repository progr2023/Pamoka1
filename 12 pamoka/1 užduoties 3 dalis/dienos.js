window.onload = function () {
    let x = "pirmadienis";
    let x3 = trisKartusIsvedimas (x);
    console.log (x3);


    console.log (trisKartusIsvedimas("tigras"));

}
function trisKartusIsvedimas(zodis){
    return zodis + " " + zodis + " " + zodis;
    
}
