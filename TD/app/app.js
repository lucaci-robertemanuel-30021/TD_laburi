

function updateTitle(){
let appTitle=document.getElementById("app-name");
appTitle.innerText="Poggg"; //write to the DOM
}
setTimeout(() => updateTitle(),2500);

function login(){

let username=document.getElementById('username');
let message=document.getElementById('result');
message.innerText =`Logging in ${username.value}`; //aici nu mere
console.log(username.value);
}
login();

let user;
 const sum=100;

 user={name:'Admin', age:20,
 accounts:{
 bank:'BT',amount:'50'
 },
 isActive:true
 };

 console.log(user)
 sum=20;

 //CRUD create read update delete
