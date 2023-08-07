import React from 'react';
import NavbarComponent from "./components/NavbarComponent";
import {Login} from "./features/login/login";
import ResponsiveDrawer from "./components/Drawer";
import MultiActionAreaCard from "./components/card";


function App() {
    return (
        <div className="App">
            <NavbarComponent/>
            <ResponsiveDrawer/>
            <MultiActionAreaCard/>
            <Login/>
        </div>
    );
}

export default App;
