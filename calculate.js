


function appendvalue(value){
    document.getElementById("result").value +=value;
}
function clearResult(){
    document.getElementById("result").value="";
}
function calculate(){
   let expression=document.getElementById("result").value;
try{
    document.getElementById("result").value=eval(expression);

}catch (error){
    document.getElementById("result").value="Error";
}
}
