let shoppingCart = new Map();
let firstProduct = "отсутствует";
let secondProduct = "отсутствует";
let thirdProduct = "отсутствует";
let firstPrice = 0;
let secondPrice = 0;
let thirdPrice = 0;
let firstAmount = 0;
let secondAmount = 0;
let thirdAmount = 0;

function checkNumber(Price) 
{
	let goodPrice = 1;
	while (goodPrice) 
	{
		if (isNaN(Price)) 
		{
			Price = +prompt("Неверный ввод! Попробуйте ещё раз: ");
		} 
		else 
		{
			goodPrice = 0;
		}
	}

	return Price;
}
function checkEmpty(key) 
{
    if (shoppingCart.get(key) == "undefined")
	{
        return 0;
    }
    if (shoppingCart.get(key) == "отсутствует")
	{
        return 0;
    }
    else 
	{
        return 1;
    }
}

shoppingCart.set("firstAmount", firstAmount);
shoppingCart.set("secondAmount", secondAmount);
shoppingCart.set("thirdAmount", thirdAmount);
shoppingCart.set("firstPrice", firstPrice);
shoppingCart.set("secondPrice", secondPrice);
shoppingCart.set("thirdPrice", thirdPrice);

let exit = 1;
let cycle = 1;

while (exit) 
{
	let choise = +prompt("Выберите действие: 1 - добавление позиций товара, 2 - удаление товара, 3 - изменение количества и цены товара," + " 4 - подсчет количества товара в корзине, 5 - сумма заказа, 0 - выход");

	switch (choise) 
	{
		case 0:
			{
				exit = 0;
				break;
			}
		case 1:
			{
				firstProduct = prompt("Введите название первого товара: ");
				shoppingCart.set("firstProduct", firstProduct);
                firstAmount = +prompt("Введите количество первого товара: ");
				checkNumber(firstAmount);
				shoppingCart.set("firstAmount", firstAmount);
				firstPrice = +prompt("Введите стоимость первого товара (за единицу товара): ");
				checkNumber(firstPrice);
				shoppingCart.set("firstPrice", firstPrice * firstAmount);
				
				secondProduct = prompt("Введите название второго товара: ");
				shoppingCart.set("secondProduct", secondProduct);
                secondAmount = +prompt("Введите количество второго товара : ");
				checkNumber(secondAmount);
				shoppingCart.set("secondAmount", secondAmount);
				secondPrice = +prompt("Введите стоимость второго товара (за единицу товара): ");
				checkNumber(secondPrice);
				shoppingCart.set("secondPrice", secondPrice * secondAmount);

				thirdProduct = prompt("Введите название третьего товара: ");
				shoppingCart.set("thirdProduct", thirdProduct);
                thirdAmount = +prompt("Введите количество третьего товара: ");
				checkNumber(thirdAmount);
				shoppingCart.set("thirdAmount", thirdAmount);
				thirdPrice = +prompt("Введите стоимость третьего товара (за единицу товара): ");
				checkNumber(thirdPrice);
				shoppingCart.set("thirdPrice", thirdPrice * thirdAmount);

				alert(`Вы добавили товары: ${shoppingCart.get("firstProduct")} (количесвто: ${shoppingCart.get("firstAmount")}, общая стоимость: ${shoppingCart.get("firstPrice")}), ${shoppingCart.get("secondProduct")} (количесвто: ${shoppingCart.get("secondAmount")}, общая стоимость: ${shoppingCart.get("secondPrice")}), ${shoppingCart.get("thirdProduct")} (количесвто: ${shoppingCart.get("thirdAmount")}, общая стоимость: ${shoppingCart.get("thirdPrice")})`);
				break;
			}
		case 2:
			{
                let cycle = 1;
				while (cycle) 
				{
					let choise = +prompt(`Выберите, какой товар хотите удалить: \n1 - ${shoppingCart.get("firstProduct")} \n2 - ${shoppingCart.get("secondProduct")}` + `\n3 - ${shoppingCart.get("thirdProduct")} \n4 - все`);

					switch (choise) 
					{
						case 1:
							{
                                if (checkEmpty("firstProduct") == 1) 
								{
								    amountDel = +prompt(`Укажите количество товара, которое хотите удалить: (количесвто товара: ${shoppingCart.get("firstAmount")}) `);

                                    if (amountDel > shoppingCart.get("firstAmount")) 
									{
                                        alert(`Вы указали количество товара больше, чем есть в корзине`);
                                    }
                                    if (amountDel == shoppingCart.get("firstAmount")) 
									{
                                    	shoppingCart.set("firstAmount", 0);
                                    	shoppingCart.set("firstPrice", 0);
                                    	alert(`Товар ${shoppingCart.get("firstProduct")} удален`);
                                    	shoppingCart.delete("firstProduct");
                                    	shoppingCart.set("firstProduct", "отсутствует");
                                    }
                                    else 
									{
                                        shoppingCart.set("firstAmount", shoppingCart.get("firstAmount") - amountDel);
                                        shoppingCart.set("firstPrice", shoppingCart.get("firstPrice") - (shoppingCart.get("firstPrice") / shoppingCart.get("firstAmount")) * amountDel);
                                    }

                                    alert(`Количество товара ${shoppingCart.get("firstProduct")} изменено, итоговое количество товара: ${shoppingCart.get("firstAmount")}`);      
                                }
                                else 
								{
                                    shoppingCart.set("firstProduct", "отсутствует");
                                    break;
                                }			
								break;
							}
						case 2:
							{
								if (checkEmpty("secondAmount") == 1) 
								{
								    amountDel = +prompt(`Укажите количество товара, которое хотите удалить: (количесвто товара: ${shoppingCart.get("secondAmount")}) `);

                                    if (amountDel > shoppingCart.get("secondAmount")) 
									{
                                        alert(`Вы указали количество товара больше, чем есть в корзине`);
                                    }
                                    if (amountDel == shoppingCart.get("secondAmount")) 
									{
                                    	shoppingCart.set("secondAmount", 0);
                                    	shoppingCart.set("secondPrice", 0);
                                    	alert(`Товар ${shoppingCart.get("secondProduct")} удален`);
                                    	shoppingCart.delete("secondProduct");
                                    	shoppingCart.set("secondProduct", "отсутствует");
                                    }
                                    else 
									{
                                        shoppingCart.set("secondAmount", shoppingCart.get("secondAmount") - amountDel);
                                        shoppingCart.set("secondPrice", shoppingCart.get("secondPrice") - (shoppingCart.get("secondPrice") / shoppingCart.get("secondAmount")) * amountDel);
                                    }

                                    alert(`Количество товара ${shoppingCart.get("secondProduct")} изменено, итоговое количество товара: ${shoppingCart.get("secondAmount")}`);
                                }
                                else 
								{
                                    shoppingCart.set("secondProduct", "отсутствует");
                                    break;
                                }
								break;
							}
						case 3:
							{
								if (checkEmpty("thirdAmount") == 1)
								{
								    amountDel = +prompt(`Укажите количество товара, которое хотите удалить: (количесвто товара: ${shoppingCart.get("thirdAmount")}) `);

                                    if (amountDel > shoppingCart.get("thirdAmount"))
									{
                                        alert(`Вы указали количество товара больше, чем есть в корзине`);
                                    }
                                    if (amountDel == shoppingCart.get("thirdAmount")) 
									{
                                    	shoppingCart.set("thirdAmount", 0);
                                    	shoppingCart.set("thirdPrice", 0);
                                    	alert(`Товар ${shoppingCart.get("thirdProduct")} удален`);
                                    	shoppingCart.delete("thirdProduct");
                                    	shoppingCart.set("thirdProduct", "отсутствует");
                                    }
                                    else
									{
                                        shoppingCart.set("thirdAmount", shoppingCart.get("thirdAmount") - amountDel);
                                        shoppingCart.set("thirdPrice", shoppingCart.get("thirdPrice") - (shoppingCart.get("thirdPrice") / shoppingCart.get("thirdAmount")) * amountDel);
                                    }
                                    
									alert(`Количество товара ${shoppingCart.get("thirdProduct")} изменено, итоговое количество товара: ${shoppingCart.get("thirdAmount")}`);
                                    
                                }
                                else 
								{
                                    shoppingCart.set("thirdProduct", "отсутствует");
                                    break;
                                }
								break;
							}
						case 4:
							{
								firstPrice = 0;
								firstAmount = 0;
								secondPrice = 0;
								secondAmount = 0;
								thirdPrice = 0;
								thirdAmount = 0;
								shoppingCart.clear();
								alert("Все товары удалены");
								break;
							}
						default:
							{
								alert("Нет таких значений");
								break;
							}
					}

					cycle = +prompt("Хотите удалить еще какой-нибудь товар?\n 1 - да\n 0 - нет");
					if(cycle != 1)
					{
						break;
					}
				}
				break;
			}
		case 3:
			{
                let cycle = 1;
				while (cycle)
				{
					let choise = +prompt(`Выберите, количество и цену какого товара хотите изменить: \n1 - ${shoppingCart.get("firstProduct")} \n2 - ${shoppingCart.get("secondProduct")}` + `\n3 - ${shoppingCart.get("thirdProduct")} \n4 - все`);

					switch (choise) 
					{
						case 1:
							{
								if (shoppingCart.has("firstProduct"))  
								{
									firstAmount = +prompt("Введите количество первого товара: ");
				                    checkNumber(firstAmount);
				                    shoppingCart.set("firstAmount", firstAmount);
				                    firstPrice = +prompt("Введите стоимость первого товара (за единицу товара): ");
				                    checkNumber(firstPrice);
				                    shoppingCart.set("firstPrice", firstPrice * firstAmount);
				                } 
								else 
								{
									alert("Невозможно изменить, товар удален");
								}
								break;
							}
						case 2:
							{
								if (shoppingCart.has("secondProduct")) 
								{
									secondAmount = +prompt("Введите количество второго товара: ");
				                    checkNumber(secondAmount);
				                    shoppingCart.set("secondAmount", secondAmount);
				                    secondPrice = +prompt("Введите стоимость второго товара: ");
				                    checkNumber(secondPrice);
				                    shoppingCart.set("secondPrice", secondPrice * secondAmount);
                                }
								else 
								{
									alert("Невозможно изменить, товар удален");
								}
								break;
							}
						case 3:
							{
								if (shoppingCart.has("thirdProduct")) 
								{
									thirdAmount = +prompt("Введите количество третьего товара: ");
				                    checkNumber(thirdAmount);
				                    shoppingCart.set("thirdAmount", thirdAmount);
				                    thirdPrice = +prompt("Введите стоимость третьего товара (за единицу товара): ");
				                    checkNumber(thirdPrice);
				                    shoppingCart.set("thirdPrice", thirdPrice * thirdAmount);
                                } 
								else 
								{
									alert("Невозможно изменить, товар удален");
								}
								break;
							}
						case 4:
							{
								if (shoppingCart.has("firstProduct")) 
								{
									firstAmount = +prompt("Введите количество первого товара: ");
				                    checkNumber(firstAmount);
				                    shoppingCart.set("firstAmount", firstAmount);
				                    firstPrice = +prompt("Введите стоимость первого товара (за единицу товара): ");
				                    checkNumber(firstPrice);
				                    shoppingCart.set("firstPrice", firstPrice * firstAmount);
				                } 
								else 
								{
									alert("Невозможно изменить, товар удален");
								}
                                if (shoppingCart.has("secondProduct")) 
								{
									secondAmount = +prompt("Введите количество второго товара: ");
				                    checkNumber(secondAmount);
				                    shoppingCart.set("secondAmount", secondAmount);
				                    secondPrice = +prompt("Введите стоимость второго товара: ");
				                    checkNumber(secondPrice);
				                    shoppingCart.set("secondPrice", secondPrice * secondAmount);
                                } 
								else 
								{
									alert("Невозможно изменить, товар удален");
								}
                                if (shoppingCart.has("thirdProduct")) 
								{
									thirdAmount = +prompt("Введите количество третьего товара: ");
				                    checkNumber(thirdAmount);
				                    shoppingCart.set("thirdAmount", thirdAmount);
				                    thirdPrice = +prompt("Введите стоимость третьего товара (за единицу товара): ");
				                    checkNumber(thirdPrice);
				                    shoppingCart.set("thirdPrice", thirdPrice * thirdAmount);
                                } 
								else 
								{
									alert("Невозможно изменить, товар удален");
								}
								break;
							}
						default:
							{
								alert("Нет таких значений");
								break;
							}
					}

					cycle = +prompt("Хотите изменить кол-во еще какого-нибудь товара?\n 1 - да\n 0 - нет");
					if(cycle != 1) 
					{
						break;
					}
				}
				break;
			}
		case 4:
			{
				let countOfPositions = shoppingCart.get("firstAmount") + shoppingCart.get("secondAmount") + shoppingCart.get("thirdAmount");
				alert(`Количество товара в корзине: ${countOfPositions}`);
				break;
			}
		case 5:
			{
				let sumOfProducts = shoppingCart.get("firstPrice") + shoppingCart.get("secondPrice") + shoppingCart.get("thirdPrice");
				alert(`Сумма заказа: ${sumOfProducts}`);
				break;
			}
		default:
			{
				alert("Нет таких значений");
			}
			
			cycle = +prompt("Желаете продолжить? \n 1 - да \n  0- нет");
	}
}