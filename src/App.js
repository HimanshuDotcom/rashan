import Header from './components/Header';
import Items from './components/Items';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="container">
          <Items />
        </div>
      </div>
    </Provider>
  );
}

export default App;
