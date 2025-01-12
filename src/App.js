import logo from './logo.svg';
import './App.css';

function App() {
  let title = 'Wall-E'

  function handleChange(event) {
    title = event.target.value;
}

  return (
    <div>
      <h1>My favourite movies for today</h1>
      <h2>My favourite movies for today is {title}</h2>
      <input type="text" onChange={handleChange}/>
    </div>
  );
}

export default App;
