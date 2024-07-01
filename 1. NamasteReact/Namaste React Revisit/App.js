    /*
        * Creating the nested structure
        *     <div id = 'parent'>
        *           <div id = 'child1'>
        *               <h1> Hello World! I am sibling 1</h1>
        *               <h1> Hello World! I am sibling 2 </h1>
        *           </div>
        *           <div id = 'child2'>
        *               <h1> Hello World! I am sibling 3</h1>
        *               <h1> Hello World! I am sibling 4</h1>
        *           </div>
        *     <div>
    */
    
    // When u want to create the sibling -> u need to pass the 3rd argument as array
    
    const heading = React.createElement("div", {id:'parent'}, 
                                [ React.createElement("div", {id:'child'},
                                       [
                                        React.createElement('h1',{},'Hello World! I am sibling 1'), 
                                        React.createElement('h1',{},'Hello World! I am sibling 2')
                                       ]),
                                 React.createElement("div", {id:'child2'},
                                        [
                                         React.createElement('h1',{},'Hello World! I am sibling 3'), 
                                         React.createElement('h1',{},'Hello World! I am sibling 4')
                                        ]),
                                ]);


    console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading); // the meaning of this line is to take h1 element created in react and place in the 
    // div with id root in the index.html file