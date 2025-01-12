import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  const [title, setTitle] = useState('Wall-E');

  function handleChange(event) {
      setTitle(event.target.value);
  }
  let messege;
  if(title.length < 5)
  {
    messege = "tytuł jest za krótki";
  }
  else if(title.length < 15)
  {
    messege= "tytuł jest extra";
  }
  else{
    messege = "tytuł jest za długi";
  }

  return (
    <div>
      <h1>My favourite movies for today</h1>
      <h2>My favourite movies for today is {title}</h2>
      {title.length > 0 && <div>{messege}</div>}
      <input type="text" value={title} onChange={handleChange}/>
    </div>
  );
}

export default App;
