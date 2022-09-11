console.log('Lesson 5');
//
// // Keyword - this
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// // https://learn.javascript.ru/object-methods
// // https://habr.com/ru/company/ruvds/blog/419371/
// // https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT
//
// // А тут заходим и ставим лайк!!!
// // https://www.youtube.com/watch?v=T1vJ8OdJq0o
//
// // https://www.youtube.com/watch?v=xY-mwUzDjsk
//
// // Keyword - new. Function-constructor
// // https://learn.javascript.ru/constructor-new
// // https://metanit.com/web/javascript/4.5.php
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new
//
// // Call, Apply, Bind
// // https://learn.javascript.ru/call-apply-decorators
// // https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290
//
console.log('Tasks from learn.js')
// Создайте объект calculator (калькулятор) с тремя методами:
//
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
    // ... ваш код ...
    a: 0,
    b: 0,
    read(a: number, b: number) {
        this.a = a
        this.b = b
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};

calculator.read(1, 2)
console.log(calculator.sum())
console.log(calculator.mul())
console.log(calculator)


// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
    }
};
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
let updatedLadder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this
    }
};
// updatedLadder.up().up().down().showStep().down().showStep()

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
//     ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

// Такой подход широко используется в библиотеках JavaScript.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Task 01
// // Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// // Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

// type someObjType = {
//     name: string;
//     age: number;
// }
//
// let someObj:someObjType = {
//     name: 'Eugene',
//     age: 32
// }
// let someObj2:any = {
//     name: 'Eugene',
//     myInfo: null
// }
// function greeting(){
//     return `My name is ${this.name}. I am ${this.age}`
// }
// someObj2.myInfo = greeting()


//
// // Task 02
// // реализовать счетчик counter в виде объекта со следующими методами:
// // get current count; - выводит текущее значение счетчика
// // increment; - увеличивает значение счетчика на 1
// // decrement; - уменьшает значение счетчика на 1
// // set current count; - принимает и присваивает значение счетчику
// // rest current count - устанавливает значение счетчика равным 0
// // все методы должны ссылаться на сам объект

const counter = {
    count: 0,
    getCurrentCount() {
        console.log(this.count)
        return this
    },
    increment() {
        this.count++
        return this
    },
    decrement() {
        this.count--
        return this
    },
    setCurrentCount(value: number) {
        this.count = value
        return this
    },
    restCurrentCount() {
        this.count = 0
        return this
    }
}
// console.log(counter.increment().increment().getCurrentCount().decrement())

// // Task 03
// // переделайте код из Task 02, что бы сработал следующий код:
// // counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
// console.log(counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() )
// // Task 04
// // Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// // у которого будут эти свойства и метод greeting из Task 01
function myFirstConstructorFunc(name: string, age: number) {
    return {
        name,
        age,
        greeting() {
            return `My name is ${this.name}. I am ${this.age}`
        }
    }
}

let igor = myFirstConstructorFunc('Igor', 28)
console.log(igor.greeting())
// // Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One:any = {
    name: 'One',
};
let Two = {
    name: 'Two',
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};
console.log(Two.sayHello.call(One))

// // Task 06
// // создайте объект helperObj у которого есть следующие методы:
// // changeName - меняет значение у свойства name объекта на полученное значение
// // setAge - устанавливает полученное значение в свойство age объекта
// // greeting - используется функция sayHello из Task 05
// // можно использовать @ts-ignore

const helperObj = {
    name: 'blabla',
    age: null,
    changeName(name: any) {
        this.name = name
    },
    setAge(age: any) {
        this.age = age
    },
    greeting() {
        return `My name is ${this.name}. I am ${this.age}`
    }
}
helperObj.changeName('Igor')
helperObj.setAge(28)
console.log(helperObj.greeting())
// // Bind
// // 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// // возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a: number, b: number) {
    return a + b
};

function bindNumber(callback: any, value: any) {
    return (value2: any) => {
        return callback(value, value2)
    }
}

console.log(bindNumber(sumTwoNumbers, 2)(2))

// // 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// // возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One

// function Foo(oneObj: any, helperObjValue: any) {
//     return (value: string) => {
//         helperObjValue.changeName.bind(oneObj)(value)
//     }
// }
//
// Foo(One, helperObj)('first')
// console.log(One)
function Foo(oneObj: any, helperObjValue: any) {
    return (value: string) => {
        helperObjValue.changeName.call(oneObj,value)
    }
}

Foo(One, helperObj)('first')
console.log(One)


// // 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
helperObj.setAge.call(Two, 30)
console.log(Two)

// // 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
function startGreeting() {
   return  helperObj.greeting.call(Two)
}
One.hi = startGreeting
console.log(One.hi())


// // Реализовать задачи 2-4 из Bind с помощью Call
//
//
//
// // just a plug
export default () => {
};