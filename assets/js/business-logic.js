
function greetUsers() {

    var greetCounter = 0;
    if(localStorage['greet-count']){
        greetCounter = Number(localStorage['greet-count']);
    }
    
    let greetedUserName = "";
    let greetLanguage = "";

    var greetedUsers = {};

    function setUserName(userName) {
        greetedUserName = userName;
    }

    function getUserName() {
        return greetedUserName;
    }

    function clearStorage(){
        localStorage.clear();
    }

    function setCounter() {
        if (greetedUsers[getUserName()] === undefined) {
            greetCounter++;
            greetedUsers[getUserName()] = 0;
            localStorage["greet-count"] = greetCounter;
            
        }
        greetedUsers[getUserName()]++;
    }

    function getCounter() {
        // ? My counter variable stored in localStorage

        if (localStorage["greet-count"]) {
            greetCounter = Number(localStorage["greet-count"]);
            return greetCounter;
        } else {
            return greetCounter;
        }
    }

    function setLanguage(language) {
        greetLanguage = language;
    }

    function getLanguage() {
        return greetLanguage;
    }

    function getLanguagesGreet() {
        if (getLanguage() == "english") {
            return "Hi";
        }
        if (getLanguage() == "xhosa") {
            return "Molo";
        }
        if (getLanguage() == "sesotho") {
            return "Dumela";
        }
    }

    function getGreetedUsers() {
        return greetedUsers;
    }
    // this function greet the user ie - "Hi, John"
    function getUserGreeting() {
        setCounter();
        return getLanguagesGreet() + ", " + greetedUserName;
    }

    return {
        getUserName,
        getCounter,
        getLanguage,
        getUserGreeting,
        getLanguagesGreet,
        getGreetedUsers,
        setLanguage,
        setUserName,
        greetCounter,

        clearStorage,
    };
}
