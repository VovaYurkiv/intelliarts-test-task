
// const sum = (a, b) => a + b;
// console.log(sum(2, 6));





//     function fizzBuzz (num) {

//     for (let i = 0; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz");
//         }
//         else if (i % 5 === 0) {
//             console.log("buzz");
//         } 
//         else if (i % 3 === 0) {
//             console.log("fizz");
//         }
//         else {
//             console.log(i);
//         }
//     } 
// }
//     return fizzBuzz(10);   




// const array = [1, 2, 3, 5, 8]

// Array.prototype.multiplyBy = function (n) {
//     return this.map(function(i) {
//         return i * n
//     })
// }
// console.log(array.multiplyBy(5));





// function calculate (arr) {
//     let calc = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 && arr[i] % 2 !== 0) {
//             calc += arr[i];
//         }
//     }
//     return calc;
// }

// console.log(calculate([5, 0, -5, 20, 88, 17, -32]));




// function check(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//         if ((arr[i] + arr[j]) === num) {
//         return true;
//         }
//     }
// }
//         return false;
// }

// console.log(check([10, 15, 3, 7], 17));
// console.log(check([10, 15, 3, 7], 20));




// const person = {
//     name: 'Volodymyr',
//     age: 21,
//     job: 'front-end dev',
//     know: function (who) {
//     console.log(`${who} is ${this.name}?`)
//     },
//     result: function (sentence) {
//         console.log(`${sentence} ${this.job}. ${sentence} ${this.age}!`);
//     }
// }

// const olya = {
//     name: 'Olya',
//     age: 20,
//     job: 'tutor'
// }
// person.know.call(olya, 'Who')
// const bound = person.result.bind(olya,'She is')
// setTimeout(bound, 2000);




// const data = [4, 4, 5, 6, 1, -5, -8]

// const sort = data.sort((a, b) => a - b);
// console.log([...sort, ...sort.reverse().slice(1)]);

// function calculate(num) {
//     let arr = Array.from({length: num})
//     arr = arr.map((value) => BigInt(num--)).reduce((acc, value) => acc * value, 1n);

//     return arr;
// }

// console.log(calculate(100));





// let array = []

// function makeArr () {
//     for (let i = 0; i < 10; i++) {
//         array.push(i)
//     }
// }
// makeArr()

// console.log(array)

// let array = [ 
//     {name: 'Volodymyr', age: 21, salary: 5000},
//     {name: 'Olya', age: 25, salary: 7000},
//     {name: 'Vitalik', age: 30, salary: 12000}
// ]

// const newArr = array
// .filter(person => person.age > 23)
// .map(person => {
//     return {  
//         name: person.name,
//         age: person.age,
//         salary: person.salary * 2
//     }
// })
// .reduce((total, person) => total + person.salary, 0)

// console.log(newArr)

// function solve (arr) {
//     return arr.sort((a, b) => a - b)
// }

// console.log(solve([2,3,4,3,7,9,5,3,7]))
// console.log(solve([4,9,5,0,7,3,8,4,9,0]))





// let array = []

// const makeArr = () => {
//     for (let i = 0; i <= 10; i++) {
//         array.push(i)
//     }
// }
// makeArr()

// const sumArr = () => {
//     result = array.map(el => el * 3).filter(el => el % 5 === 0).reduce((a, b) => a + b)
// }
// sumArr()

// console.log(result)


// let a = 4
// let b = 5

// const sum = () => b = a
// sum()
// console.log(a + b)



// const sum = (num) => {
//     return num ** 2
// }
// console.log(sum(25))

// console.log('FIRST')
//     setTimeout(function() {
//         console.log('SECOND')
//     }, 1500)
//     setTimeout(function() {
//         console.log('THIRD')
//     }, 0)
// console.log('FOURTH')






// let x = 10
// let y = 20

// [x] = [5]
// console.log(x)




// function coco(str) {
//     return str.split(' ').length
// }
// console.log(coco('My name is Vova'))


const users = [
    {
        id: 0,
        name: 'Vova'
    },
    {
        id: 1,
        name: 'Olya'
    }
]

const posts = [
    {
        userId: 0,
        body: 'Hello, how are you?'
    },
    {
        userId: 1,
        body: 'I am good, you?'
    }
]


console.log(users[posts[0].userId].id)