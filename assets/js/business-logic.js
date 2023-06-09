function greetUsers(counter) {

    var greetCounter = counter || 0;

    let greetedUserName = "";
    let greetLanguage = "";
    var greetedUsers = {};

    function setUserName(userName) {
        greetedUserName = userName.toLowerCase() ;
    }

    function getUserName() {
        return greetedUserName;
    }

    function userExist(validate){
        return validate;
    }

    function setCounter() {
        if (greetedUsers[getUserName()] === undefined && getUserName() != "" ) {
            greetCounter++;
            greetedUsers[getUserName()] = 0;
           
        }else{
            userExist(false);
        }
        greetedUsers[getUserName()]++;
    }

    function getCounter() {
       
        return greetCounter;
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

    function checkValidName(userName) {
        const regex = /^[A-Za-z\s]+$/
        return regex.test(userName);
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
        checkValidName,
        userExist,
    };
}
