function multipleby5(num){
    return num*5;
}
multipleby5.power = 2;

console.log(multipleby5.power);
console.log(multipleby5(5));
console.log(multipleby5.prototype);

function createuser(username,score){
    this.username=username;
    this.score=score;
}

createuser.prototype.increment = function(){
  this.score++;
}

createuser.prototype.printme = function(){
   console.log(`score is ${this.score}`);
}
const chai = new createuser("chai",25);
const tea  =  new createuser("tea",250);

// chai.increment();
// tea.increment();

chai.printme();
tea.printme();

/* here's what happens behind the scenes when the new keyword is used :
a new object is created : the new keyword initiates the creation of a new javascript object.
a prototype is linked : the newly created object gets linked to the prototype property of the constructor function. this means that it has access to properties and methods defined on the constructor's prototype.
the constructor is called: the constructor function is called with the specified arguments and this is bound to the newly created object. if no explicit return value is specified from the constructor , javascript assumes this the newly created object to be the intended return value.
the new object is returned : after the constructor function has been called, if it doesn't retrun a non-primitive value (object, array,function,etc)the newly created object is returned.
*/

let myname = "hitesh          "
let mychannel = " chai     "
// console.log(myname.truelength);



let myhero = ["thor","spiderman"]

let heropower = {
    thor:"hammer",
    spiderman : "sling",
    getspiderpower:function(){
       console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
}
heropower.hitesh()

myhero.hitesh()

Array.prototype.heyhitesh = function(){
    console.log(`hitesh say hello`);
}
// myhero.heyhitesh()
// heropower.heyhitesh()


//inheritance
const user= {
    name:chai,
    email:"chai@google.com"
}
const teacher = {
    makevidoes : true
}
const teachingsupport = {
     isavailable :false
}
const tasupport = {
       makeassiment:'js assignment',
       fulltime : true,
       __proto__:teachingsupport
}

teacher.__proto__=user

//modern syntax
Object.setPrototypeOf(teachingsupport,teacher)


let anotherusername = "chaiaurcode        "
String.prototype.truelength = function(){
    //console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherusername.truelength()

"hitesh     ".truelength()
"icetea".truelength()