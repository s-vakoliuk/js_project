//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let divArray = [];
for (let i=0; i<=9; i=i+1){
  divArray.push("Я програмую на Java Script");
  }
for (let i of divArray) {
    document.write(`<h1>${i}</h1>`);
    document.write('<br>');
}