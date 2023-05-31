import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/LoginForm/index'
import NotFound from './components/NotFound/index'
import Home from './components/Home/index'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
