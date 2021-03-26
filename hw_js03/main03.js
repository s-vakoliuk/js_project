//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let divArray = [];
for (let i=0; i<=9; i=i+1){
  divArray.push("Я програмую на Java Script");
  }
for (let i of divArray){
   document.write(`<div>`+i+`</div>`);
   document.write('<br>')
}
