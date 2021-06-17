import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import SignUpPage from './pages/signin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignUpPage} />
      </Switch>
    </Router>
  )
}

export default App
