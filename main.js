import './style.css'

let numberList = [];

document.getElementById("addNumber").addEventListener("click", () => {
  numberList.push(document.getElementById("numberInput").value)
  document.getElementById("numberListHtml").innerHTML = numberList.join(', ')
  });

  document.getElementById("selectMinimum").addEventListener("click", () => {
    let minimum = 9999999999
    numberList.forEach(element => {
        if (element<minimum) {
          minimum = element
        }
    });
    document.getElementById("numberListHtml").innerHTML = minimum;
  })