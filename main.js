//--створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
let chysla=[1,2,3,4,5];
let litery=["a","b","c","d","e"];
let kupa=["a",true,"b",5,false]
console.log(chysla);
console.log(litery);
console.log(kupa);
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let myArray = [];
for (let i=0; i<=4; i=i+1){
   myArray[i]=prompt("Введіть значення масиву")
}
for ( let i of myArray) {
   console.log(i);
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let divArray = [];
for (let i=0; i<=9; i=i+1){
  divArray.push("Я програмую на Java Script");
  }
for (let i of divArray){
   document.write(`<div>`+i+`</div>`);
   document.write('<br>')
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let divArray = [];
for (let i=0; i<=9; i=i+1){
  divArray.push("Я програмую на Java Script");
  }
for (let i of divArray) {
    document.write(`<h1>${i}</h1>`);
    document.write('<br>');
}
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let digitArray = ['12','23','34','45','56','67','78','89','90','99'];
for (let i=0; i<=9; i=i+1) {
    console.log(digitArray[i]);
}
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let stringArray = ['Сергій','Наталя','Михась','Анна','Віталій','Людмила','Денис','Арсен','Василь','Максим'];
for (let i=0; i<=9; i=i+1) {
    console.log(stringArray[i]);
}
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixArray = ['Сергій', 81, true,'Анна', 2009,'Наталя', 79, false,'Михась', 2006];
for (let i=0; i<=9; i=i+1) {
    console.log(mixArray[i]);
}
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mixArray = ["Сергій",81, true, "Анна",2009, "Наталя", 79, false,"Михась", 2006];
for (let item of mixArray) {
   if (typeof item==='boolean'){
      console.log(item);
      console.log("_________");
   }
}
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let mixArray = ["Сергій",81, true, "Анна",2009, "Наталя", 79, false,"Михась", 2006];
for (let item of mixArray) {
   if (typeof item==='number'){
      console.log(item);
      console.log("_________");
   }
}
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let mixArray = ["Сергій",81, true, "Анна",2009, "Наталя", 79, false,"Михась", 2006];
for (let item of mixArray) {
   if (typeof item==='string'){
      console.log(item);
      console.log("_________");
   }
