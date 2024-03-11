//ES6

class user{
  constructor(username,email,password){
  this.username=username
  this.email=email
  this.password=password
}
encryptpassword(){
    return `${this.password}abc`
}
changeusername(){
    return `${this.username.toUpperCase()}`
}
}

const chai =new user ("chai","chai@gmail.com","12345")
// console.log(chai.encryptpassword());
// console.log(chai.changeusername());



//behind the scene

function usera(username,email,password){
    this.username=username
    this.email=email
    this.password=password
  }

  usera.prototype.encryptpassword = function(){
    return `${this.password}xyz`
  }

  usera.prototype.changeusername  = function(){
    return `${this.username.toUpperCase()}`
  }

  const tea =new usera ("tea","tea@gmail.com","123")
// console.log(tea.encryptpassword());
// console.log(tea.changeusername());


//inheritance

class userb {
    constructor(username){
        this.username=username
    }
    logme(){
        //console.log(`username is ${this.username}`);
    }
}

class teacher extends userb{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addcourse(){
       // console.log(`a new course was added by ${this.username}`);
    }
}
const chaia = new teacher("chaia","chaia@gmail.com","123")
  
chaia.addcourse()
const massalachai =new userb("masalachai")
massalachai.logme()

// console.log(chaia===massalachai);
// console.log(chaia===teacher);
// console.log(chaia instanceof userb);


//

class userc {
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username  ${this.username}`);
    }
   static createid(){
        return `123`
    }
}

const hitesh =new userc("hitesh")
//console.log(hitesh.createid());

class teachera extends userc{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new teachera("iphone","i@phone.com")
iphone.logme();
console.log(iphone.createid());