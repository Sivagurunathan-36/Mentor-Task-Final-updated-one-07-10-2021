// window---document object

// console.log(window);
// window.alert("hello");

// const result = window.confirm("Are you there");

// console.log(result);

// const name = window.prompt("Enter your Name", "Jhp");

// console.log(name);

// inner function is executed when the timer ends
// window.setTimeout(() => console.log("Timer ended"), 1000 * 3)
// 1000ms = 1s

// const shiva = window.setInterval(() => console.log("shiva"), 1000 * 2);

// const x = 0;
// const intervalID = setInterval(function() {

//     // Your logic here

//     if (++x === 5) {
//         window.clearInterval(intervalID);
//     }
// }, 1000);

// clearInterval(shiva);

// var x = document.getElementsByClassName('box') = window.setInterval(() => console.log("box"), 1000 * 2);

// window.setTimeout(() => clearInterval(x), 1000 * 7);


// TaskS
// var i = 0;

// function change() {
//     // var doc = document.getElementById("box");
//     var color = ["black", "blue", "brown", "green"];
//     document.body.style.backgroundColor = color[i];
//     i = (i + 1) % color.length;
// }
// setInterval(change, 1000)

var i = 0;

function change() {
    // var doc = document.getElementById("box");
    var color = ["purple", "blue", "brown", "green"];
    box.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
var x = setInterval(change, 1000)
window.setTimeout(() => clearInterval(x), 1000 * 15)