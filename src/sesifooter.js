import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.js';
import './App.css';

function logo2() { 
    return (
        <div className='sesi'>
            <a><img src={require('./SESI.png')} alt="sesi" /></a>
        </div>

    )
}

export default logo2;