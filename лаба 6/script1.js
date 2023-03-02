const Square = 
{
    width: '200px',
    height: '200px',
    border: '5px solid black',
    background: 'yellow'
}

const smallSquare =
{
    width: '100px',
    height: '100px',
    border: '5px solid black',
    background: 'yellow'
}

const Circle = {
    width: '200px',
    height: '200px',
    border: '5px solid black',
    borderRadius : '50%',
    background: 'white'
}

const greenCircle = {
    width: '200px',
    height: '200px',
    border: '5px solid black',
    borderRadius : '50%',
    background: 'green'
}

const triangle = {
    width: '200px',
    height: '200px',
    border: '10px solid transparent',
    border_bottom: '10px solid black',
    middleLine: true, 
}

const secondTriangle = {
    width: '200px',
    height: '200px',
    border: '10px solid transparent',
    border_bottom: '10px solid black',
    threeMiddleLines: true, 
}

for (let property in greenCircle)
{
    if (property in Circle)
    {
        if (greenCircle[property] != Circle[property])
        {
            console.log("Отличия кругов: " + property + ": " + Circle[property] + " - " + property + ": " + greenCircle[property]);
        }
    }
}

let text = "";

for (let property in secondTriangle)
{
    text = text + property + ": " + secondTriangle[property] + "; ";
}

console.log("Свойства второго треугольника: " + text);

for (let property in smallSquare)
{
    if (property == 'background')
    {
        console.log("Цвет маленького квадрата определяет свойство background");
    }
}