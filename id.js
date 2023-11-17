//Скрытие елементов характеристик
function showMore() {
    var hiddenText = document.querySelectorAll('.product-page-PC .hidden-text');

    // Перебираем скрытые элементы и изменяем их стиль
    for (var i = 0; i < hiddenText.length; i++) {
        hiddenText[i].style.display = 'block';
    }
}

//Счетчик главный
let countFirstElement = 1;
const countElementFirst = document.getElementById("count1");
function increment1() {
    if(countFirstElement < 9){
        countFirstElement++;
        updateCounterFirst();
    };
}
function decrement1() {
    if (countFirstElement > 1) {
        countFirstElement--;
        updateCounterFirst();
    }
}
function updateCounterFirst() {
    countElementFirst.innerText = countFirstElement;
}
let countSecondElement = 1;
const countElementSecond = document.getElementById("count2");
function increment2() {
    if(countSecondElement < 9){
        countSecondElement++;
        updateCounterSecond();
    };
}
function decrement2() {
    if (countSecondElement > 1) {
        countSecondElement--;
        updateCounterSecond();
    }
}
function updateCounterSecond() {
    countElementSecond.innerText = countSecondElement;
}
//ПЕРЕКЛЮЧЕНИЯ 
function goToOrderPage() {
    // Переход на новую страницу оформления заказа
    window.location.href = 'index.html'; // Замените 'order.html' на путь к вашей странице
}