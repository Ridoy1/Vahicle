import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import NavBar from './component/NavBar/NavBar';
import VahicleDetails from './component/VahicleDetails/VahicleDetails';
import Destination from './component/Destination/Destination';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <NavBar/>
            <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <PrivateRoute path="/vahicle/:vahicleId">
                  <VahicleDetails/>
                </PrivateRoute>
                <PrivateRoute path="/destination">
                  <Destination/>
                </PrivateRoute>
                <PrivateRoute path="/contact">
                  <Contact/>
                </PrivateRoute>
                <Route path="/login">
                  <Login/>
                </Route>
            </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
