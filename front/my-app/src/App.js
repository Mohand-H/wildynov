import React, { Component } from 'react'
import './App.css'
<<<<<<< HEAD

import { Router } from '@reach/router'
import Login from './components/login/Login'
import Signup from './components/login/FirstConnexion'
import Home from './Home'
import Projet from './components/projet/Projet'
import Profil from './components/profil/Profil'
=======
import Inscription  from './components/inscription/Inscription'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Signin } from './components/login/Login'
import { initial } from './Home'
import { Projets } from './components/projet/Projet'
import { ProfilForm } from './components/profil/Profil'
import LoginAdmin from './components/loginAdmin/LoginAdmin'
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			/*CALL ROUTES*/
			<div className="App">
<<<<<<< HEAD
				<Router>
					<Login path="/login" />
					<Signup path="/signup" />
					<Home path="/home" />
					<Projet path="/projet" />
					<Profil path="/profil" />
				</Router>
=======
				<BrowserRouter>
					<div>
						<Switch>
					<Inscription />
							<Route exact path="/Login" component={Home} />
							<Route path="/Login/1" component={Signin} />
							<Route exact path="/home" component={initial} />
							<Route exact path="/projet" component={Projets} />
							<Route exact path="/profil" component={ProfilForm} />
							<Route exact path="/LoginAdmin" component={LoginAdmin} />
						</Switch>
					</div>
				</BrowserRouter>
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0
			</div>
		)
	}
}

export default App
