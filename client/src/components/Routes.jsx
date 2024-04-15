// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Challenges from '../pages/Challenges/Challenges';
import Etudiant from '../pages/Etudiants/Etudiants';
import HomePage from '../pages/Acceil/acceil';
import Login from '../pages/Login/login';
import Signup from '../pages/Signup/signup';
import Participer_challenge from '../pages/Particuper_au_challenges/particuper_au_challenge';

const RoutesApi = () => {
    return (
        <Switch>
            <Route path='/' exact element={HomePage}/>
            <Route path='/login' exact element={Login}/>
            <Route path='/signup' exact element={Signup}/>
            <Route path='/participer_challenge' exact element={Participer_challenge}/>
            <Route path='/dashboard' exact element={Dashboard}/>
            <Route path='/etudiants' element={Etudiant}/>
            <Route path='/challenges' element={Challenges}/>
        </Switch>
    );
};

export default RoutesApi;
