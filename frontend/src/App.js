import React from 'react';
import SearchBar from './components/SearchBar';
import GenAI from './components/GenAI';
import './App.css';
import './images/SealQuest.jpg'



function App() {
  return (
    <div className="App">
      <header>SEALAIR</header>
      <SearchBar />
      <div style={{ marginTop: '100px' }}></div>
      <GenAI />
   
    </div>
  );
}

export default App;
