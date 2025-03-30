const body = document.querySelector("body");

// document.getElementById('grey').addEventListener('click', function(){
//     body.style.backgroundColor = "grey"
// })
// document.getElementById('white').addEventListener('click', function(){
//     body.style.backgroundColor = "white"
// })
// document.getElementById('blue').addEventListener('click', function(){
//     body.style.backgroundColor = "blue"
// })
// document.getElementById('yellow').addEventListener('click', function(){
//     body.style.backgroundColor = "yellow"
// })

const buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // }
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        alert("wrong input");
        break;
    }
  });
});
