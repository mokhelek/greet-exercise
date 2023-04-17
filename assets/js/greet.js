
var greetCounter = 0;

if(localStorage['greet-count']){
    greetCounter = Number(localStorage['greet-count']);

    var greetCounterElement = document.querySelector(".greet-counter");
    greetCounterElement.innerHTML = greetCounter ;
}

let myGreetFunction = greetUsers();
var greetCounterElement = document.querySelector(".greet-counter");
var greetUser = document.querySelector(".greet-msg");


function greetTheUser() {
    myGreetFunction.getUserGreeting();
    greetUser.innerHTML = myGreetFunction.getUserGreeting();
    greetCounterElement.innerHTML = myGreetFunction.getCounter() ;
    let wavingHand= document.querySelector(".waving-hand")
    wavingHand.style.display = "inline-block";
}

function setValues() {
    nameInput = document.querySelector(".user-name-input").value;
    languageInput = document.querySelector(".greetingLanguage:checked");  

    if(nameInput == "" && languageInput == null){
        alert("enter your name and select language")
    }else{
        if(nameInput == ""){
            alert("enter your name")
        }else{
            myGreetFunction.setUserName(nameInput);
        }

        if(languageInput == null){
            alert("enter language")
        }else{
            myGreetFunction.setLanguage(languageInput.value);
        }
    }
    

    // ! when clearing the values, just set the value of radio buttons to "null"

    if( nameInput=="" || languageInput == null ){

    }else{
        greetTheUser()
    }
    
}

const greetButton = document.querySelector(".greet-btn");
greetButton.addEventListener("click", setValues);


const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click",function (){
    localStorage.clear();
    nameInput = document.querySelector(".user-name-input");
    languageInput = document.querySelectorAll(".greetingLanguage");
    nameInput.value = "";

    for(let i =0; i < languageInput.length ; i ++){
        languageInput[i].checked = false ;
    }
    
    location.reload()
})


