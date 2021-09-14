import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import Button from './Button';
import ColoredBox from './ColoredBox';

function App() {
  const [color, setColor] = useState('');
  const [colorHue, setColorHue] = useState('');
  const [colorLuminosity, setColorLuminosity] = useState('');

  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      {/* <Button
        onClick={() => {
          setColor(randomColor.randomColor());
        }}
      />
      <br />
      <br />
      <br />
      */}

      <form>
        <span>Type here the hue of the color</span>
        <br />
        <input onChange={(event) => setColorHue(event.target.value)} />
      </form>
      {/* <Button
        onClick={() => {
          setColor(
            randomColor.randomColor({
              hue: colorHue,
            }),
          );
        }}
      />
      */}

      <form>
        <span>Type here the luminosity of the color</span>
        <br />
        <input onChange={(event) => setColorLuminosity(event.target.value)} />
      </form>
      <br />
      <br />

      <Button
        onClick={() => {
          setColor(
            randomColor.randomColor({
              luminosity: colorLuminosity,
              hue: colorHue,
            }),
          );
        }}
      />

      <p>{color}</p>
      <ColoredBox color={color} />
    </div>
  );
}
export default App;
