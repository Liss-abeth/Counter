// set inital cound
let count=0;

// select values and buttons

const values=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
btn.addEventListener('click',function(e){
  const styles=e.currentTarget.classList;  
  if(styles.contains("decrease")){
    count--;
  }
  else if(styles.contains("increase")){
    count++;
  }
  else{
    count=0;
  }
  if (count>0){
    values.style.color="blue";
  }
  if(count<0){
    values.style.color="red";
  }
  if(count===0){
    values.style.color="black"
  }
  values.textContent=count;
});
});
console.log(btns);