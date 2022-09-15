// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают
// console.log('Task 1')
//
// function Animal(name = 'Animal') {
//     this.name = name
//     this.walk = function () {
//         return this.name + ' walk'
//     }
//     this.eat = function () {
//         return this.name + ' eat'
//     }
//     this.sleep = function () {
//         return this.name + ' sleep'
//     }
// }
// const cat = new Animal('Cat')
// // console.log(Animal.prototype)
// // console.log(cat.__proto__)
// // console.log(Animal)
// // console.log(cat.constructor)
// // console.log(Animal.prototype === cat.__proto__)
// // console.log(Animal.prototype.constructor === cat.constructor)
//
// console.log(cat.name)
// console.log(cat.eat())
// console.log(cat.sleep())
//
// const dog = {}

// Object.setPrototypeOf(dog,Animal)
// console.log(dog.name)
// console.log(dog.eat())
// console.log(dog.sleep())

let car = {
    wheels:4
}

let bmw = {
    mark:'x5'
}
bmw.__proto__ = car

console.log(bmw.wheels)
console.dir(bmw)