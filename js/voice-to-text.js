function startListening() {
  const output = document.getElementById("result");

  if (!("webkitSpeechRecognition" in window)) {
    alert("Your browser doesn't support Speech Recognition");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-IN"; // Hinglish (Indian English)
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    output.value += transcript + " ";
  };

  recognition.onerror = function(event) {
    console.error("Error:", event.error);
    alert("Kuch error aaya: " + event.error);
  };
      }
