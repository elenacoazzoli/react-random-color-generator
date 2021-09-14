import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import Button from './Button';
import ColoredBox from './ColoredBox';

function App() {
  const [color, setColor] = useState('');
  const [colorHue, setColorHue] = useState('');
  const [colorLuminosity, setColorLuminosity] = useState('');
  const [boxWidth, setBoxWidth] = useState('');
  const [boxHeight, setBoxHeight] = useState('');

  return (
    <div className="App">
      <h1>Random Color Generator</h1>

      <form>
        <span>Type here the hue of the color</span>
        <br />
        <input onChange={(event) => setColorHue(event.target.value)} /> <br />
        <span>Type here the luminosity of the color</span>
        <br />
        <input onChange={(event) => setColorLuminosity(event.target.value)} />
      </form>

      <br />

      <Button
        text="Generate random color"
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
      <ColoredBox color={color} width={boxWidth} height={boxHeight} />

      <br />

      <form>
        <span>Don't like the size of the box? Change it here.</span>
        <span>Type here the width of your desired box</span>
        <br />
        <input onChange={(event) => setBoxWidth(event.target.value)} /> <br />
        <span>Type here the height of your desired box</span>
        <br />
        <input onChange={(event) => setBoxHeight(event.target.value)} />
      </form>

      <br />
    </div>
  );
}
export default App;
