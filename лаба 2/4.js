/*4.	Вы забыли пароль от электронной почты. Вы помните, что он состоит
 из 8 символов нижнего регистра. Первые 5 – это буквы английского алфавита, 
 последние 3 – цифры.  Один пароль вы успеваете ввести за 3 секунды. 
 Сколько максимум времени вам понадобится, чтобы подобрать пароль?
Выведите результат в виде строки «y лет m месяцев d дней h часов
 min минут s секунд». Для простоты решения можно принять, что в месяце 30 дней.*/


let amountOfCombinations = ((26 ** 5) * (10 ** 3));
let amountOfSeconds = amountOfCombinations * 3;
  
let amountOfYear = Math.floor(amountOfSeconds/(2592000 * 12));
amountOfSeconds -= amountOfYear * 31104000;
  
let amountOfMounth = Math.floor(amountOfSeconds/(86400 * 30));
amountOfSeconds -= amountOfMounth * 2592000;

let amountOfDay = Math.floor(amountOfSeconds/(3600 * 24));
amountOfSeconds -= amountOfDay * 86400;
  
let amountOfHour = Math.floor(amountOfSeconds/(60 * 60));
amountOfSeconds -= amountOfHour * 3600;
  
let amountOfMinutes = Math.floor(amountOfSeconds/60);
amountOfSeconds -= amountOfMinutes * 60;
  
alert(`${amountOfYear} лет ${amountOfMounth} месяца ${amountOfDay} дня ${amountOfHour} часов ${amountOfMinutes} минут ${amountOfSeconds} секунд`);