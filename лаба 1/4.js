let a = prompt("Введите число:", 100);
while(Number(a) < 100)
    a = prompt("Введите число:", 100);

    let day = prompt("Введите номер дня недели:", '');
switch(day){
    case "1": 
        alert("Понедельник.");
        break;
    case "2": 
        alert("Вторник.");
        break;
    case "3": 
        alert("Среда.");
        break;
    case "4": 
        alert("Четверг.");
        break;
    case "5": 
        alert("Пятница.");
        break;
    case "6": 
        alert("Суббота.");
        break;
    case "7": 
        alert("Воскресенье.");
        break;
    default:
        alert("Неверно введены данные.");
}