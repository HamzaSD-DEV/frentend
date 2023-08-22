import React from 'react';
import NavbarComponent from "./components/NavbarComponent";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import DrawerComponent from "./components/DrawerComponent";
import './styles/app.scss'




function App() {
    return (
        <div className="App">
            <NavbarComponent/>
            <HeaderComponent/>
            <DrawerComponent/>
            <BodyComponent/>

        </div>
    );
}

export default App;
