// let num1 = 9;
// let num2 = 10;

// let first = document.getElementById("first").innerText+= num1;// apart from num1 i wanna use value 1 which is f1.value
// let second = document.getElementById("second").innerText += num2;



let add = document.getElementById("add").onclick=function(){calculate(added())}
let subtract = document.getElementById("subtract").onclick=function(){calculate(subtracted())}
// let mutiplied = document.getElementById("multiply").onclick=function(){calculate(mutiplye())}
let divided = document.getElementById("divide").onclick=function(){calculate(divide())}

let  resulted=document.getElementById("result")

function added() {
    let num1=parseFloat(f1.value)
    let num2=parseFloat(f2.value)
   return  num1+num2

}
function subtracted(){
    let num1=parseFloat(f1.value)
    let num2=parseFloat(f2.value)
   return  num1-num2

  
}
function divide(){
    let num1=parseFloat(f1.value)
    let num2=parseFloat(f2.value)
   return num2!==0 ? num1/num2: 'Cannot divide'


}
// function mutiplye(){
//     let num1=parseFloat(f1.value)
//     let num2=parseFloat(f2.value)
//    return  num1*num2

// }
function calculate(value){ // get the function
   resulted.innerText="The value is "+value

}
let f1=document.getElementById("val1") // print number
let f2=document.getElementById("val2")
let form=document.getElementById("forms")
let storedValue1;
let storedValue2;
form.addEventListener('submit',function(el){
    el.preventDefault();
    document.getElementById("first").innerText=`First No:${f1.value}`
    document.getElementById("second").innerText=`Second No:${f2.value}`
});
