/*Реализуйте функцию, которая рассчитывает количество присутствующих студентов.
 Имена присутствующих студентов пользователь вводит в модальное окно.*/

let Studentlist = [];
let present = true;

function Studentamount(student) {
    Studentlist.push(student);
    console.log(Studentlist);
}

while(present) {
    student = prompt("Введите имя присутствующего студента");
    Studentamount(student);
    present = confirm("Ещё студенты присутствуют?");
}

alert(`Количество присутствующих студентов: ${Studentlist.length}`);
