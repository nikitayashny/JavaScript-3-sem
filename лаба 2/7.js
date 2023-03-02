/*7.	Разработайте геометрический калькулятор для расчета параметров 
треугольника: площадь, периметр, высота, cos, sin, tg, ctg. Пользователь 
указывает длину катетов.*/

let exitСalculator = true;

do {
    FirstCathet = +prompt("Введите длину первого катета:");
    SecondCathet = +prompt("Введите длину второго катета:");

} while(Number.isNaN(+FirstCathet) && Number.isNaN(+SecondCathet));  

let hypotenuse = Math.sqrt(FirstCathet ** 2 + SecondCathet ** 2);

while (exitСalculator) {
    x = +prompt("Найти: (1 - площадь , 2 - периметр, 3 - высота, 4 - cos, 5 - sin, 6 - tg, 7 - ctg");    

    switch(x) {
        case 0: 
        exitСalculator = false; 
            break;
        case 1: 
            Square(FirstCathet, SecondCathet); 
            break;
        case 2:  
            Perimeter(FirstCathet, SecondCathet, hypotenuse);   
            break;
        case 3:
            Height(FirstCathet, SecondCathet);
            break;
        case 4:
            Cos(FirstCathet, hypotenuse);
            break;
        case 5:
            Sin(SecondCathet, hypotenuse);
            break;
        case 6:
            Tg(FirstCathet,SecondCathet);
            break;
        case 7:
            Ctg(FirstCathet, SecondCathet);
            break;
        default:
            alert("Некорректный ввод");
            break;
  }
}

function Square(FirstCathet, SecondCathet) {
    alert(`Площадь треугольника равна ${0.5 * FirstCathet * SecondCathet}`);
}

function Perimeter(FirstCathet, SecondCathet, hypotenuse){
    alert(`Периметр треугольника равен ${ FirstCathet + SecondCathet + hypotenuse}`);
}

function Height(FirstCathet, SecondCathet){
    alert(`Высота треугольника равна ${FirstCathet * (SecondCathet/FirstCathet)}`);
}

function Cos(FirstCathet, hypotenuse){
    alert(`Косинус треугольника равна ${FirstCathet/hypotenuse}`);
}

function Sin(SecondCathet, hypotenuse){
    alert(`Синус треугольника равна ${SecondCathet/hypotenuse}`);
}

function Tg(FirstCathet, SecondCathet){
    alert(`Тангенс треугольника равна ${FirstCathet/SecondCathet}`);
}

function Ctg(FirstCathet,SecondCathet){
    alert(`Катангенс треугольника равна ${SecondCathet/FirstCathet}`);
}