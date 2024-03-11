const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros =['superman',"flash","batman"];

marvel_heros.push(dc_heros);

//console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

 marvel_heros.concat(dc_heros)
 //console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros);

const allnewheros = [...marvel_heros,...dc_heros]
//console.log(allnewheros);

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarray = anotherarray.flat(Infinity)

//console.log(realanotherarray );


// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hitesh"));
// console.log(Array.from({name:"hitesh"}));


let a =100;
let b =200;
let c =300;
//console.log(Array.of(a,b,c));

const mysym =Symbol('key1')

const jsuser = {
 accountid : 1435666666,
 accountemail : "anand@gmail.com",
[ mysym]: "mykey1",
 accountpassword : "65970875",
 accountcity : "patna"
}
// console.log(jsuser.accountid);
// console.log(jsuser["accountid"]);
// console.log(jsuser[mysym]);
// console.log(typeof jsuser.mysym);

jsuser.accountemail = "anand@21434.com";
//console.log(jsuser.accountemail);
//Object.freeze(jsuser)
jsuser.accountemail = "anand@21.com";
//console.log(jsuser.accountemail);

jsuser.greeting = function(){
    console.log("hello js user");
}
//console.log(jsuser.greeting());


jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.accountcity}`);
}
//console.log(jsuser.greetingtwo());


const tinderuser = new Object()
// console.log(tinderuser);

const tinderusera = {}
 tinderusera.id ="123abc"
 tinderusera.name = "sanjay"
 tinderusera.isloggein = false

//console.log(tinderusera);

const regularuser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
//console.log(regularuser.fullname.userfullname.lastname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}

const obj3 = {obj1,obj2}

//const obj3= Object.assign({},obj1,obj2,obj4)

//const obj3 = {...obj1,...obj2}
//console.log(obj3);


const users = [
    {
        id:1,
        email : "a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
]

users[2].email
// console.log(tinderusera);
// console.log(Object.keys(tinderusera));
// console.log(Object.values(tinderusera));
// console.log(Object.entries(tinderusera));

//  console.log(tinderusera.hasOwnProperty('isloggein'));

const course ={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}

const {courseinstructor} =course
//console.log(courseinstructor);