window.a;
alert(a);     // a is not defined

alert (b);
window.b = 2; // b is not defined

alert (c);
window.c = 2;
let c;        // Невозможно получить доступ к 'c' до инициализации

alert (d);
window.d = 2;
var d;        //undefined

alert (e);
let e = 2;    // Невозможно получить доступ к 'e' до инициализации//

let f = 2;
window.f = 3;
alert(f);     //2

var g = 2;
window.g = 3; //переопределение глобальной переменной
alert(g);     //3