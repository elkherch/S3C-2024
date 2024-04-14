import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Etudiant from '../pages/Etudiants/Etudiants'
import HomePage from '../pages/Acceil/acceil'

const Routes = () => {
    return (
        <Switch>
            {/* <Route path='/' exact component={HomePage}/> */}
            <Route path='/' exact component={Dashboard}/>

            <Route path='/etudiants' component={Etudiant}/>
        </Switch>
    )
}

export default Routes
