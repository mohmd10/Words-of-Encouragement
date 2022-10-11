// This function "renders" some bit of text
// as audio to the user.
function renderTTS(text) {
  var synthesis = window.speechSynthesis;

  console.log("Available Voices:");
  var voice = synthesis.getVoices().filter(function (voice) {
    console.log(voice.name + " " + voice.lang);
    return voice.name === 'Google UK English Female';
  })[0];

  // Create an utterance object
  var utterance = new SpeechSynthesisUtterance(text);

  // Set utterance properties
  utterance.voice = voice;
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.volume = getVolume();

  // Speak the utterance
  synthesis.speak(utterance);
}

function encourage() {
  let name = document.getElementById("name").value;
  let encouragement = document.getElementById("encouragement").value;
  let postScript = document.getElementById("post-script").value;

  let message = `Hello ${name}, I have something I would like to tell you. ${encouragement} Have a nice day! ${postScript} Keep Pushing Forward You Got This!`;

  renderTTS(message);
}

function getVolume(){
  let volume = document.getElementById("volume1").value;
  return volume;
}

const slider = document.getElementById("volume1")
const min = slider.min
const max = slider.max
const value = slider.value

var mediaClip = document.getElementById("mediaClip"); var volume1 = document.getElementById("volume1");

function playPause() {
  var mediaClip = document.getElementById("mediaClip");
    if (mediaClip.paused) {
        mediaClip.play();   
    } else {
        mediaClip.pause();
    }
}

function change() {
    var button1 = document.getElementById("button1");
    if (button1.value==="Play") button1.value = "Pause";
    else button1.value = "Play";
}

function setVolume() {
  var mediaClip = document.getElementById("mediaClip");
mediaClip.volume = document.getElementById("volume1").value;
}
