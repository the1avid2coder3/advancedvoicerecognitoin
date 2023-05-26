x = 0;
y = 0;

screen_width = "window.innerWidth";
screen_height = "window.innerHeight";

draw_apple = "";
apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  to_number = Number(content);
  if(Number.isInteger(to_number));
  draw_apple = "set";

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: Started Drawing apple" + content; 

}

function setup() {
 canvas = CreateCanvas(150, 150)
 canvas.position(0, 150)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
function preload() {
  loadImage();
  apple = "apple.png";
}
