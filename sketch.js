const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = [
    "I'm good, what about you",
    "Better than ever",
    "Epic"
]

const weather = [
    "It is really pleasant",
    "Weather is fine",
    "Breezy and humid",
    "Sunny",
    "Windy",
    "Rainy"
]



recognition.onstart = function(){
    console.log("You Can Speak To The Microphone Now, Oh Yeah !!");
}

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

//adding the button
btn.addEventListener('click', ()=>{
    recognition.start();
    speech = new SpeechSynthesisUtterance();
    speech.text = "Welcome Sir";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
});


function readOutLoud(message){
    speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand that but I hope to learn more";

    if(message.includes("how are you")){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes("weather")){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }

    if(message.includes("time")){
        const timeAPI = "It is "+new Date().getHours() + " "+ new Date().getMinutes() + " right now";
        speech.text = timeAPI;
    }

    if(message.includes("YouTube")){
        speech.text = "Opening Youtube....";
        window.open('https://youtube.com');
    }

    if(message.includes("Google")){
        speech.text = "Opening Google....";
        window.open('https://google.com');
    }

    if(message.includes("play new english music")){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }

    if(message.includes("open my website")){
        speech.text = "Opening Your Website....";
        window.open('file:///D:/Using%20CSS%20in%20HTML/CSS.html');
    }

    if(message.includes("Tron")){
        speech.text = "Yup That's Me, Happy To Help";
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

