// node interviewQuestion.js to run this file.

// console.log("anand kumar")
// anand kumar
// PS D:\javascript>

// console.log("Value of Age is ",age);
// var age = 20;
// console.log("Value of Age is ",age);

// Value of Age is  undefined
// Value of Age is  20
// PS D:\javascript>

// age = 20;
// console.log("Value of Age is ",age);
// let age = 30;

// ReferenceError: Cannot access 'age' before initialization
// notes --> before line no. 16 all the line of this code is go to the temporal dead Zone.
// PS D:\javascript>

// myfun()

// var myfun = function(){
//     console.log("first"); 
// }

// myfun()

// function myfun(){
//     console.log("second"); 
// }

// myfun()

// second
// first
// first
// PS D:\javascript>
//notes --> all the variable is hoisted first then in the case of function, function defination are hoisted so "second" is display first.


// var variable = 10;
// (()=>{
//     console.log(variable);
//     variable=20;
//     console.log(variable);
// })();

// console.log(variable);
// var variable = 30;

// 10
// 20
// 20
// PS D:\javascript>

// foo=30;
// console.log("FOO",foo);
// var foo=100;
// console.log("FOO",foo);

// FOO 30
// FOO 100
// PS D:\javascript>

// variable =10;
// (()=>{
//     foo = 20;
//     console.log(variable);
//     var foo = 100;
//     variable=20;
//     console.log(variable);  
// })();

// console.log(foo);
// console.log(variable);
// var variable = 30;

// 10
// 20
// D:\javascript\interviewQuestion.js:77
// console.log(foo);
//             ^
// ReferenceError: foo is not defined


// for(var i=0;i<10;i++){
//     setTimeout(()=> console.log(i),0)
// }

// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// PS D:\javascript>
//notes --> this is the concept of event loop.
/*
callstack = callstack is the javascript engine in which the javascript code can run, without this code cannot run. 
*/

// for(let i=0;i<10;i++){
//     setTimeout(()=> console.log(i),0)
// }

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// PS D:\javascript>

// for(var i=0;i<10;i++){
//     setTimeout(()=> console.log(i),0);
//     Promise.resolve(console.log("i"))
// }

// i
// i
// i
// i
// i
// i
// i
// i
// i
// i
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// PS D:\javascript>

// var fullname = "piyush garg";
// var obj = {
//     fullname :"Hacked full name",

//     props :{
//         fullname : "inside props",
//         getfullname : function(){
//             return this.fullname;
//         }
//     },
//     getfullname : function(){
//         return this.fullname;
//     },
//     getfullnamev2 : ()=> this.fullname,

//     getfullnamev3 : (function(){
//         return this.fullname;
//     })()    
// }

// console.log(obj.props.getfullname());
// console.log(obj.getfullname());
// console.log(obj.getfullnamev2());
// console.log(obj.getfullnamev3());

// inside props
// Hacked full name
// undefined
// D:\javascript\interviewQuestion.js:172
// console.log(obj.getfullnamev3());
//                 ^
// TypeError: obj.getfullnamev3 is not a function

// var fullname = "piyush garg";
// var obj = {
//     fullname :"Hacked full name",

//     props :{
//         fullname : "inside props",
//         getfullname : function(){
//             return this.fullname;
//         }
//     },
//     getfullname : function(){
//         return this.fullname;
//     },
//     getfullnamev2 : ()=> this.fullname,

//     getfullnamev3 : (function(){
//         return this.fullname;
//     })()    
// }
// console.log(obj.props.getfullname());
// console.log(obj.getfullname());
// console.log(obj.getfullnamev2());
// console.log(obj.getfullnamev3);

// inside props
// Hacked full name  
// undefined    // arrow function always refer to the window object or global object ko refer karete hai.
// undefined
// PS D:\javascript>

// var fullname = "piyush garg";
// var obj = {
//     fullname :"Hacked full name",

//     props :{
//         fullname : "inside props",
//         getfullname : function(){
//             return this.fullname;
//         }
//     },
//     getfullname : function(){
//         return this.fullname;
//     },
//     getfullnamev2 : ()=> this.fullname,

//     getfullnamev3 : (function(){
//         return "piyush garg new";
//     })()    
// }
// console.log(obj.props.getfullname());
// console.log(obj.getfullname());
// console.log(obj.getfullnamev2());
// console.log(obj.getfullnamev3);

// inside props
// Hacked full name
// undefined
// piyush garg new
// PS D:\javascript>

// const piyush = {
//     name:"piyush garg",
//     sayName: function(){
//         console.log(this.name);
//     }
// }
// const jhon = {
//     name:"jhon doe",
//     sayName: function(){
//         console.log(this.name);
//     }
// }

// jhon.sayName();
// jhon doe
// PS D:\javascript>

// jhon.sayName.call(piyush);
// piyush garg
// PS D:\javascript>

// const piyush = {
//     name:"piyush garg",
//     sayName: function(){
//         console.log(this.name);
//     }
// }

// setTimeout(piyush.sayName,3*1000);
// undefined
// PS D:\javascript>

// setTimeout(piyush.sayName.bind(piyush),3*1000);
// piyush garg
// PS D:\javascript>

// const newfun = piyush.sayName.bind(piyush);
// setTimeout(newfun,3*1000);
// piyush garg
// PS D:\javascript>


//closure function
// setTimeout(()=>piyush.sayName(),3*1000);
// piyush garg
// PS D:\javascript>

// const obj = {
//     height:30,
// }
// console.log(obj.height);
// delete obj.height

// console.log(obj.height);

// 30
// undefined
// PS D:\javascript>

// const obj = Object.create({
//     height:30
// })
// console.log(obj.height);
// delete obj.height;
// console.log(obj.height);
// 30
// 30
// PS D:\javascript>