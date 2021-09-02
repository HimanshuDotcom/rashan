import Item from './components/Item.js';
import Header from './components/Header';
import Items from './components/Items';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Items />
      </div>
    </div>
  );
}

export default App;
