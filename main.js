
const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();


navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
        console.log('You let me use your mic!')
      })
      .catch(function(err) {
        console.log('No mic for you!')
      });


function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {



    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I dont understand. Please repeat.";

    if (message.includes('Halo sistem')) {
      speech.text = "Hello, how can I help you?";
    }

     if (message.includes('di mana kamu')) {
      speech.text = "Just in your deepest inner heart, in the heart of east java, Malang city, Indonesia";
    }

       if (message.includes('Halo system')) {
      speech.text = "Hello, how can I help you?";
    }

           if (message.includes('Cara menghilangkan stres')) {
      speech.text = "Let your self relaxed, dont think about anything, keep on your mind and be yourself";
    }

               if (message.includes('cara menghilangkan stres')) {
      speech.text = "Let your self relaxed, dont think about anything, keep on your mind and be yourself";
    }

           if (message.includes('Siapa anda')) {
      speech.text = "I'm bombee, the spiritful youth from SMK Telkom Malang!";
    }

      if (message.includes('Siapa kamu')) {
      speech.text = "I'm bombee, the spiritful youth from SMK Telkom Malang!";
    }

    if (message.includes('bombi')) {
      speech.text = "I'm bombee, the spiritful youth from SMK Telkom Malang!";
    }

       if (message.includes('halo bombi')) {
      speech.text = "Hello ! I'm bombee, the spiritful youth from Telkom School Malang!, May I help you";
    }

    if (message.includes('halo')) {
      speech.text = "Hello ! I'm bombee, the spiritful youth from Telkom School Malang!, May I help you";
    }

    if (message.includes('Halo bombi')) {
      speech.text = "Hello ! I'm bombee, the spiritful youth from Telkom School Malang! May I help you?";
    }

    if (message.includes('tobat')) {
      speech.text = "aastaghfeerullah.";
    }

    if (message.includes('fine')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }

    if (message.includes('cuaca')) {
      speech.text = "Of course. Where are you currently?";
    }

    if (message.includes('Malang')) {
      speech.text = "It is 23 degrees and cloudy.";
    }

       if (message.includes('Sidoarjo')) {
      speech.text = "It is 29 degrees and cloudy.";
    }

       if (message.includes('Surabaya')) {
      speech.text = "It is 29 degrees and cloudy.";
    }
    
    if (message.includes('woy')) {
      speech.text = "It is 29 degrees and cloudy.";
    }
    
    if (message.includes('woi')) {
      speech.text = "aastaghfeerullaah";
    }

     if (message.includes('woy')) {
      speech.text = "aastagfeerullaah.";
    }

    
    if (message.includes('assalamualaikum')) {
      speech.text = "waa aalaaykoom saalaam maamaank.";
    }

          
    if (message.includes('Assalamualaikum')) {
      speech.text = "waa aalaaykoom saalaam maamaank.";
    }

       if (message.includes('Assalamualaikum bombi')) {
      speech.text = "sorry, Bombi isn't BDI member.";
    }

    if (message.includes('Haikal')) {
      speech.text = "he is fuckboy.";
    }


    speech.volume = 8;
    speech.rate = 0.5;
    speech.pitch = 10;
    
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});