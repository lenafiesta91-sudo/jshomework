let x=2;
let y=3;
function pow(x,y){
    let total=1;
    let notValidNumber = "Помилка";
    if (typeof x === 'number' && 
            typeof y === 'number' && 
            !isNaN(x) && 
            !isNaN(y) && 
            y>0 && 
            x>0 && 
            Number.isInteger(x) && 
            Number.isInteger(y)) { 
    for(let a=0; a<y; a++) {
        total=total*x;
    }
    } else {
        return notValidNumber; 
    }
    return total; 
}
let result = pow (x,y);
console.log(result); 
