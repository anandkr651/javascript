class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost:300";

    //requirement
    document
      .querySelector("button")
      .addEventListener("click", this.handleclick.bind(this));
  }
  handleclick() {
    console.log("button click");
    console.log(this.server);
  }
}
const app = new React();



// const persono = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };
// const person13 = {
//   firstName: "John",
//   lastName: "Doe",
// };
//    console.log( persono.fullName.apply(person13, ["Oslo", "Norway"]));  //John Doe,Oslo,Norway
/*The difference is:
    The call() method takes arguments separately.
    The apply() method takes arguments as an array.*/

/*With the bind() method, an object can borrow a method from another object.
    The example below creates 2 objects (person and member).
    The member object borrows the fullname method from the person object:*/

// const personp = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName = personp.fullName.bind(member);
// console.log(fullName()); //Hege Nilsen
