const personn = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person12 = {
    firstName: "Mary",
    lastName: "Doe"
}
// console.log(personn.fullName.apply(person12)); // This will return "Mary Doe":