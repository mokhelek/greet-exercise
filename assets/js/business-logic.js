function greetUsers() {
    var greetCounter = 0;
    if (localStorage["greet-count"]) {
        greetCounter = Number(localStorage["greet-count"]);
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

    function setCounter() {
        if (greetedUsers[getUserName()] === undefined) {
            greetCounter++;
            greetedUsers[getUserName()] = 0;
            localStorage["greet-count"] = greetCounter;
        }
        greetedUsers[getUserName()]++;
    }

    function getCounter() {
       
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
            return "Hello";
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

    function getUserGreeting() {
        setCounter();
        return getLanguagesGreet() + ", " + greetedUserName;
    }

    function clearStorage() {
        localStorage.clear();
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
