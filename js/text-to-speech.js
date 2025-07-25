function convertTextToSpeech() {
  const text = document.getElementById("textInput").value;
  const lang = document.getElementById("langSelect").value;
  const audioPlayer = document.getElementById("audioPlayer");

  if (!text.trim()) {
    alert("Please enter some text.");
    return;
  }

  const apiKey = "4a4653ca3a784589b0d241c6f8ad581c";

  const url = `https://api.voicerss.org/?key=${apiKey}&hl=${lang}&src=${encodeURIComponent(text)}`;

  audioPlayer.style.display = "none";

  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const audioUrl = URL.createObjectURL(blob);
      audioPlayer.src = audioUrl;
      audioPlayer.style.display = "block";
    })
    .catch(error => {
      alert("Error converting text to speech.");
      console.error(error);
    });
}
