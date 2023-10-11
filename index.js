function greet(greeting, buttonId, newButtonLabel) {
  let clickMeButton = document.getElementById(buttonId);
  clickMeButton.innerHTML = newButtonLabel;
  console.log(greeting, "C11!!");
  clickMeButton.style.backgroundColor = "Red";
  clickMeButton.style.color = "Black";
  var sound = new Audio("playSound.wav");
  sound.play();
}
