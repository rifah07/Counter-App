let count=0;
const displayElement=document.getElementById('counter');
const incrementButton=document.getElementById('increment');
incrementButton.addEventListener('click' , incrementCount);

const decrementButton=document.getElementById('decrement');
decrementButton.addEventListener('click' , decrementCount);




function incrementCount(){
  if(count>=10 )
{
    alert('You have reached to the maximum value');
    displayElement.innerText=count;
  return count;

}
   else{
    count++;
    displayElement.innerText=count;}
   
}




function decrementCount() {

  if(count<=-10 )
{
    alert('You have reached to the minimum value');
    displayElement.innerText=count;
    return count;

}

else{
  count --;
  displayElement.innerText = count;}
}