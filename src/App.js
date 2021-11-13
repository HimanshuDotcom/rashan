import Header from './components/Header';
import Items from './components/Items';
import AddItem from './components/AddItem';
import About from './components/About';
import NotFound from './components/NotFound';
import Test from './components/Test';
import { Consumer} from './context';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditItem from './components/EditItem';
import firestore from "./firebase";
import  {onSnapshot,doc, getDocs, addDoc, collection } from 'firebase/firestore';
import { fetchItems } from './action';

// function App({store}) {
//   console.log('store', store)
//   const { dispatch } = store;
//   useEffect(() => {
//       console.log(`Componenet Mounting -----------`);
//       // onSnapshot(collection(firestore, "items"), querySnapshot => {
//       //     const data = querySnapshot.docs;
//       //     data.map(item => {
//       //         const temp = item.data();
//       //         temp['id'] = item.id;
//       //         items.push(temp);
//       //     })
//       //     this.setState({
//       //         items: items,
//       //         loading: false
//       //     })
//       // })
      
//       // const  getData = async () => {
//       //     const d= collection(firestore, 'items')
//       //     const mySnapshot =  await getDocs(d);
//       //     const items = [];
//       //     mySnapshot.forEach(doc => {
//       //         const data = doc.data();
//       //         data['id'] = doc.id;
//       //         items.push(data);
//       //         }
//       //     ) 
//       //     console.log('items', items)

//       //     dispatch({
//       //       type: 'SET_ITEMS',
//       //       payload: items
//       //     })
         
//       // }
//       // getData();
//       console.log(fetchItems());
//       dispatch(fetchItems());
//   },[])
//   return (
//     <Router>
//         <div className="App">
//          <Header />
//          <div className = "container">
//             <Switch>
//               <Route exact path = "/" component = {Items} />
//               <Route exact path = '/additem' component = {AddItem} />
//               <Route exact path = '/edititem/:id' component = {EditItem} />
//               <Route exact path = '/about' component = {About} />
//               <Route exact path = '/test' component = {Test} />
//               <Route component = {NotFound} />
//             </Switch>
//           </div>
//         </div>
//     </Router>
//   );
// }

class App extends React.Component {

  // console.log('store', store)
  // const { dispatch } = store;
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
