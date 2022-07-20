import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css';

import '@fontsource/comfortaa';
import '@fontsource/roboto';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-datepicker/dist/react-datepicker.css';


ReactDOM.render(
   
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    
    document.getElementById('root')
);
