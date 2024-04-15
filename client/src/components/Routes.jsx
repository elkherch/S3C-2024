import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import AcceuilLayout from './layout/AcceuilLayout';
import LoginLayout from './layout/LoginLayout';
import HomePage from '../pages/Acceil/acceil';
import Login from '../pages/Login/login';
import Dashboard from '../pages/Dashboard';
import Etudiant from '../pages/Etudiants/Etudiants';
import Challenges from '../pages/Challenges/Challenges';
import Participer_challenge from '../pages/Particuper_au_challenges/particuper_au_challenge';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <AcceuilLayout>
                        <HomePage />
                    </AcceuilLayout>
                </Route>
                <Route path='/login' exact>
                    <LoginLayout>
                        <Login />
                    </LoginLayout>
                </Route>
                
                <Route path='/dashboard' exact>
                    <AdminLayout>
                        <Dashboard />
                    </AdminLayout>
                </Route>
                <Route path='/etudiants'>
                    <AdminLayout>
                        <Etudiant />
                    </AdminLayout>
                </Route>
                <Route path='/challenges'>
                    <AdminLayout>
                        <Challenges />
                    </AdminLayout>
                </Route>
                <Route path='/participer_challenge'>
                    <AcceuilLayout>
                        <Participer_challenge />
                    </AcceuilLayout>
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
