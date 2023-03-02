let shoppingList = new Set();
let product = 1;
let exit = 1;

function checkProduct(product)
{
    if (shoppingList.has(product))
    {
        return true;
    } 
    else
    {
        return false;
    }
}

while (exit)
{
    x = +prompt("Выберите действие: 1 - добавить элемент, 2 - удалить элемент, 3 - проверить наличие, 4 - определить количество товаров, 0 - выход");    
    
    switch(x) 
    { 
        case 0: 
            exit = 0;
            break;

        case 1: 
            present = 1;
            while (present)
            {
                for (let value of shoppingList) 
                {
                    console.log(value);
                }

                product = prompt("Введите товар, который хотите добавить:");
                shoppingList.add(product);
                alert(`Товар добавлен: ${product}`);

                present = confirm("Добавить ещё товары?");
            }
            break;

        case 2: 
            present = 1;
            while (present)
            {
                for (let value of shoppingList) 
                {
                    console.log(value);
                }

                product = prompt("Введите товар, который хотите удалить? Чтобы удалить все товары, введите 'all'" );

                if (product == "all")
                {
                    shoppingList.clear();
                    alert("Все товары из списка удалены");  
                }
                else if (checkProduct(product))
                {
                    shoppingList.delete(product);
                    alert(`Товар удалён: ${product}`);
                } 
                else 
                {
                    alert("Товар отсутствует");
                }

                present = confirm("Удалить ещё товары?");
            }
            break;
      
        case 3:
            present = 1;
            while (present)
            {
                product = prompt("Введите товар, наличие которого хотите проверить?");

                if (checkProduct(product)) 
                {
                    alert("Товар есть в наличии");
                } 
                else
                {
                    alert("Товар отсутствует");
                }

                present = confirm("Проверить ещё товары?");
            }
            break;

        case 4:
            alert(`Количество товаров: ${shoppingList.size}`);
            break;    

        default:
            alert("Некорректный ввод");
            break;
      }
}

console.log("Список товаров: ");
for (let value of shoppingList) 
{
    console.log(value);
}