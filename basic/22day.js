const users = {
username: "hitesh",
logincount : 8,
signedin : true,

getuserdetails : function(){
    console.log("got user detailsfrom database");
    console.log(`username:${this.username}`);
    console.log(this);
}
}
// console.log(users.username);
// console.log(users.getuserdetails());
// console.log(this);


// const promiseone = new Promise()
// const date = new date()

function user(username,logincount,isloggedin){
  this.username = username;
  this.logincount = logincount;
  this.isloggedin = isloggedin;

    this.greeting = function(){
       console.log(`welcome ${this.username}`);
   }
  return this
}

const userone = new user("hitesh",12,true)
const usertwo = new user("chaiaurcode",11,false)
console.log(userone.constructor);
// console.log(usertwo);
// console.log(userone);