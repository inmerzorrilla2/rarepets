import React from 'react';
import Pets from './components/Pets.jsx';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="title">Rare Pets</h1>

      <div className="pets">
        <Pets 
          name="Fluffy"
          age="5"
          image="/assets/img/dog1.jpg"
        />
        <Pets 
          name="Snoopy"
          age="3"
          image="/assets/img/dog2.jpg"
        />
        <Pets 
          name="Sparky"
          age="2"
          image="/assets/img/dog3.jpg"
        />
      </div>
    </div>
  );
}

export default App;

