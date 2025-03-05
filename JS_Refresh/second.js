// -------------------Import And Export----------------

///// Normal Way //////

/* import {Rkey} from "./first";
console.log(4);
console.log(Rkey); */

///// By using Default /////

/* import name from "./first"; */

///// Multiple export variable import ////

/* import { v1 , v2 } from "./first";

import * as anyName from "./first"; */

// -------------------------------------------------------

// ------------Function ----------------------------------

// Normal Function
 function myFun(a , b){
    return a + b;
}

let ans = myFun(1,2);
console.log(ans); 

// Arrow Function 

let myFun1 = (a,b) =>{
    return a * b;
}
let ans1 = myFun1(3,2);
console.log(ans1);

// ----------------------------------------------

// -------------------Object----------------------

let myObjet ={
    name : "Ritesh",
    age : 23,
    any(a,b){
        return a*b;
    }
}
console.log(myObjet);
let kay = myObjet.any(123,2);
console.log(kay);

//----------------------------------------------

//---------------------Array and Its Method----------

const arr = ["Ritesh" , "Ram" , "Raju"];
console.log(arr[1]);

arr.push("Rahul");
console.log(arr);

const ind = arr.indexOf((item)=> {
    return item === "Ritesh";
})
console.log(ind);

const eiditArr = arr.map((item) => {
    return item = item + "!";
})
console.log(eiditArr);

// ------------------------------------------------------

// -------------Destructuring Array---------------------

// Array
const arr1 = ["Ritesh" , "Hello"];
console.log(arr1[0]);

const [Name , AnyThing] = ["Ritesh" , "Hiiii"];
console.log(Name);
console.log(AnyThing);

// Object
const user = {
    name : "Maya",
    age : 23
}
console.log(user.name);

const {name , age} = {
    name : "Rohit",
    age : 23
}
console.log(name);
console.log(age);

// ---------------------------------------------------

// ----------Spread Opereater------------------------

// For Array 
const arra = ["Ram" , "Jon"];
const arra1 = ["Maya"];

const meargeArra = [...arra , ...arra1];
console.log(meargeArra);

// For Object 
const obj = {
    name : "Dev",
    age :23
}

const obj1 = {
    college : "Sipna",
    ...obj
}
console.log(obj1);

// ----------------------------------------------------

// -------------Control Statement----------------------

const password = prompt("Enter your password");

if (password === "Hello") {
    console.log("Hello Works !");
} else if(password === "hello"){
    console.log("hello Works !");
} else {
    console.log("Request Not Granded.")
}

// -----------------------------------------------------

// ---------------Function As a Prarameter in Function---------------
function fun(){
     console.log("hello Fun");
}

const fun2 = () => {
    console.log("hello fun2");
}

setTimeout(fun , 2000);
setTimeout(fun2 , 3000);
setTimeout( () => {
    console.log("hellooooooooo")
} , 4000);

// ------------------------------------------------------