/*1.	 Напишите функции, которые рассчитывают площадь, диаметр и длину
 окружности круга. Радиус круга вводит пользователь. Реализуйте функции
  как Function Declaration и Function Expression, функции-стрелки.*/

function Square (R) {
    result = Math.PI * (R ** 2);
    alert(`Площадь равна ${result}`);
}

let Diameter = function(R){
    result = 2 * R;
    alert(`Диаметр равен ${result}`);
}

let Length = R => alert(2 * Math.PI * R);

let exit = true;

while (exit) 
{
    do {
        radius = +prompt("Введите радиус");
    } while (radius < 0)

    x = +prompt ("Найти: (1 - площадь, 2 - диаметр, 3 - длину окружности, 0 - выход")  

    switch(x) 
    {
        case 0:
            exit = false;
            break;
        case 1:
            Square(radius);
            break;
        case 2: 
            Diameter(radius);
            break;
        case 3: 
            Length(radius);
            break;
        default:
            alert("Некорректный ввод");
            break;             
    }
}
