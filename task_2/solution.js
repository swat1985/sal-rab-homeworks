function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку
	let shippingSum; // создайте переменную shippingSum
		if(productsSum == 0 || productsSum >= freeShippingMinSum){
			shippingSum = 0;
			}

			//Вариант 1
			/*if (productsSum > 0 & productsSum < freeShippingMinSum) {
				shippingSum = shippingPrice;
			}*/ // использовал оператор & потому что он проверяет сначала одно значание потом другое. 

			//Вариант 2
			/*if (productsSum > 0) {
				shippingSum = shippingPrice;
			}
			else (productsSum < freeShippingMinSum) {
				shippingSum = shippingPrice;
			}*/

			//Вариант 3
			if (productsSum > 0) {
				shippingSum = shippingPrice;
			}
			else if (productsSum < freeShippingMinSum) {
				shippingSum = shippingPrice;
			}*/
			
    // то shippingSum присвоить значение 0

    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0

    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

   let discountSum; 
		productsSum >= discountMinSum ? discountSum / 100 * discountPart : discountSum = 0;
	 // создайте переменную discountSum
		
    // если productsSum больше или равно discountMinSum,
    // то присвойте discountSum значение discountPart процентов от productsSum,
    // иначе присвойте discountSum значение 0

    // Конец решения задания №2.2

   return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине
	
   let totalSum = productsSum;
			totalSum -=  discountSum;// создайте переменную totalSum

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

   let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
			totalSum +=  shippingSum;
	let freeShipping = shippingSum == 0;
	/* Если я правильно понял такая запись правильная поскольку автоматически если 
	shippingSum != 0 это false если == 0 это true?*/
	//Тот случай когда вроде бы все понятно но ничего не ясно))
	// прибавьте к totalSum значение shippingSum
		
		
		
    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
