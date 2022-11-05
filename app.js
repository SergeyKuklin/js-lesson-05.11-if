let age = '10sd';

age = Number(age);
console.log(isNaN(age));

if (!isNaN(age)) {

} else {
    console.log('Некорректный возраст');
}

if (age) {
    if (age > 18) {
        console.log('Добро пожаловать!');
    } else if (age === 18){
        console.log('Поздравляем с совершеннолетием!');
    } else if (age === undefined) {
        console.log('Введите возраст!');
    } else if (age !== Number) {
        console.log('Значение указано неверно');
    } else {
        console.log('Входа нет');
    }
} else {
    console.log('Укажите Ваш возраст');
}



let gender = 'Муж';

// .toLocaleLowerCase() - приведение к нижнему регистру

if (gender.toLocaleLowerCase() === 'муж') {
    console.log('Вам налево')
}

if (gender === 'Жен') {
    console.log('Вам направо')
}

// -------------Тенарные операторы------------------------------------------

let isUser1 = false;

let typeUser1 = isUser1 ? 'Пользователь' : 'Бот';

console.log('Добро пожаловать: ' + typeUser1);
console.log(`Добро пожаловать: ${isUser1 ? 'Пользователь' : 'Бот'}`);

if (isUser1) {
    typeUser1 = 'Пользователь';
} else {
    typeUser1 = 'Бот';
}

// --------------SWITCH объединение несокльких блоков if else но называются case

let typeUser2 = 'admin'; // user, guest, bot

switch (typeUser2) {
    case 'admin':
        console.log('Вы администратор!');
        break;

    case 'user':
        console.log('Вы пользователь!');
        break;

    case 'guest':
        console.log('Вы гость!');
        break;

    case 'bot':
        console.log('Вы бот!');
        break;

    default:
        console.log('Неверный тип пользователя');
        break;
}

// ---- логическое ИЛИ-------
let a = 1;
let b =0;
console.log(a || b);

// ----логическое И ---&&

// ----ЦИКЛЫ----

// вывести на экран числа от 1 до 10 через запятую

let i = 0;
let resultString = '';
const lastNumber = 10;
while (++i <= lastNumber) {         // i = i + 1
    resultString += `${i} ${i !== lastNumber ? ', ' : ''} `; // resultString = resultString + `${i}, `
}

// ОТ 10 до 0, сделать дома!!!!!
let l = 10;
const lastNumber1 = 0;
while (--l === 0) {
    resultString += `${l} ${l !== lastNumber1 ? ', ' : ''} `;
}
console.log(resultString1);

