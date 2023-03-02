let products = new Array();

class Product
{
    constructor (id, price, name, img, background)
    {
        this.id = id;   
        this.price = price;
        this.name = name;
        this.img = img;
        this.background = background;
        products.push(this);
    }

    Add()
    {
        let div = document.createElement('div');
        div.className = "info";
        div.style.border = "2px solid gray"
        div.style.width = '300px';
        div.style.height = '400px';
        div.style.textAlign = 'center';
        div.style.margin = '10px 30px 0 0'; 
        div.style.background = this.background;

        allProducts.append(div);
        allProducts.style.width = '100%';
        allProducts.style.display = 'flex';
        allProducts.style.flexWrap = 'wrap';

        let img = document.createElement('img');
        img.src = this.img;
        img.style.width = '200px';
        img.style.height = '200px';
        div.prepend(img);

        let p = document.createElement('p');
        p.innerHTML = this.name;
        p.style.fontSize = '20px';
        p.style.fontWeight = 'bold';
        div.append(p);

        let p2 = p.cloneNode(true);
        p2.innerHTML = this.price + " $";
        p2.style.fontSize = '12px';
        div.append(p2);

        let button = new Button(150, 75, 'blue','В корзину');
        div.append(button.addButton());  
    }

    Delete()
    {
        let arr = document.querySelectorAll('.info');
        arr[this.id - 1].remove();
    }
}

class Button
{
    constructor(width, height, background, text)
    {
        this.width = width;
        this.height = height;
        this.text = text;
        this.background = background;
    }

    addButton()
    {
        let button = document.createElement('button');

        button.innerHTML = this.text;
        button.style.width = this.width;
        button.style.height = this.height;
        button.style.background = this.background;
        button.style.color = 'white';
        button.style.border = '5px solid blue';
        button.style.borderRadius = '5px';

        return button;
    }

    deleteButton()
    {
        let but = document.querySelector('button');
        but.remove();
    }
}

function OddBackGround()
{
    let arr = document.querySelectorAll('.info');

    for (let i = 0 ; i < arr.length; i++)
    {
        if ((i + 1) % 2 == 1 || (i + 1) == 1)
        {
            arr[i].style.background = 'gray';
        }
        else
        {
            arr[i].style.background = 'white';
        }
    }
}

let cartButton = new Button(150, 75, 'blue','Корзина');
document.body.prepend(cartButton.addButton());
let cartButton2 = new Button(150, 75, 'blue','Корзина');
document.body.prepend(cartButton2.addButton());
cartButton2.deleteButton();


let first = new Product(1, 1000,'MacBook Pro 13', "mac.png", 'white');
first.Add();
let second = new Product(2, 1500,'Asus Vivobook S15', "mac.png", 'white');
second.Add();
let third = new Product(3, 2000,'Asus Vivobook S13', "mac.png", 'white');
third.Add();
let fourth = new Product(4, 2500,'Lenovo Legion', "mac.png", 'white');
fourth.Add();
let fifth = new Product(5, 3000,'Asus Zenbook', "mac.png", 'white');
fifth.Add();
third.Delete();
OddBackGround();