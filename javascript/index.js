// types of declarations
// var , let , const
// scope of level-> global scope

var g = 45;
console.log(g);

// local scope 

function localScope(){
    var h=34; //local scope
}

//  2.redeclaration
//  3. reassignment
//  4. hosting

// var declarations
// type of scope

var globalVar = "I am global"
console.log(globalVar)

function localVar(){
    var localVr= "I am local"
    console.log(localVr);
    console.log(globalVar)
}

localVar();
// console.log(localVr) ///error cz the scope of var is local



// 2 -> redeclaration


function reDec(){
    var x=55;
    var x=5;
    console.log(x);
}

reDec()  //redeclaration is allowed in var declaration

// Reassignment in var

function reAssign(){
    var y=90;
    y=88;
    console.log(y);
}


// .3->hoisting

function hoist(){
    console.log("before declaration",t);
    var t=34;
    console.log("after declaration",t);
}
hoist()  //hoisting is possible in var declaration


// let declaration
// type of scope 
let a=43
// console.log(a)

function d(){
    let r=34
    console.log(r)
    console.log(a)
}
d()

// // redeclaration in let 
// function q(){
//     let w=33
//     // let w=23; redeclaration is not allowed with let , it throwa error
//     console.log(w)
// }
// q()

// reassignment with let  

function e(){
    let w=33
    w=23; 
    console.log(w)
}
e()

// hoisting
function HoistLet(){
    // console.log("before declaration",j);
    let j=34;
    console.log("after declaration",j);


}
HoistLet()


// const declaration 
// type of scope 
const n=232;
console.log(n) //global declaration
function LocalConst(){
    const b= " i am local";
    console.log(b);
    console.log(n);
}
LocalConst();
// console.log(b);

// redeclaration in const
function qi(){
    const w=33
    // cosnt w=23; //redeclaration is not allowed with const , it throwa error
    console.log(w)
}
qi()

// reassignment with const

function ei(){
    const w=33
    // w=23;ṇ 
    console.log(w)
}
ei()

// hoisting 
// not allowed

// datatypes.
let num = 32; //int
let name = 'test'; // string
 let isactive = true; //boolean
 let user = null //null
 let age; //undefined

//  ref datatype

let person={
    name: 'test',
    age: 45
} //pbject

let number=[2,3,4,5,6]
console.log(typeof(user))