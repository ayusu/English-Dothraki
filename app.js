var btnTranslate = document.querySelector("#translated-btn")
var inputText = document.querySelector("#input-txt")
var outputDiv = document.querySelector("#output-txt")
var clearText = document.querySelector('#btn-clear')

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"



function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
}

function clickHandler() {

    var txtInput = inputText.value

    fetch(getTranslationURL(txtInput))
    .then(response => response.json())
    .then(json => {
        var translatedtxt = json.contents.translated;
        outputDiv.innerText = translatedtxt;
        })

    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)

clearText.addEventListener('click', function() {
    inputText.value=''
})


