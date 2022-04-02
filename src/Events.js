/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const data = document.createElement('button');
    document.body.append(data);
    data.innerHTML = 'Удали меня';
    data.addEventListener('click', function () {
        this.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const data = document.createElement('ul');
    document.body.append(data);
    arr.forEach(function (element) {
        const li = document.createElement('li');
        li.innerHTML = element;
        data.appendChild(li);
        li.addEventListener('mouseover', function () {
            this.setAttribute('title', element);
        });
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const data = document.createElement('a');
    document.body.append(data);
    data.innerHTML = 'tensor';
    data.href = 'https://tensor.ru/';
    data.addEventListener('click', function () {
        data.innerHTML = data.innerHTML + ' ' + data.href;
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const data = document.createElement('ul');
    document.body.append(data);

    const li = document.createElement('li');
    li.innerHTML = 'Пункт';
    data.appendChild(li);

    const button = document.createElement('button');
    document.body.append(button);
    button.innerHTML = 'Добавить пункт';

    li.addEventListener('click', function () {
        li.innerHTML = li.innerHTML + '!';
    });

    button.addEventListener('click', function () {
        const li_2 = document.createElement('li');
        data.appendChild(li_2);
        li_2.innerHTML = 'Пункт';
        li_2.addEventListener('click', function () {
            li_2.innerHTML = li_2.innerHTML + '!';
        });
    });
}
