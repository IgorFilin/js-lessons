console.log('lesson 2');


// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

console.log('Task 01')
// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
const sum = (a: number) => {
    return (b: number) => {
        return a + b
    }
}
console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
console.log('Task 02')
const makeCounter = () => {
    let i = 0
    return () => {
        return i++
    }
}

let counter = makeCounter()
console.log(counter())
console.log(counter())

let counter2 = makeCounter()
console.log(counter2())
console.log(counter2())


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
console.log('Task 03')

function SuperMakeCounter(number: number) {
    return {
        i: number,
        increase() {
            return this.i + 1
        },
        decrease() {
            return this.i - 1
        },
        reset() {
            return this.i = 0
        },
        set(number2: number) {
            return this.i = number2
        }

    }
}

console.log(SuperMakeCounter(5).set(2))

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
console.log('Task 05')
console.log('Task 05.1')
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//
//     Например:
//
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:
//
//     С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     С использованием формулы арифметической прогрессии.
//     Пример работы вашей функции:
//
//     function sumTo(n) { /*... ваш код ... */ }
//
// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
//
//     P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

function sumTo(n: number) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

console.log(sumTo(100))

function sumTo2(n: number): number {
    if (n === 1) {
        return 1
    } else {
        return n + sumTo2(n - 1)
    }
}

console.log(sumTo2(100))

function sumTo3(n: number) {
    return n * (n + 1) / 2;
}

console.log(sumTo3(100));
// Вычислить факториал
// важность: 4
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
//
// Определение факториала можно записать как:
//
//     n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:
//
//     1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
//
// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
console.log('Task 05.2')

function factorial(n: number): number {
    if (n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
//
//     Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
//
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
//
//     Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
//
//     Пример работы:
//
//     function fib(n) { /* ваш код */ }
//
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.
console.log('Task 05.3')

function fib(n: number): number {
    if (n <= 1) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

console.log(fib(7))

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
//
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.
//
//     Сделайте два варианта решения: используя цикл и через рекурсию.
//
//     Как лучше: с рекурсией или без?
console.log('Task 05.4')

function printList(l: any) {
    let temp = l
    while(temp){
        console.log(temp.value)
        temp = temp.next
    }
}

console.log(printList(list))

function printList2(l: any) {
 if(!l){
   return false
 }else {
     console.log(l.value)
     printList2(l.next)
 }
}

console.log(printList2(list))

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//
//     Сделайте два решения: с использованием цикла и через рекурсию.
console.log('Task 05.5')
function printList3(l: any) {
    let temp = l

}

console.log(printList3(list))

function printList4(l: any) {
    if(!l){
        return false
    }else {
        console.log(l.value)
        printList2(l.next)
    }
}

console.log(printList4(list))


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};