describe("Testing The Business Logic Of My Greet Exercise", function () {
    it("should return the specified language", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setLanguage("sesotho");

        assert.equal("sesotho", myGreetFunction.getLanguage());
    });

    it("should return the name of the user", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setUserName("John");

        assert.equal("John", myGreetFunction.getUserName());
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

        assert.equal("Hi", myGreetFunction.getLanguagesGreet());
    });
});


describe("Testing The Use Cases Of The Greetings Exercise", function () {
    it("should greet Katleho in Sesotho", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setUserName("Katleho");
        myGreetFunction.setLanguage("sesotho");

        assert.equal("Dumela, Katleho", myGreetFunction.getUserGreeting());

    });

    it("should greet Nico in English", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setUserName("Nico");
        myGreetFunction.setLanguage("english");

        assert.equal("Hi, Nico", myGreetFunction.getUserGreeting());
        myGreetFunction.clearStorage()

    });


    it("should greet Bjorn in Xhosa", function () {
        let myGreetFunction = greetUsers();

        myGreetFunction.setUserName("Bjorn");
        myGreetFunction.setLanguage("xhosa");

        assert.equal("Molo, Bjorn", myGreetFunction.getUserGreeting());
        myGreetFunction.clearStorage()

    });

});

describe("Testing My Counter Functionality", function(){
    it("Should display an integer of greeted users, 3 users in this case", function (){
        let myGreetFunction = greetUsers();
        
        myGreetFunction.setUserName("Kat");
        myGreetFunction.setLanguage("xhosa");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("John");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("Paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();

        assert.equal(3 , myGreetFunction.getCounter() ) ;
        myGreetFunction.clearStorage()
    })

    it("Should display an integer of greeted users, 5 users in this case", function (){
        let myGreetFunction = greetUsers();

        myGreetFunction.setUserName("Kat");
        myGreetFunction.setLanguage("xhosa");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("John");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("Smith");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();

        myGreetFunction.setUserName("Mary");
        myGreetFunction.setLanguage("sesotho");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("Nicolas");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();

        assert.equal(5 , myGreetFunction.getCounter() ) ;
        myGreetFunction.clearStorage()
    })
})

describe("Testing My 'Unique User Counter' functionality ", function(){
    it("Should display an integer of unique greeted users, 3 users in this case ", function (){
        let myGreetFunction = greetUsers();

        
        myGreetFunction.setUserName("Kat");
        myGreetFunction.setLanguage("xhosa");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("John");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("Paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        myGreetFunction.setUserName("Paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();

        myGreetFunction.setUserName("Paul");
        myGreetFunction.setLanguage("english");
        myGreetFunction.getUserGreeting();


        assert.equal(3 , myGreetFunction.getCounter() ) ;
        myGreetFunction.clearStorage()
    })

    it("Should display an integer of unique greeted users, 5 users in this case ", function (){
        let myGreetFunction = greetUsers();
        

        myGreetFunction.setUserName("Kat");
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


    // it("Should display an integer of greeted users, 5 users in this case", function (){
    //     let myGreetFunction = greetUsers();

    //     myGreetFunction.setUserName("Kat");
    //     myGreetFunction.setLanguage("xhosa");
    //     myGreetFunction.getUserGreeting();


    //     myGreetFunction.setUserName("John");
    //     myGreetFunction.setLanguage("english");
    //     myGreetFunction.getUserGreeting();


    //     myGreetFunction.setUserName("Smith");
    //     myGreetFunction.setLanguage("english");
    //     myGreetFunction.getUserGreeting();

    //     myGreetFunction.setUserName("Mary");
    //     myGreetFunction.setLanguage("sesotho");
    //     myGreetFunction.getUserGreeting();


    //     myGreetFunction.setUserName("Nicolas");
    //     myGreetFunction.setLanguage("english");
    //     myGreetFunction.getUserGreeting();

    //     assert.equal(5 , myGreetFunction.getCounter() ) ;
    // })
})
