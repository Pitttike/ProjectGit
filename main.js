import './style.css'

let numberList = [];

document.getElementById("addNumber").addEventListener("click", () => {
  numberList.push(document.getElementById("numberInput").value)
})