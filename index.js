// var lst=['crash','kick-bass','snare','tom-1','tom-2','tom-3','tom-4'];

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  const in_html = document.querySelectorAll(".drum")[i];
  in_html.addEventListener("click", function () {
    make_sound(in_html.innerHTML);
    animate(in_html.innerHTML);
  });
}

document.addEventListener("keypress", function (e) {
  make_sound(e.key);
  animate(e.key);
});

function make_sound(pram) {
  switch (pram) {
    case "w":
      var w = new Audio("sounds/crash.mp3");
      w.play();
      break;
    case "a":
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      break;
    case "s":
      var s = new Audio("sounds/snare.mp3");
      s.play();
      break;
    case "d":
      var d = new Audio("sounds/tom-1.mp3");
      d.play();
      break;
    case "j":
      var j = new Audio("sounds/tom-2.mp3");
      j.play();
      break;
    case "k":
      var k = new Audio("sounds/tom-3.mp3");
      k.play();
      break;
    case "l":
      var l = new Audio("sounds/tom-4.mp3");
      l.play();
      break;

    default:
      console.log(pram);
  }
}

function animate(pram) {
  var act_btn = document.querySelector("." + pram);
  if (act_btn !== null) {
    act_btn.classList.add("pressed");
  }
  setTimeout(() => {
    if (act_btn !== null) {
      act_btn.classList.remove("pressed");
    }
  }, 100);
}
