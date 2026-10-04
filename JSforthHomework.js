var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",
 
price: function() {
let result =0;
for (let key in this){
        if (typeof this[key] !== 'function') {
        result += Number.parseFloat(services[key]);
    } else {}
    }
    return result
},

minPrice: function() {
    let max = Infinity;
    for (let key in this){
        if (typeof this[key] !== 'function') {
        let a = Number.parseFloat(services[key]);
        max = Math.min(max, a);
    } else {}
}
    return max
},

maxPrice: function() {
    let min = -Infinity;
    for (let key in this){
        if (typeof this[key] !== 'function') {
        let a = Number.parseFloat(services[key]);
        min = Math.max(min, a);
    } else {}
}
    return min
}
};
let result = services.price();
services ['Розбити скло'] = "200 грн";
total = result + Number.parseFloat(services['Розбити скло']);
console.log("Загальна вартість наданих послуг = " + total + " грн");
const minResult = services.minPrice();
console.log("Мінімальна ціна = " + minResult + " грн");
let maxResult = services.maxPrice();
console.log("Максимальна ціна = " + maxResult + " грн");
