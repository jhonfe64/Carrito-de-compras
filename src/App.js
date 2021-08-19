import './App.css';
import Header from './componets/Header';
import Results from './componets/Results';
import ShoppingCart from './componets/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Header />
      <Results/>
      <ShoppingCart/>
    </div>
  );
}

export default App;
