import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import routesConfig from './routes/RoutesConfig';
import Autenticar from './pages/Autenticar';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <div className="container">
            <nav>
              <ul>
                <Link to="/" >Home</Link>
                <Link to="/user" >User</Link>
                <li><Link to="/about-Us">About us</Link></li>
                <li><Link to="/contact-Us">Contact us</Link></li>
                <li><Link to="/service">Service</Link></li>
              </ul>
            </nav>
          </div>
        </Header>
        <Switch>
          <Route path="/auth" element={<Autenticar />} />
        </Switch>
        {routesConfig.map((value) => {
          return (
            <Switch key={value.id}>
              <Route
                path={value.path}
                component={value.component}
                exact={value.exact}
              ></Route>
            </Switch>
          )
        })}
        <Footer />

      </div>
    );
  }
}

export default App;
