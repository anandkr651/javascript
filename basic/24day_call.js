function setusername(username) {
  //complex db call
  this.username = username;
  console.log("hello");
}
function createuser(username, email, password) {
  setusername.call(this, username);
  this.email = email;
  this.password = password;
}
const chai = new createuser("chai", "chai@gmail.com", "12345");
console.log(chai);
/*hello
createuser {
  username: 'chai',       
  email: 'chai@gmail.com',
  password: '12345'       
} */


// const personk = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// This will return "John Doe":
// console.log( personk.fullName());

// const personl = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };
// const lperson = personl.fullName.call(person2);
//    console.log(lperson); // This will return "John Doe":

// const personm = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };
// const person11 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const mperson = personm.fullName.call(person11, "Oslo", "Norway");
//    console.log(mperson); //John Doe,Oslo,Norway
