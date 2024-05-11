 // ! Creating the element of react using -> React.createElement() which takes 3 parameters.
/*   
    We have not talked about the 2nd parameter of the React.createElement(). the 2nd parameter is 
    used to provide the id to the element.
*/
 const heading = React.createElement("h1", {id:'heading'}, "Hello world from React side");

        console.log(typeof heading);   //! Object
        console.log(heading);  
        //*  the heading is not the element rather object of the react. ==> which when rendered gives an element of html.

 // getting the root element of html using -> ReactDOM
 const root = ReactDOM.createRoot(document.getElementById("root"));

 // rendering the react element into the root element
 root.render(heading);





 //* Note
 /*
            -> The root, heading are object of the react and reactDOM.
            -> the creation of the element is done by React whereas the creation of the root element is done by ReactDOM
            -> The root.render() is the method of the reactDOM which takes the React object and converts it into the HTML element.
 */
 