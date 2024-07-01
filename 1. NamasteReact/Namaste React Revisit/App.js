    /*
        * Creating the nested structure
        *     <div id = 'parent'>
        *           <div id = 'child'>
        *               <h1> Hello World! </h1>
        *           </div>
        *     <div>
    */
    
    
    
    const heading = React.createElement("div", {id:'parent'}, 
                                React.createElement("div", {id:'child'},
                                        React.createElement("h1", {}, "Hello World!")));


    console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading); // the meaning of this line is to take h1 element created in react and place in the 
    // div with id root in the index.html file