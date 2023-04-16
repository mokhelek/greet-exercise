
var greetCounter = 0;

if(localStorage['greet-count']){
    greetCounter = Number(localStorage['greet-count']);

    var greetCounterElement = document.querySelector(".greet-counter");
    greetCounterElement.innerHTML = greetCounter ;
}



let myGreetFunction = greetUsers();
var greetCounterElement = document.querySelector(".greet-counter");
var greetUser = document.querySelector(".greet-msg");

// ? My Name & Language Input 
var nameInput = document.querySelector(".user-name-input").value;
var languageInput = document.querySelector(".greetingLanguage:checked").value;


function greetTheUser() {
    myGreetFunction.getUserGreeting();
    greetUser.innerHTML = myGreetFunction.getUserGreeting();
    greetCounterElement.innerHTML = myGreetFunction.getCounter() ;
}

function setValues() {
    nameInput = document.querySelector(".user-name-input").value;
    languageInput = document.querySelector(".greetingLanguage:checked").value;

    myGreetFunction.setUserName(nameInput);
    myGreetFunction.setLanguage(languageInput);
    greetTheUser()
}

const greetButton = document.querySelector(".greet-btn");
greetButton.addEventListener("click", setValues);


const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click",function (){
    localStorage.clear();
    location.reload()
})


