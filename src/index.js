import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'
import store from './store/store'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
//import { createTheme } from '@mui/material/styles';

import { Provider } from 'react-redux'
//import {ThemeProvider} from "@mui/material";

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
// let theme = createTheme({
//     palette: {
//         primary: {
//             main: '#0052cc',
//         },
//         secondary: {
//             main: '#edf2ff',
//         },
//     },
// });
root.render(
    <Provider store={store}>
        {/*<ThemeProvider theme={theme}>*/}
        <App />
        {/*</ThemeProvider>*/}
    </Provider>
)