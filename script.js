let btnYes = document.getElementsByClassName('button-yes')[0]
btnYes.onclick = function(event){
    event.preventDefault()
    alert("Good.")
}

let btnNo = document.getElementsByClassName('button-no') [0]
btnNo.onclick = function(event) {
  event.preventDefault()
  alert("You need more time...")
}

let cube = document.getElementsByClassName('cube') [0]
cube.onclick = function() {
  alert("It's just useless moving cube. Leave it alone.")
}

let qMark = document.getElementsByClassName("q_mark") [0]
qMark.onclick = function() {
  alert("Stop pixel hunting. This page has nothing interesting. Really.")
}

let place = document.getElementsByClassName("place") [0]
place.onclick = function() {
  alert("Does this word makes you feel cozy too?")
}
