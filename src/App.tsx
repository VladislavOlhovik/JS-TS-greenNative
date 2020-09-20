import React from 'react';
import './App.css';

function App() {
const name = ['dimych','sveta','katya','viktor','ignat']
const user = [{id:1, name:'dimych'},{id:2,name:'sveta'},{id:3, name:'katya'},{id:4, name:'viktor'},{id:5, name:'ignat'}]
const LiElements = user.map(el=><li key={el.id}>{el.name}</li>)

  return (
    <div className="App">
      {LiElements}
    </div>
  );
}

export default App;
