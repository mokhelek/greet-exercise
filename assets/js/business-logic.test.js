describe("Testing The Business Logic Of My Greet Exercise", function () {
    it("should return the specified language", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setLanguage("sesotho");

        assert.equal("sesotho", myGreetFunction.getLanguage());
    });

    it("should return the name of the user", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setUserName("John");

        assert.equal("john", myGreetFunction.getUserName());
    });
});

describe("Testing The Different Languages' Greetings", function () {
    it("should display 'Dumela' if language is set to sesotho ", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setLanguage("sesotho");

        assert.equal("Dumela", myGreetFunction.getLanguagesGreet());
    });

    it("should display 'Molo' if language is set to Xhosa ", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setLanguage("xhosa");

        assert.equal("Molo", myGreetFunction.getLanguagesGreet());
    });

    it("should display 'Hi' if language is set to English ", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setLanguage("english");

        assert.equal("Hello", myGreetFunction.getLanguagesGreet());
    });
});


describe("Testing The Use Cases Of The Greetings Exercise", function () {
    it("should greet Katleho in Sesotho", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setUserName("katleho");
        myGreetFunction.setLanguage("sesotho");

        assert.equal("Dumela, katleho", myGreetFunction.getUserGreeting());

    });

    it("should greet Nico in English", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setUserName("Nico");
        myGreetFunction.setLanguage("english");

        assert.equal("Hello, nico", myGreetFunction.getUserGreeting());
        myGreetFunction.clearStorage()

    });


    it("should greet Bjorn in Xhosa", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setUserName("Bjorn");
        myGreetFunction.setLanguage("xhosa");

        assert.equal("Molo, bjorn", myGreetFunction.getUserGreeting());
        myGreetFunction.clearStorage()

    });

});

describe("Testing My Counter Functionality", function(){
    it("Should display an integer of greeted users, 3 users in this case", function (){
        let myGreetFunction = greetUsers();
        
        myGreetFunction.setUserName("kat");
        myGreetFunction.setLanguage("xhosa");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("john");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();

        assert.equal(3 , myGreetFunction.getCounter() ) ;
        myGreetFunction.clearStorage()
    })

    it("Should display an integer of greeted users, 5 users in this case", function (){
        let myGreetFunction = greetUsers();

        myGreetFunction.setUserName("kat");
        myGreetFunction.setLanguage("xhosa");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("john");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("smith");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();

        myGreetFunction.setUserName("mary");
        myGreetFunction.setLanguage("sesotho");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("nicolas");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();

        assert.equal(5 , myGreetFunction.getCounter() ) ;
        myGreetFunction.clearStorage()
    })
})

describe("Testing My 'Unique User Counter' functionality ", function(){
    it("Should display an integer of unique greeted users, 3 users in this case ", function (){
        let myGreetFunction = greetUsers();

        
        myGreetFunction.setUserName("kat");
        myGreetFunction.setLanguage("xhosa");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("john");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();

        myGreetFunction.setUserName("paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        assert.equal(3 , myGreetFunction.getCounter() ) ;
        myGreetFunction.clearStorage()
    })

    it("Should display an integer of unique greeted users, 5 users in this case ", function (){
        let myGreetFunction = greetUsers();
        

        myGreetFunction.setUserName("kat");
        myGreetFunction.setLanguage("xhosa");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("John");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("Paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("Anna");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("William");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();

        

        myGreetFunction.setUserName("Paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("Paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        assert.equal(5 , myGreetFunction.getCounter() ) ;
        myGreetFunction.clearStorage()
    })

})
describe("Checking if Valid Inputs have been provided", function (){
    it("Should return true if name contains only letter", function (){
        let myGreetFunction = greetUsers();


        assert.equal(true,myGreetFunction.checkValidName("paul"))
        myGreetFunction.clearStorage()
    })

    it("Should return false if name contains any numbers", function (){
        let myGreetFunction = greetUsers();


        assert.equal(false,myGreetFunction.checkValidName("Paul25"))
        myGreetFunction.clearStorage()
    })

    it("Should return true if name contains spaces", function (){
        let myGreetFunction = greetUsers();


        assert.equal(true,myGreetFunction.checkValidName("Mokhele Katleho") )
        myGreetFunction.clearStorage()
    })

    it("Should return false if name contains any symbols", function (){
        let myGreetFunction = greetUsers();


        assert.equal(false,myGreetFunction.checkValidName("Mokhele Katleho!") )
        myGreetFunction.clearStorage()
    })

    it("Should return false if name input is blank", function (){
        let myGreetFunction = greetUsers();


        assert.equal(false,myGreetFunction.checkValidName("") )
        myGreetFunction.clearStorage()
    })

})
