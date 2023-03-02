function setAccent(element, accent, type)
{
    x = confirm(`${type} акцентный элемент?`);
    if (x)
    {
        Object.assign(element, accent);
        console.log(element);
    }
    else
    {
        console.log(element);
    }

}

let accent = {
    backgroundColor: "yellow"
};

let Button = {
    width: 10,
    height: 5,
    backgroundColor: "gray",
    text: "button"
};

let Link = {
    fontSize: 5,
    headset: "Arial",
    textColor: "red"
};

setAccent(Button, accent, "Кнопка");
setAccent(Link, accent, "Ссылка");