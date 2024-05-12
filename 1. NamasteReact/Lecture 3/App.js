import React from 'react';  
import ReactDOM from'react-dom/client';       

// * creating react code using JSX -> Jsx is not html rather it is html like syntax.
// * In jsx => we write HTML like syntax into the javaScript. the jsx code is 
// * transpiled into the javascript, HTML by the parcel (Babel)
    const jsxHeading = <h1 id='heading'>Hello world</h1>;

                        /* this is the react code which is equivalent to line 7
                        * const heading = React.createElement(
                        *   'h1',
                        *   { id: 'heading' },
                        *   'Hello world'
                        * );
                        */

    //* 2nd concept of jsx language: it is mandatory to use bracket if we are writing the JSX code in
    //* the multiple lines. the jsx uses the camelCase syntax.
            const jsxHeading2 = (
                <h1 id='heading'>
                    Hello world
                </h1>
            );

    //* 3rd concept: writing the functional component: 
    //* A functional component is JS function which return a react element/component. eg:
    //* the component naming has to start with capital letter
    const HeadingComponent = () => (
        <div id='component'>
         <h1 id='heading'>Hello world</h1>;
        </div>
    )





const root = ReactDOM.createRoot(document.getElementById('root'));

// This is the rendering of jsx code -> root.render(jsxHeading);
// But to render the Functional Component: Following syntax is required

root.render(<jsxHeading/>);

