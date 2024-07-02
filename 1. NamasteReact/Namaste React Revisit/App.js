        // Since we have installed the react using the package -> so we need to import the react into the file
        import React from 'react';
        import ReactDOM from 'react-dom';
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

    root.render(heading);