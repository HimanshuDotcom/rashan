import Item from './components/Item.js';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Item name="Bura" />
        <Item name="Sugar" />
      </div>
    </div>
  );
}

export default App;
