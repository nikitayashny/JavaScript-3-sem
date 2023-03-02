function verification(maxMessage, userMessage)
{
    if (maxMessage <= userMessage)
    {
        return false;
    }
        return true;
};

function getCorrect()
{
    let test = verification(maxMessage, userMessage.length);
    let words = userMessage.split(' ');

    if (test)
    {
        for(let i = 0; i < words.length; i++)
        {
            if (words[i].includes('кот'))
            {
                words[i] = '*';
            }
            else if (words[i].includes('собак'))
            {
                words[i]=words[i][0].toUpperCase()+words[i].slice(1);
            }
            else if (words[i] == 'пёс')
            {
                words[i] = 'Многоуважаемый пес';
            }
        }
        alert(words.join(' '));
    }
    else
    {
        alert("Превышение максимальной длины комментария")
    }
}

let maxMessage = 40;
let userMessage = prompt("Введите комментарий",'');

verification(maxMessage, userMessage);
getCorrect();