// Creating the element in the react using the createElement method which consume 3 parametere: name of tag, {id/class Name}, Message
const heading = React.createElement("h1", {}, "Hello world from React");
// Creating the root element in the react which take html root as parameter. this is
// place where the react renders its code. To create the root elment we need createRoot() method.

// Creating the element is the job of react but render the code into the html is the job of reactDom
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering the element in the html
root.render(heading);