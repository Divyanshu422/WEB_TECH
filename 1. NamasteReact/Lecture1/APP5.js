
// In the html the parent div has the child -> so while creating the element in the react we will pass the child in the
// 3rd parameter as showm
const parent = React.createElement("div", {id:'parent'}, 
                        // the 3rd argument is the child element of the parent div
                                                    React.createElement("h1", {id:'child'}, 'Hello world, I am the child element'));



// getting the root element of html using -> ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the react element into the root element
root.render(parent);



// Note:
/*

    In the sheet we have created the Nested element -> using the 3rd parameter of React.createElement as the child.
    through this way we can create the complex structure of html.

    Note: the parent in the line 4 is the object of react not the element of html. when the object of the react
    is rendered into the root element it will be converted into the html element.


*/