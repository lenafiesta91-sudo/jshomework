var str = "Wonderful, Joyful, Happiness, Time, Task, Apple";
var arr = str.split(", ");
for(let i=0; i<arr.length; i++) {
    if (arr[i].search(/^[^aA]{6,}$/) !== -1) {
        console.log(arr[i]);
    }
}
