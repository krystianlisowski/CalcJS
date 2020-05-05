function insert(val) {
    document.getElementById("result").value += val 
} 
  
function solve() 
{ 
    let firstValue = document.getElementById("result").value 
    let result = eval(firstValue)
    let registry = firstValue + '=' + result;
    addToHistory(registry);
    document.getElementById("result").value = result; 
} 

function sqrt() {
    let value = document.getElementById("result").value
    console.log(value);
    document.getElementById("result").value = Math.sqrt(value); 
}

function pow() {
    let value = document.getElementById("result").value
    document.getElementById("result").value = Math.pow(value, 2); 
}

function reset() 
{ 
    document.getElementById("result").value = "";
    let historyElement = document.getElementById('history');
    historyElement.innerHTML = ""
} 


function addToHistory(registry) {
    let historyElement = document.getElementById('history');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `${registry}`;
    historyElement.appendChild(paragraph);
}
