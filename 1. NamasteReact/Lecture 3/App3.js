import React from 'react';  
import ReactDOM from'react-dom/client';     


const number = 1000;
    // 1st jsx element
    const element = <span>Jsx element with no brackets </span>
    // 2nd jsx element
    const jsxElement = (
        <div>
            <h1>Hello I am the jsx element</h1>
            <h2>Hello I am the jsx element</h2> 
            {element}       
        </div>
        );
    
    const Header = () => (
        
            <div>
                <h1>This is the header component</h1>
                <h2>{number}</h2>
                <div>{jsxElement}</div>      
            </div>
        )

    const root = ReactDOM.createRoot(document.getElementById('root'));    
    root.render(<Header/>);
        




