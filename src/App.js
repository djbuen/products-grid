import React from 'react';
import './App.css';
import ProductList from './ProductList';
import Sort from './Sort';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css'

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <div className="row">
        <Sort />
      </div>
      <div className="row">
        <ProductList/>
      </div>
    </div>
  );
}

export default App;
