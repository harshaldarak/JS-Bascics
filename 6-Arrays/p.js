// const numbers = [3, 4];

// numbers.push(5, 6);
// numbers.unshift(1, 2);
// numbers.splice(2, 1, "a", "b");
// console.log(numbers);

//3
// const numbers = [1, 2, 3, 4, 3];
// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf(6));
// console.log(numbers.lastIndexOf(3));
// console.log(numbers.includes(2));
// console.log(numbers.includes(5));

//4
// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];
// const course = courses.find(function (course) {
//   return course.name === "a";
// });
// console.log(course);
// const course1 = courses.findIndex((course) => course.name === "a");
// console.log(course1);

// course.find((course) => console.log("a"));
// const numbers = [1, 2, 3, 4];
// console.log(numbers.pop());
// console.log(numbers.shift());
// const another = numbers.splice(2, 1);
// console.log(numbers);

//Emptying an array

// let numbers = [1, 2, 3, 4];

// numbers.length = 0;
// let another = numbers;

// numbers.splice(0, numbers.length);
// numbers = [];
// console.log(numbers);
// console.log(another);
// const first = [1, 2, 3];
// const first = [{ id: 1 }];
// const seacond = [4, 5, 6];
// first[0].id = 10;
// const combined = first.concat(seacond);
// console.log(combined);
// const slice = combined.slice(2);
// console.log(slice);

//Spread Operrator
// const first = [1, 2, 3];
// const seacond = [4, 5, 6];
// const combined = [...first, ...seacond];
// console.log(combined);

// const numbers = [1, 2, 3];
// for (let number in numbers) {
//   console.log(number);
// }
// numbers.forEach(number => console.log(number))

// const number = [1, 2, 3];
// const joind = number.join(",");
// console.log(joind);

// const message = "This is my first message";
// const split = message.split(" ");
// console.log(split);
// const combined = split.join("-");
// console.log(combined);

// const number = [2, 3, 1];
// number.sort();
// console.log(number);

// number.reverse();
// const courses = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "javascript" },
// ];

// courses.sort(function (a, b) {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });
// console.log(courses);

// const number = [1, -1, 2, 3];

// const allPositive = number.every((value) => value >= 0);
// console.log(allPositive);
// const atLeastOnePositive = number.some((value) => value >= 0);
// console.log(atLeastOnePositive);

// const number = [1, -1, 2, 3];

// const filtered = number.filter((n) => n >= 0);
// const item = filtered.map((n) => "<li>" + n + "</li>");
// const html = "<ul>" + item.join("") + "</ul>";
// console.log(html);

// const number = [1, -1, 2, 3];

// const item = number
//   .filter((n) => n >= 0)
//   .map((n) => ({ value: n }))
//   .filter((obj) => obj.value > 1)
//   .map((obj) => obj.value);
// console.log(item);

// const number = [1, -1, 2, 3];

// let sum = 0;
// for (let n of number) {
//   sum += n;
// }
// console.log(sum);
// let sum = number.reduce((acc, curr) => acc + curr);
// console.log(sum);

// const number = arrayFromRange(1, 4);
// console.log(number);
// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) {
//     output.push(i);
//     return output;
//   }
// }

// const number = [1, 2, 3, 4];

// function includes(array, searchElement) {
//   for (let n of array) if (n === searchElement) return true;
//   return false;
// }
// console.log(includes(number, 4));

// const number = [1, 2, 3, 4, 5, 1, 1];

// const output = expect(number, [1, 2, 3, 4, 5]);
// console.log(output);

// function expect(array, excluded) {
//   let output = [];
//   for (let element of array) {
//     if (!excluded.includes(element)) {
//       output.push(element);
//     }
//   }
//   return output;
// }
// const number = [1, 2, 3, 4];
// const output = move(number, 1, 2);
// console.log(output);

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position < 0 || position >= array.length) {
//     console.error("Invalid offset");
//     return array;
//   }
//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(position, 0, element);
//   return output;
// }

// const number = [1, 2, 3, 4, 1];

// console.log(countOccurance(number, 1));

// function countOccurance(array, searchElement) {
//   return array.reduce((acc, curr) => {
//     const occurance = curr === searchElement;
//     return acc + occurance;
//   });
// }

// const number = [1, 2, 3, 4];
// const max = getMax([1, 2, 3, 4, 3, 2, 1]);
// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;
//   return array.reduce((a, b) => {
//     return a > b ? a : b;
//   });
// }
// const movie = [
//   { title: "a", year: 2018, rating: 4.5 },
//   { title: "b", year: 2018, rating: 4.7 },
//   { title: "c", year: 2018, rating: 3 },
//   { title: "d", year: 2017, rating: 4.5 },
// ];
//All the movies in 2018 with rating >4
//Sort them by ratings
//Decending order
//only pick title

// const titles = movie
//   .filter((m) => m.year === 2018 && m.rating >= 4)
//   .sort((a, b) => a.rating - b.rating)
//   .reverse()
//   .map((m) => m.title);
// console.log(titles);

// walk();
// function walk() {
//   console.log("walking");
// }
// const run = function () {
//   console.log("Running");
// };
// run();
// function sum() {
//   let total = 0;
//   for (let element of arguments) {
//     total += element;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5));

// const numbers = [1, 2, 3, 4];
// const allPositive = numbers.every((n) => n > 0);
// console.log(allPositive);
// console.log();

// (function chai() {
//   console.log(`Db Conneted`);
// })();

// ((name) => {
//   console.log(`Db Connted ${name}`);
// })("harshal");

// const crickter = [
//   { name: "sachin", centuries: 100, year: 1989 },
//   { name: "Kohli", centuries: 81, year: 2008 },
//   { name: "Rohit", centuries: 48, year: 2007 },
//   { name: "Ponting", centuries: 71, year: 1995 },
//   { name: "MSD", centuries: 21, year: 2004 },
// ];
// console.log(
//   crickter.filter((c) => {
//     return c.year >= 2000 && c.centuries >= 70;
//   })
// // );
// const number = [1, 2, 3, -1];
// const filtered = number.filter((n) => n >= 0);
// console.log(filtered);
// const item = filtered.map((n) => `<li>` + n + `</li>`);
// const html = `<ul>` + item.join("") + `</ul>`;
// console.log(item);
// console.log(html);
// const a = filtered.map((val) => ({ value: val }));
// console.log(a);
// const number = arrayFromRange(-10, 4);
// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }
// console.log();
