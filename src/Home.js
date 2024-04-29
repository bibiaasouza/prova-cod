import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.js';
import './App.css';

function Inicial(){
    return(
        <div className='fotos'>
        <img src={require('./FOTO3.jpg')} alt="turma"/>
        <img src={require('./FOTO1.jpg')} alt="tali"/>
        <img src={require('./FOTO2.jpg')} alt="SUS"/>
        </div>
    )
} 

export default Inicial;