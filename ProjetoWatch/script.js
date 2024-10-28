var sec = 0
var min = 0
var hr = 0
var interval

function twoDigits(digit) {
    if (digit < 10)     {
        return ("0" + digit)
    }else {
        return (digit)
    }
}


function start() {
    watch()
    interval = setInterval(watch,1000)
}
function pause() {
   clearInterval(interval)
}
function stop() {
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById("wat").innerHTML="00:00:00" 
}


function watch() {
    sec = sec +1
    if (sec==60) {
        min = min+1
        sec = 0
        if(min==60) {
           hr = hr+1
           min = 0 
        }
    }
    document.getElementById("wat").innerHTML = twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec)
    
}