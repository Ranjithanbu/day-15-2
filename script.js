function clearScreen() {
    document.getElementById("result").value=""
}
function display(value) {
    document.getElementById("result").value+=value
    
}
function calculate(){

    let a=document.getElementById("result").value
    
let b=eval(a)
if(b===undefined){
    document.getElementById("result").value="please enter value"  
}
else(document.getElementById("result").value=b)
}