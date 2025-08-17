//CALCULATOR PROGRAM

const display =document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay() {
    document.getElementById ("display").value = "";

}

function calculate(){
   try{ 
    display.value =eval(display.value);
}
catch(error){
    display.value ="Error";     //TO CATCH AND DISPLAY AN ERROR ON THE CALCULATOR
}
}
