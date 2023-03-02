/*Реализуйте функцию с тремя параметрами. Первый параметр по умолчанию. 
Третий параметр вводит пользователь. Функция возвращает строку из трех параметров.*/

function returnParameters(firstParm = "Привет", secondParm, thirdParm){
    alert(firstParm + ' ' + secondParm + ' ' + thirdParm);
}
returnParameters(undefined, 'Никита',  prompt("Введите параметр: "));