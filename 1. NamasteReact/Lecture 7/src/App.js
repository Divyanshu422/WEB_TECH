import React from "react";
import ReactDOM from'react-dom/client';   
import Header from './components/Header'
import Body from './components/Body'


// Creating the Restaurant card: which has followinG


// creating the parent container in which all component are rendered

const AppLayout = () => {
    return (
        <div className="App">
            <Header/>
            <Body/>

        </div>
    )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);