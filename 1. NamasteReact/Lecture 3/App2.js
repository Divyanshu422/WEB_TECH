import React from 'react';  
import ReactDOM from'react-dom/client';     

/*
  Sheet 1: In this sheet we will create 2 component: header and title
           and render the title component inside the Header component.

  What is component? a JS function which return the  Jsx code
*/

// Title component
    const Title = () =>{
        return (
            <h1 id='title'>This is the title component</h1>
        )
    }

    // Header component:
    const Header = () => (
            <div>
                <h1 id='heading'>This is the header component</h1>
                <Title/>
            </div>
        )

    const root = ReactDOM.createRoot(document.getElementById('root'));

        // This is the rendering of jsx code -> root.render(jsxHeading);
        // But to render the Functional Component: Following syntax is required
        
    root.render(<Header/>);
        


