


const avatar = document.getElementById('avatar');

avatar.addEventListener('mouseover' , mouseOver)
avatar.addEventListener('mouseout', mouseOut)

function mouseOut() {
    avatar.innerHTML='Pablo Auterio'
}

function mouseOver() { 
    avatar.innerHTML='Bienvenidos';
}

// Reloj 

function startTime() {
    const actualhour = new Date();
    let hour = actualhour.getHours();
    let minutes = actualhour.getMinutes();
    let seconds = actualhour.getSeconds();

    document.getElementById('hours').textContent = hour;
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('hours').textContent = hour;
}
startTime();
setInterval(startTime, 1000);
