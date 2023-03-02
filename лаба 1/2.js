// задание 2 (объявить переменные и задать им значение)

let userName = "Nikita";
let town = "Mogilev";
let colorRed = "#FF0000";
let birthday = "31.01.2004";
let userAnswer = true;
let infinity = 1 / 0;
let number = 532;
let perimeter = 120 + "мм";
let message = "Введенные данные неверны";

// задание 3 (определить тип переменных)

let a = 5;
console.log(typeof a);  // number
let name = "Name";
console.log(typeof name);   // string
let i = 0;
console.log(typeof i);  // number
let double = 0.23;
console.log(typeof double); //number
let result = 1 / 0;
console.log(typeof result); // number
let answer = true;
console.log(typeof answer); //boolean
let no = null;
console.log(typeof no); // ошибка, null это не объект, а собственный тип null

// задание 4 (вычислить периметр прямоугольника)

let square = 45 * 21 + "мм"; 
console.log(square);    // 945мм

// задание 5 (вычислить количество квадратов 5х5 в прямоугольнике 45х21)

let task5 = (45 / 5) * ((21 - 21 % 5) / 5);
console.log(task5); // 36

// задание 6 (сравнить a и b)

let i6 = 2;
console.log(++i6);
console.log(i6++);
console.log(i6++);
console.log(++i6);
console.log(a6 = b6);   // 1 (true)



console.log("Привет" < "привет");   // false
console.log("Привет" < "Пока"); // false
console.log(45 < "53"); // true
console.log(false < 3); // true
console.log(true < "3");    // true
console.log(3 < "5мм"); // false
console.log(null !== undefined);    // true

alert(message);