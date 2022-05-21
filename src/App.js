import './App.css';
import { BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom';
import { Link } from 'react-router-dom';

import Admin from './Admin';
import Home from './Home';

function App() {


  return (

    <>
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link exact to='/'>Admin</Link>
                </li>
                <li>
                  <Link exact to='/zombies'>Zombies</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>

            <Route exact path="/">
              <Admin />

            </Route>
            <Route exact path="/zombies">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    
    </>
  );
}

export default App;
