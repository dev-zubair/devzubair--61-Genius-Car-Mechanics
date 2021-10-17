import './App.css';
import Home from './Pages/Home/Home/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound.js';
import Booking from "./../src/Pages/Booking/Booking.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/booking/:serviceId">
            <Booking></Booking>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



