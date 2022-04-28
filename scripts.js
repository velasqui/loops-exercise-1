// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (i = 10; i >= 1; i--) {
//     console.log(i);
// }

// i=1;
// while (i <= 10) {
//     console.log(i++);
// }

// i=10;
// while (i >= 1) {
//     console.log(i--);
// }

// i=1;
// do {
//     console.log(i++);
// } while (i <= 10);

// i=10;
// do {
//     console.log(i--);
// } while (i >= 1);

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// for (const number of numbers) {
//     console.log(number);
// }

// const str = "planet";
// console.log(str.padStart(10, " "));

// const str2 = "headlamp";
// console.log(str2.padStart(10, " "));

let str1 = "planet";
for (i = str1.length; i <= 10; i++) {
    str1 = " " + str1;
}
console.log(str1);