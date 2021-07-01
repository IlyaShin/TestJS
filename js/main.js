// const arr = ['Life', 'is', 'sometimes', 'bad', 'and', 'sometimes', 'good'];
// let [w1,w2,,,,,w3] = arr;
// console.log(w1,w2,w3);

// let info = {};
// let str = 'Jon Snow is Stark';
// [info.name, info.surname,,info.clan] = str.split(' ');  // не писать let/const/var!!!
// console.log(info);

// let [name, surname = "Pidrilloz"] = ['Gomez'];
// console.log(surname)
// let [name, surname = prompt("Vvodi pogonyalo suka", "Gandonyez")] = ['Gomez'];
// console.log(surname);

// let students = {
//     Sam: 22,
//     Kate: 28,
//     Luck: 16
//   };
// function older(obj) {
//     let [[s, sAge], [k, kAge], [l, lAge]] = Object.entries(obj);
//     if (sAge > kAge && sAge > lAge) return s
//     else if (kAge > sAge && kAge > lAge) return k
//     else return l
// }
// console.log(older(students));

// let post = {
//     id: 1,
//     title: "My first post on FB",
//     text: "hahahhahahahh",
//     comments: [
//         {user: 'Jane', comment: 'Hey!'}
//     ],
//     likes: {
//         like1: true
//     }
// }

// let {comments:[{user}], likes:{like1}} = post;
// console.log(user, like1)

// 1. Скопируйте все элементы arr1 в arr2
// let arr1 =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2 = [...arr1]
// console.log(arr2);

// 2. С помощью деструктуризации выведете в новые перменные каждый элемент
// массива(previous, current, next) и напишите функцию высчитывающую среднюю 
// температуру за три дня
// const Bishkek = {
//     yesterday: 32,
//     today: 31,
//     tomorrow: 33
// };
// let {yesterday: previous, today: current, tomorrow: next} = Bishkek;
// function avrg(){
//     return sum = (previous + current + next) / 3
// }
// console.log(avrg());

// 3. Выведите второй элемент данного объекта в переменную second:
// const data = { arr: [ 1, 2, 3 ] };
// let {arr:[,x]} = data;
// console.log(x)

// 4. Вам дан объект с информацией о книге. С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль
// const courseCatalogMetadata = [
//     {
//       title: 'The Hobbit, or There and Back Again',
//       description: 'The hobbit tells a fantastic story of adventure, danger, friendship, and courage',
//       texts: [ {
//         author: 'J. R. R. Tolkien',
//         price: 120,
//         ISBN: '912-6-44-578441-0'
//       } ]
//     }
// ];

// let [{texts:[{ISBN: a}]}] = courseCatalogMetadata;
// console.log(a)



// function haha(str){
//     let counter = 0;            
//     for (let i = 0; i < str.length; i++){
//         if(str[i] === str[i + 1]){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(haha("AAABBB"));

// Задание №2
// Напишите функцию, которая в качестве аргумента принимает массив из
// n-го количества чисел и число d. Функция должна возвращать массив
// где числа сдвинуты влево на d количества позиций. Например если
// переданный массив это [1, 2, 3, 4, 5], число d = 2, то функция
// должна возратить [3, 4, 5, 1, 2]

let arr = [1, 2, 3, 4, 5];
function shifting(arr, d){
    let newArr = arr.map()
}



