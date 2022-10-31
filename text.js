
const btn = document.getElementById('btn')
const img = document.getElementById('img')

//btn clears the textarea inputs

btn.onclick = () => {
    let textarea = document.getElementById('text')
    textarea.value = ''
}


img.onclick = () => {
    const textarea = document.getElementById('text')
    let word = textarea.value
    let result = word.toLowerCase();
    var speech = new SpeechSynthesisUtterance();

    // defing speech properties
    speech.lang =  "en-NG";
    speech.text = `${result}`;
    speech.volume = 30;
    speech.pitch = 1;
    speech.rate = 1;


    window.speechSynthesis.speak(speech)



}

