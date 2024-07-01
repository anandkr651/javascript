const clock = document.getElementById('clock')
const date = document.getElementById('date')

setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

setInterval(function () {
    let day = new Date()
    date.innerHTML = day.toLocaleDateString();
})