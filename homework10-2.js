var str = "Wonderful, Joyful, Happiness, Time, Task, Apple";
var a = str.replaceAll(", ","\n");
var re = /^[^aA\s,]{6,}$/gim;
var res = a.match(re);
console.log(res);
