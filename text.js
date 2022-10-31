
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
    const wor = 'djpdmmdiidiid'
    var speech = new SpeechSynthesisUtterance();

    // defing speech properties
    speech.lang =  "en-NG";
    speech.text = `${result}` + `${wor}`;
    speech.volume = 30;
    speech.pitch = 1;
    speech.rate = 0;


    window.speechSynthesis.speak(speech)



}

