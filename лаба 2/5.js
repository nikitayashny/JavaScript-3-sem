/*5.	Пользователь вводит данные. Если он ввел число, то преобразуйте его 
в 16-ричную систему счисления (вывод в верхнем регистре). Если число дробное
 – округлите его до наибольшего, наименьшего и ближайшего целого. 
 Если пользователь ввел текст, то преобразуйте его к верхнему и нижнему регистру.*/

function convert(n) {
    n = n.toString(16).toUpperCase();
    alert( n);
};

function round(n) {
    alert(`Округление числа до наибольшего ${Math.ceil(n)}, наименьшего ${Math.floor(n)} и ближайшего целого ${Math.round(n)}`);
};

function conversion(n){
    alert(`Преобразование данных к верхнему - ${n.toUpperCase()} и нижнему регистру - ${n.toLowerCase()}`);
}

userChoise = prompt("Введите данные: ");

if (!Number.isNaN(+userChoise)) {
    if (Number.isInteger(+userChoise)) {
        convert(+userChoise);
    }
else {
    round(+userChoise);
}
}
else if(typeof(userChoise) == "string") {
    conversion(userChoise);
}
else {
    alert("Некорректный ввод")
}