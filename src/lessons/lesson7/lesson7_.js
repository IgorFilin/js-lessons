// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

//=====================================================================================

//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают
console.log('Task 1')

function Animal(name = 'Animal') {
    this.name = name
    this.walk = function () {
        return this.name + ' walk'
    }
    this.eat = function () {
        return this.name + ' eat'
    }
    this.sleep = function () {
        return this.name + ' sleep'
    }
}

const cat = new Animal('Cat')
console.log(cat.eat())
console.log(cat.eat())
console.log(cat.sleep())
// console.log(Animal.prototype)
// console.log(cat.__proto__)
// console.log(Animal)
// console.log(cat.constructor)
// console.log(Animal.prototype === cat.__proto__)
// console.log(Animal.prototype.constructor === cat.constructor)

// console.log(cat.name)
// console.log(cat.eat())
// console.log(cat.sleep())
//
// const dog = {}
//
// Object.setPrototypeOf(dog,Animal)
// console.log(dog.name)
// console.log(dog.eat())
// console.log(dog.sleep())

//======================================================================================

//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

function Monkey(name = 'Monkey') {
    Animal.call(this)
    this.name = name
    this.roar = function () {
        return this.name + ' roar'
    }
    this.climb = function () {
        return this.name + ' climb'
    }
}

const Arny = new Monkey('Arny')

console.log(Arny.eat())
console.log(Arny.roar())
//======================================================================================

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

function Human (name = 'Human') {
    Monkey.call(this)
    this.name = name
    this.speak = function () {
        return this.name + ' speak'
    }
    this.think = function () {
        return this.name + ' think'
    }
}
const Harry = new Human('Harry')
console.log(Harry.eat())
console.log(Harry.roar())
console.log(Harry.speak())
