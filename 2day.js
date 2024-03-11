const accountid = 1435666666;
let accountemail = "anand@gmail.com"
var accountpassword = "65970875"
accountcity = "patna"
 let accountstate;

//console.log(accountid);

accountemail = "anand@google.com"
 accountpassword = "123456"
accountcity = "ranchi"

//console.table([accountemail,accountpassword,accountcity,accountstate]);

let scores = " 33"
// console.log(typeof scores);
// console.log(typeof( scores));

let valueisnumber = Number(scores)
// console.log(typeof valueisnumber);
// console.log( valueisnumber);


// console.log("1" + 2);
// console.log(1 + "2");
//console.log("1" + 2 +2);
// console.log(1 + 2 +"2");


//console.log("2" > 1);
// console.log("02" > 1);


// console.log(null>0);
// console.log(null ==0);
// console.log(null>=0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

/*primitive;
7 types: string, number, boolean, null, undefine, symbol,bigint;

reference (non primitive);
array, object, function;   */


const id = Symbol('123');
const anotherid = Symbol('123');
// console.log(id);
// console.log(anotherid);
// console.log(id===anotherid);

const bigint =45567788625907543527n
//console.log(bigint);

const heros= ["shaktiman","nagaarjun","doga"];

let myobj = {
    name:"anand",
    age:22,
}

const myfunction = function(){
    //console.log("hello world");
}

// stack : primitive
// heap : non primitive

let myyoutubename = "anandbhagat.com"

let anothername = myyoutubename
anothername = "kumaranand"

// console.log(myyoutubename);
//  console.log(anothername);

let userone = {
    email : 'user@google.com'  
}

let usertwo  = userone;
usertwo.email = 'kumaranand@gmail.com';

// console.log(userone.email);
// console.log(usertwo.email);


const name ="hitesh";
const repocount = 50;

//console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('hitesh-hc-jabncb-Mnkjh');
//console.log(gamename);
//console.log(typeof gamename);

// console.log(gamename[3]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('h'));

 const newstring =gamename.substring(0,4);
//console.log(newstring);

const anotherstring =gamename.slice(-8,4);
 //console.log(anotherstring);

const newstringone ="   anand  ";
// console.log(newstringone);
// console.log(newstringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
//console.log(url.replace('%20', '-'));
//  console.log(url.includes('hitesh'));
// console.log(gamename.split('-'));

const score = 400;
//console.log(score);
//console.log(typeof score);

const balance = new Number(100);
// console.log(balance);
// console.log(typeof balance);


// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othernumber = 23.69187890;
//console.log(othernumber.toPrecision(3));


const hundreds =1000000000;
//console.log(hundreds.toLocaleString('en-IN'));
//console.log(typeof hundreds);

 //console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// console.log(Math.round(4.689));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.min(4,7,3,9));
// console.log(Math.max(4,7,3,9));

// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max = 20;
//console.log(Math.floor(Math.random()*(max-min +1))+min)

let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

let mycreateddate = new Date(2023 , 6 , 16);
// console.log(mycreateddate);
// console.log(new Date);

let mytimestamp = Date.now()
//    console.log(mytimestamp);
//    console.log(mycreateddate.getTime());
//    console.log(mydate.getTime());
// console.log(mydate.getDay());
// console.log(mydate.getDate());
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());
// console.log(mydate.getSeconds());
//    console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getMonth()+1);
// console.log(newdate.getFullYear());


 let mypen=newdate.toLocaleString('default',{
    // weekday:'long'
    // year:'numeric'
    // timeStyle:'full'
    // timeStyle:'long'
    hour:'numeric'
});

//console.log(mypen);