import React from 'react';
import NavbarComponent from "./components/NavbarComponent";
import {Login} from "./features/login/login";


function App() {
    return (
        <div className="App">
            <NavbarComponent/>
            <Login/>
        </div>
    );
}

export default App;
