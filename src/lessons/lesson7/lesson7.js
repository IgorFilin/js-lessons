console.log("Lesson 7");

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI

//Task learn.js

console.log("Task 1 learn.js");
// 1)С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
//  2)Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

let head = {
    glasses: 1,
};

let table = {
    pen: 3,
};

let bed = {
    sheet: 1,
    pillow: 2,
};

let pockets = {
    money: 2000,
};
//
// Object.setPrototypeOf(pockets, bed);
// Object.setPrototypeOf(bed, table);
// Object.setPrototypeOf(table, head);
// // @ts-ignore
// console.log(pockets.glasses);

pockets.__proto__ = bed

bed.__proto__ = table

table.__proto__ = head

console.log(pockets.pen)

//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают
console.log('Task 01')

class Animal {
    name = 'Animal'

    constructor(name) {
        this.name = name
    }

    walk() {
        return console.log(`${this.name} is walk`)
    }

    eat() {
        return console.log(`${this.name} is eat`)
    }

    sleep() {
        return console.log(`${this.name} is sleep`)
    }
}


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

class Monkey extends Animal {
    name = 'monkey'
    constructor(name) {
        super(name)
    }

    roar() {
        return console.log(`${this.name} is roar`)
    }

    climb() {
        return console.log(`${this.name} is climb`)
    }
}

const bob = new Monkey('bob')

console.log(bob.name)
console.log(bob.sleep())
console.log(bob.walk())

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

// Task 05
// Используя метод Apply реализовать свой собственный
// just a plug
export default () => {
};
