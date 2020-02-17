import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css'
import './App.css';
import ProductContainer from './container/product';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <ProductContainer />
    </div>
  );
}

export default App;
