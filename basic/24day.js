function setusername(username){
    //complex db call
    this.username=username
    console.log("hello")
}
 function createuser (username, email, password) {
        setusername.call(this, username)
        this.email = email
        this.password = password
    }
const chai = new createuser("chai","chai@gmail.com","12345")
console.log(chai)