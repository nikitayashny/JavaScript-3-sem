/*6.	Выпускник сдает ЦТ по русскому языку. Ему дано словарное слово,
 необходимо ввести в текстовое поле правильный вариант ответа.
  Проверьте его ответ и сообщите в каком символе он допустил ошибку, 
  если она есть*/

let RightVariant = "молоко"
let UsersVariant = prompt("Как правильно пишется это словарное слово: м..л..к..").trim();
  
if (UsersVariant.length == RightVariant.length) {
    for(let i = 0; i < UsersVariant.length; i++) {
        if (RightVariant[i] != UsersVariant[i]) {
            alert(`Вы написали словарное слово "${RightVariant}" с ошибкой в ${i + 1} символе`);
        }
    }
    if (UsersVariant == RightVariant) {
        alert("Вы написали слово правильно.");
    }
} 
else {
    alert("Неправильное количество букв");
}