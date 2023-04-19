var greetCounter = 0;

if (localStorage["greet-count"]) {
    greetCounter = Number(localStorage["greet-count"]);

    var greetCounterElement = document.querySelector(".greet-counter");
    greetCounterElement.innerHTML = greetCounter;
}

let myGreetFunction = greetUsers();
var greetCounterElement = document.querySelector(".greet-counter");
var greetUser = document.querySelector(".greet-msg");

function greetTheUser() {
    myGreetFunction.getUserGreeting();
    greetUser.innerHTML = myGreetFunction.getUserGreeting();
    greetCounterElement.innerHTML = myGreetFunction.getCounter();
    let wavingHand = document.querySelector(".waving-hand");
    wavingHand.style.display = "inline-block";

}

function setValues() {
    nameInput = document.querySelector(".user-name-input").value ;
    languageInput = document.querySelector(".greetingLanguage:checked");
    let languageError = document.querySelector(".language-error");
    let nameError = document.querySelector(".name-error");
    let nameLanguageError = document.querySelector(".name-language-error");
    let invalidNameError = document.querySelector(".invalid-name-error");
    let userExistError = document.querySelector(".name-exists-error");


    if (nameInput == "" && languageInput == null) {
        nameLanguageError.style.display = "block";
        setTimeout(() => {
            nameLanguageError.style.display = "none";
        }, 3000);
    } else {
        if (nameInput == "") {
            nameError.style.display = "block";
            setTimeout(() => {
                nameError.style.display = "none";
            }, 3000);
        }else if(myGreetFunction.checkValidName(nameInput) == false){
            invalidNameError.style.display = "block";
            setTimeout(() => {
                invalidNameError.style.display = "none";
            }, 3000);
        }
         else {
            myGreetFunction.setUserName(nameInput);
        }



        users = myGreetFunction.getGreetedUsers()
        stringUsers = JSON.stringify(users)
        if( (stringUsers ).includes(nameInput) ){
            userExistError.style.display = "block";
            setTimeout(() => {
                userExistError.style.display = "none";
            }, 3000);
        }


        if (languageInput == null) {
            languageError.style.display = "block";
            setTimeout(() => {
                languageError.style.display = "none";
            }, 3000);
        } else {
            myGreetFunction.setLanguage(languageInput.value);
        }
    }

    if (nameInput == "" || languageInput == null) {
    } else {
        greetTheUser();
    }
}

const greetButton = document.querySelector(".greet-btn");
greetButton.addEventListener("click", setValues);

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", function () {
    let resetSuccess = document.querySelector(".reset-success");

    localStorage.clear();
    nameInput = document.querySelector(".user-name-input");
    languageInput = document.querySelectorAll(".greetingLanguage");
    nameInput.value = "";

    for (let i = 0; i < languageInput.length; i++) {
        languageInput[i].checked = false;
    }

    resetSuccess.style.display = "block";
    setTimeout(() => {
        resetSuccess.style.display = "none";
    }, 2000);

    setTimeout(() => {
        location.reload();
    }, 2000);
});
