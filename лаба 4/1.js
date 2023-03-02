function func()
{
    if (arguments.length <= 3)
    {
        let text = "";  

        for (let i = 0; i < arguments.length; i++)
        {
            text += arguments[i] + " ";
        }

        console.log("Значения аргументов: " + text)
    }

    if (arguments.length > 3 && arguments.length <= 5)
    {
        let text = "";

        for (let i = 0; i < arguments.length; i++)
        {
            text += typeof(arguments[i]) + " ";
        }

        console.log("Типы аргументов: " + text);
    }

    if (arguments.length > 5 && arguments.length <= 7)
    {
        console.log(`Количество аргументов: ${arguments.length}`);
    }

    if (arguments.length > 7)
    {
        console.log("Количество аргументов слишком большое");
    }
}

func("nikita", 2004);
func(1, 2n, "three", null, undefined);
func(1, 2, 3, 4, 5, 6, 7);
func(1, 2, 3, 4, 5, 6, 7, 8);