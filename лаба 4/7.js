let x = 0;
let y = 0;

while (true) 
{
    let command = prompt("Введите команды (left, right, up, down)");
    let commandArray = command.split(" ");

    for (let i = 0; i < commandArray.length; i++)
    {
        switch (commandArray[i]) {
            case "left":
                x -= 10;
                console.log(`Текущие координаты объекта: (${x}, ${y})`);
                break;

            case "right":
                x += 10;
                console.log(`Текущие координаты объекта: (${x}, ${y})`);
                break;

            case "up":
                y += 10;
                console.log(`Текущие координаты объекта: (${x}, ${y})`);
                break;

            case "down":
                y -= 10;
                console.log(`Текущие координаты объекта: (${x}, ${y})`);
                break;

            default:
                console.log("Неверная команда");
                break;
        }
    }

    let answer = confirm("Продолжить? (да/нет)");
    if (!answer)
    {
        break;
    }
}