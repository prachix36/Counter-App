// getting the elements using DOM manipulation
let counterValue = document.querySelector("input");
let errorMessage = document.getElementById("error-msg");
let resetButton = document.getElementById("reset-btn");
let increButton = document.getElementById("incre-btn");
let decreButton = document.getElementById("decre-btn");

let count = 0; //to initialize count when loading for first time

function updateCount(){
    //set the counter value in document
    counterValue.value = count;
}

function setCounter(){  
    //validating input 
    count = parseInt(counterValue.value);
    
    if(count > 100 || count < 0 ){
        errorMessage.textContent = "Enter number between 0 and 100"
        return
    }
    updateCount();
    errorMessage.innerText = "";

}

//using event listener for updating the count value based on the event occur by user
counterValue.addEventListener("input",setCounter);

resetButton.addEventListener("click",()=>{
    count = 0;
    updateCount();
}) 

increButton.addEventListener("click",()=>{
    if (count <100){
    count++;
    updateCount();}
}) 

decreButton.addEventListener("click",()=>{
    if (count > 0){
    count--;
    updateCount();}
})