let count = (1000 - 100)+1;
function checkProbabilityTheory(count){
    let odds = 0;
    let evens = 0;
    
    for (var i=100; i<=1000; i++){
        var rnd = Math.random(); 
    rnd=Math.floor((rnd*count)+100);
    
    if (rnd % 2 === 0){
        evens++;
    } else {
       odds++;
    }   
    }  
    let percentOdds = Math.round((odds/count)*100);
    let percentEvens = Math.round((evens/count)*100);
    let coef = percentEvens / percentOdds;
    var coeficient = coef.toFixed(3);
    console.log("Кількість чисел: ", (evens+odds));
    console.log("Парних: ", evens);
    console.log("Не парних: ", odds);
    
    console.log("percentOdds: ", percentOdds, "%");
    console.log("percentEvens: ", percentEvens, "%");
    console.log("coef: ", coeficient);
    return {
        odds,
        evens,
        percentOdds,
        percentEvens,
        coeficient
    }
}  
checkProbabilityTheory(count)
