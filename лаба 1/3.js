let answer = prompt("Из какого я города?", '');
if (answer != "Могилёв")
    alert("Ответ неверный!");
else
    alert("Ответ верный!");

let login = prompt("Введите логин", '');
let password = prompt("Введите пароль", '');
if (login != "Nikita" && password != "31012004")
    alert("Неверный логин или пароль!");
else
    alert("Вход успешно выполнен!");

let Russian = confirm("Студент сдал русский язык?");
let Math = confirm("Студент сдал математику?");
let English = confirm("Студент сдал английский?");
if (Russian && Math && English)
    alert("Студент переведен на следующий курс.");
else if (!Russian && !Math && !English)
    alert("Студент отчислен.");
else
    alert("Студента ожидает пересдача.");

let a = prompt("Введите число a:", '');
let b = prompt("Введите число b:", '');
let sum = Number(a) + Number(b);
alert("Сумма чисел равна: " + sum);

console.log(true + true);   // 2
console.log(0 + "5");   // 05
console.log(5 + "мм");  // 5мм
console.log(8 / Infinity);  // 0
console.log(9 * "\n9"); // 81
console.log(null - 1);  // -1
console.log("5" - 2);   // 3
console.log("5px" - 3); // NaN
console.log(true - 3);  // -2
console.log(7 || 0);    // 7

for (let i = 1; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log(i + 2);
        continue;
    }
    console.log(i + "мм");  // 1мм 4 3мм 6 5мм 8 7мм 10 9мм 12
}