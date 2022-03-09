import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CovidData from './components/CovidData';
import Footer from './components/footer';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import Protectedroute from './Protected';
import { useEffect, useState } from 'react';
function App() {
  // Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json", "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { isLoggedIn();}, []);

  return (
    <>
    <Navbar auth={auth1}/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/CovidData" component={CovidData}/>
      <Protectedroute exact path="/login" component={Login} auth={auth1}/>
      <Protectedroute exact path="/register" component={Register} auth={auth1}/>
      <Protectedroute exact path="/dashboard" component={Dashboard} auth={auth}/>
      <Protectedroute exact path="/logout" component={Logout} auth={auth}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
