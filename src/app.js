import Header from './components/Header'
import User from './components/User'

import './scss/app.scss'

const app = () => {
	document.getElementById('header').innerHTML = Header()
}

// Init app
app()
