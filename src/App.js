
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Partners from './pages/Partners';
import Publication from './pages/Publication';
import Account from './pages/Account';
import Register from './pages/Register';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';


function App() {
  
  return (
    <>
    
    <Router>
      <Switch>
        <Route exact path="/Home">
          <Home/>
        </Route>
        <Route exact path="/About">
          <About/>
        </Route>
        <Route exact path="/Account">
          <Account/>
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>
        <Route exact path="/Partners">
          <Partners/>
        </Route>
        <Route exact path="/Publication">
          <Publication/>
        </Route>
        <Route exact path="/Register">
          <Register/>
        </Route>
        <Route exact path="/Article1">
          <Article1/>
        </Route>
        <Route exact path="/Article2">
          <Article2/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
