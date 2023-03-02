let week = {
    1: "пн",
    2: "вт",
    3: "ср",
    4: "чт",
    5: "пт",
    6: "сб",
    7: "вс"
};

let day = 1;
let end = 1;

while (end == 1)
{
    day = parseInt(prompt("Введите номер дня недели 1-7"));
    if (day >= 1 && day <= 7)
    {
        console.log(day);
        alert(`Под номером ${day} - ${week[day]}`);
    }
    else
    {
        alert("Такого дня недели нет")
    }    

    end = confirm("Продолжить?");
}