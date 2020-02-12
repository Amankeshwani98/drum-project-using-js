
function handle(key)
{
  switch (key)
   {
    case "w":
       var audio = new Audio('sounds/tom-1.mp3');
       audio.play();
       break;

    case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;

    case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;

    case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    default:
    alert("press right key");
  }


}

function buttonanimation(key) {
  // when button is clicked
  var button_clicked=document.querySelector("."+key);
     button_clicked.classList.add("pressed");

  // after button is clicked
   setTimeout(function(){
     button_clicked.classList.remove("pressed");
   },100);
}

//mouse click functionality
var temp=document.querySelectorAll(".drum"); // it is an array
for (var i=0;i<temp.length;i++)
{
  temp[i].addEventListener("click",function()
{
  var button_ineer=this.innerHTML;
  handle(button_ineer);
  buttonanimation(button_ineer);
});
}


// key press functionality
document.addEventListener("keypress",function (event) {
  handle(event.key);
  buttonanimation(event.key);

})
