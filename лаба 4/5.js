function func() { return 0; }
function sum() { return 0; }
function makeCounter() { return 0; }

let listOfFuncNames = [];

listOfFuncNames.push(func);
listOfFuncNames.push(sum);
listOfFuncNames.push(makeCounter);

listOfFuncNames.forEach(element => { alert(element.name) });