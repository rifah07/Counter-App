let count = 0;
const displayElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");



function incrementCount() {
  if (count >= 10) {
    alert("You have reached to the maximum value");
    displayElement.innerText = count;
    return ;
  } 
    count++;
    displayElement.innerText = count;
  
}

function decrementCount() {
  if (count <= 0) {
    alert("You have reached to the minimum value");
    displayElement.innerText = count;
    return;
  } 
    count--;
    displayElement.innerText = count;
  
}

incrementButton.addEventListener("click", incrementCount);
decrementButton.addEventListener("click", decrementCount);