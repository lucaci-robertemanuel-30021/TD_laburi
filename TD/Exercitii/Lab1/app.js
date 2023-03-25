console.log('hello')
document.getElementById('text_field').setAttribute('value','Insert text');

var user = {
    "id": 1,
    "username": "Marcel",
    "mail": "marcelito123@gmail.com",
    "age":21,
}
console.log('User id is: '+user.id);
console.log('User name is: '+user.username);
console.log('User email is: '+user.mail);
console.log('User id is: '+user.age);

document.getElementById('txt_sum').addEventListener('input',inputSum);

function inputSum(){
    var inputNumber= parseInt(document.getElementById('txt_sum').value);
    sum(inputNumber);
}
function sum(n){
    if(typeof n=='undefined')
    
    return 'n is undefined';
    else{
    var sum=0;
    for(var i=1;i<=n;i++)
    sum+=i;
    return sum;}
}
function test(){
    console.log(sum(0)==0 ?"Passed":"Failed");
    console.log(sum(2)==3 ?"Passed":"Failed");
    console.log(sum(4)==10 ?"Passed":"Failed");
    console.log(sum()=="invalid" ?"Passed":"Failed");

}

test();

var counter=0;
document.getElementById('txt_sum').setAttribute('value',counter);

function printValue(divId,value){
    document.getElementById(divId).innerHTML = value;
}
printValue("txt_sum",0);

document.getElementById("inc").addEventListener("click",increment);
function increment(){
    if(counter>=0 && counter<10)
    counter++;
    else
    {counter=10;
    console.log("Cannot increment outside interval [0 10]");}
    printValue('txt_sum',counter);
    document.getElementById('txt_sum').setAttribute('value',counter);
}

document.getElementById("dec").addEventListener("click",decrement);
function decrement(){
    if(counter>0 && counter<=10)
    counter--;
    else
    {counter=0;
    console.log("Cannot decrement outside interval [0 10]");}
    printValue('txt_sum',counter);
    document.getElementById('txt_sum').setAttribute('value',counter);
}

//ex 3
function sum_test(n){

    sum(n);
    if(sum(n)==0)
    return 'not a number';
    else
    return sum(n);
}
console.log(sum_test(7));
console.log(sum_test("nfsdfds"));

//ex 4
function getFibonacci(n){

    var fib=1,fib2=1;sum=0;
    if(n<1 || n>10 || typeof n==='string')
      return 'not allowed';
      else
      {
      console.log('['+fib);

    for(var i=1;i<=n;i++){
        console.log(fib+' ');
        sum=fib+fib2;
        fib=fib2;
        fib2=sum;
        
    }
    console.log(']');
    return 'end of fibonacci';
     }
}

console.log(getFibonacci(5));
console.log(getFibonacci(12));
console.log(getFibonacci('asdsad'));

//ex 5
function getValues(){
var firstNumberText=document.getElementById("firstNumber").value;
var secondNumberText=document.getElementById("secondNumber").value;
var first=parseInt(firstNumberText);
var second=parseInt(secondNumberText);
summ(first,second);
subtract(first,second);
multiply(first,second);
divide(first,second);
}

function summ(first,second){
    //document.getElementById('total').innerHTML=first+second;
    console.log("The sum is: "+(first+second));
}

function subtract(first,second){

    //document.getElementById('total').innerHTML=first-second;
    console.log("The subtraction is: "+(first-second));
}

function multiply(first,second){

   // document.getElementById('total').innerHTML=first*second;
    console.log("The product is: "+(first*second));
}

function divide(first,second){

   // document.getElementById('total').innerHTML=first/second;
    console.log("The division is: "+(first/second));
}
