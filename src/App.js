import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Items from './components/Items';
import AddItem from './components/AddItem';
import About from './components/About';
import NotFound from './components/NotFound';
import Test from './components/Test';
import EditItem from './components/EditItem';
import { fetchItems } from './action';
import { Consumer} from './context';


class App extends React.Component {

  componentDidMount() {
    const {store} = this.props;
    console.log('storee', store)
    store.subscribe(() => {
      this.forceUpdate();
    })
    store.dispatch(fetchItems());
  }

 render() {
  const { dispatch } = this.props.store;
  console.log('dipatchh', dispatch)
  return (
    <Router>
        <div className="App">
         <Header />
         <div className = "container">
            <Switch>
              <Route exact path = "/" component = {Items} />
              <Route exact path = '/additem' component = {AddItem} />
              <Route exact path = '/edititem/:id' component = {EditItem} />
              <Route exact path = '/about' component = {About} />
              <Route exact path = '/test' component = {Test} />
              <Route component = {NotFound} />
            </Switch>
          </div>
        </div>
    </Router>
  );
  }
}

function AppWrapper() {
  return (
    <Consumer>
      {value => {
        return <App store = {value} /> 
      }}
    </Consumer>
  )
}

export default AppWrapper;
