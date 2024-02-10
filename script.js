//1. Проверка наличия атрибута

document.querySelector('.button-check').addEventListener('click', () => {
    const img = document.querySelector('.img-dog');
    console.log(img.hasAttribute('alt'));
    // 2. Добавление атрибута
    img.setAttribute('alt', 'Собака на лошади');
})

//3. Удаление атрибута

document.querySelector('.button-delete').addEventListener('click', function() {
    const img = document.querySelector('.img-dog');
    img.removeAttribute('style');
})

//4. Получение значения атрибута

document.querySelector('.list-element').addEventListener('click', function() {
    let dataValue = document.querySelector('.list-element').getAttribute('data-value');
    console.log(dataValue);
})

// 5. Изменение атрибута

const linkList = document.querySelectorAll('#link');
for (let el of linkList) {
    el.setAttribute('href', '#');
    console.log(el)
}

//6. Установка нескольких атрибутов

const imgDog = document.querySelector('.img-dog');

const arr = [
    {attribute: 'width', value: '500'},
    {attribute: 'height', value: '700'}
]

function addTwoAttributes (arr, img) {
    for (let el of arr) {
        img.setAttribute(el.attribute, el.value);
    }
}
addTwoAttributes(arr, imgDog);

// 7. Сброс всех атрибутов элемента

document.querySelector('.button-deleteAttrs').addEventListener('click', function() {
    let title = document.querySelector('.title');
    title.removeAttribute('style');
    title.removeAttribute('name');
})

// 8. Изменение атрибута в зависимости от условия

const input = document.querySelector('.input');

if (!input.value) {
    input.setAttribute('placeholder', 'Введите текс');
}

// 9. Автоматическое обновление изображения

document.querySelector('.button-img-update').addEventListener('click', function() {
    imgDog.setAttribute('src', './images/cat.jpeg')
})

// 10. Копирование атрибута между элементами

document.querySelector('.button-copy').addEventListener('click', function() {
    const el1 = document.querySelector('.el1');
    let elValue = el1.getAttribute('data-info')
    const el2 = document.querySelector('.el2');
    el2.setAttribute('data-info', elValue);
})

// 11. Всплывающая подсказка через атрибут title

