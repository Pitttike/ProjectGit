import './style.css'

let numberList = [];

document.getElementById("addNumber").addEventListener("click", () => {
  numberList.push(document.getElementById("numberInput").value)
  document.getElementById("numberListHtml").innerHTML = numberList.join(', ')
  });

  document.getElementById("selectMaximum").addEventListener("click", () => {
   
    let maximum = -9999999999
    numberList.forEach(element => {
        if (element>maximum) {
          maximum = element
        }
    });
    document.getElementById("numberListHtml").innerHTML = maximum;
  })