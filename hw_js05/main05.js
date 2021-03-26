//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let divArray = [];
for (let i=0; i<=19; i=i+1){
  divArray.push("Я програмую на Java Script");
  }
for (let i of divArray){
   document.write(`<h1>`+i+`</h1>`);
   document.write('<hr>');
}
