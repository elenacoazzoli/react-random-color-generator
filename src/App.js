import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import ColoredBox from './ColoredBox';

function App() {
  const [color, setColor] = useState('');
  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <button
        onClick={() => {
          setColor(randomColor.randomColor());
        }}
      >
        Generate random color
      </button>
      <p>{color}</p>
      <ColoredBox color={color} />
    </div>
  );
}
export default App;
