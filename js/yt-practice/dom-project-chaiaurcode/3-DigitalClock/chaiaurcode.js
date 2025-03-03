const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date()
    console.log(date.toLocaleTimeString());
    // console.log(date.toLocaleDateString());
    clock.innerHTML = `<span>${date.toLocaleTimeString()}</span> <br> <span>${date.toLocaleDateString()}</span>`
}, 1000)