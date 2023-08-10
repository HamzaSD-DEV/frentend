import React from 'react';
import NavbarComponent from "./components/NavbarComponent";
import {Login} from "./features/login/login";
import Header from "./components/Header";
import Drawer from "./components/Drawer";




function App() {
    return (
        <div className="App">
            <NavbarComponent/>
            <Header/>
            <Drawer/>
            <Login/>
        </div>
    );
}

export default App;
