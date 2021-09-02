import './App.css';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Button,Container,NavDropdown,Dropdown} from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserLogin from './components/login/UserLogin.jsx'
 
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path ='/UserLogin' component={UserLogin}></Route>
      
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
