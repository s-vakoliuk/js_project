//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let myArray = [];
for (let i=0; i<=4; i=i+1){
   myArray[i]=prompt("Введіть значення масиву")
}
for ( let i of myArray) {
   console.log(i);
}