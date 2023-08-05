import React from 'react';
import NavbarComponent from "./components/NavbarComponent";
import {Login} from "./features/login/login";
import ResponsiveDrawer from "./components/Drawer";


function App() {
    return (
        <div className="App">
            <NavbarComponent/>
            <ResponsiveDrawer/>
            <Login/>
        </div>
    );
}

export default App;
