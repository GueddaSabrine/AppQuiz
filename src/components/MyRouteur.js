import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';

const MyRouteur = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Accueil />}/>

        </Routes>
        </Router>
    );
};

export default MyRouteur;