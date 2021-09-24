import Header from './components/Header';
import Items from './components/Items';
import AddItem from './components/AddItem';
import About from './components/About';
import NotFound from './components/NorFound';
import { Provider } from './context';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Provider>
        <div className="App">
         <Header />
         <div className = "container">
            <Switch>
              <Route exact path = "/" component = {Items} />
              <Route exact path = '/additem' component = {AddItem} />
              <Route exact path = '/about' component = {About} />
              <Route component = {NotFound} />
            </Switch>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
