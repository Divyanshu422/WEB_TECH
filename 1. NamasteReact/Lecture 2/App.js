
// Import the react and react-dom components

import React from 'react';  //this react is comming from the node module
import ReactDOM from'react-dom/client';        //this reactDom is comming from the node module







// Creating the siibling structure -> for that we will use the array as the 3rd parameter
const parent = React.createElement("div", {id:'parent'}, [
    React.createElement("h1", {}, "I'm H1 element"),
    React.createElement("h2", {}, "I'm H2 element"),
    React.createElement("h3", {}, "I'm H3 element"),
    React.createElement("h4", {}, "I'm H4 element"),
    React.createElement("h5", {}, "I'm H5 element"),
    ]);

// getting the root element of html using -> ReactDOM



// getting the root element of html using -> ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the react element into the root element
root.render(parent);

//* Notes:
/*
1. Create the sibling structure of html -> for this we will use the array as 3rd parameter.
2. In this method react will throw an error in console window related to the key prop -> which will be solved latter.
*/
