const buttons = document.querySelectorAll(".button");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const results = document.querySelector("#results");

buttons.forEach(function (buttn) {
  buttn.addEventListener("click", function (e) {
    e.preventDefault();
    const one = parseInt(first.value);
    const two = parseInt(second.value);

    if (one === "" || one < 0 || isNaN(one)) {
      results.innerHTML = `please give the positive number ${first}`;
    }
    if (two === "" || two < 0 || isNaN(two)) {
      results.innerHTML = `please give the positive number ${second}`;
    }
    if (e.target.id === "addition") {
      const add = one + two;
      results.innerHTML = `<span>${add}</span>`;
    } else if (e.target.id === "substrction") {
      const sub = one - two;
      results.innerHTML = `<span>${sub}</span>`;
    } else if (e.target.id === "multiplication") {
      const mul = one * two;
      results.innerHTML = `<span>${mul}</span>`;
    } else if (e.target.id === "division") {
      const div = one / two;
      results.innerHTML = `<span>${div}</span>`;
    }
  });
});
