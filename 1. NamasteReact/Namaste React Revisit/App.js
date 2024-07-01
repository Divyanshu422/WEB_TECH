
    const heading = React.createElement("h1", {id:'heading'}, "Hello world from React");

        //  what is heading? or what createElement gives to developer? => an object or an element
        // Checking the type of heading
        console.log(heading); //! An object which has inbuilts props (like id, attribute etc)

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading); // the meaning of this line is to take h1 element created in react and place in the 
    // div with id root in the index.html file