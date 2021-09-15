import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';
import Button from './Button';
import ColoredBox from './ColoredBox';

function App() {
  // state variables
  const [color, setColor] = useState('');
  const [colorHue, setColorHue] = useState('');
  const [colorLuminosity, setColorLuminosity] = useState('');
  const [boxWidth, setBoxWidth] = useState('');
  const [boxHeight, setBoxHeight] = useState('');

  // styled components
  const StyledHeading = styled.h1`
    font-size: 30px;
    color: #dcbaff;
    font-weight: 200;
    letter-spacing: 2px;
  `;

  return (
    <div className="App">
      <StyledHeading>Random Color Generator</StyledHeading>
      <div>
        {/* Creates two inputs to ask for a hue and luminosity. */}
        <label htmlFor="hue">Type here the hue of the color:</label>
        <br />
        <input id="hue" onChange={(event) => setColorHue(event.target.value)} />
        <br />
        <label htmlFor="luminosity">
          Type here the luminosity of the color:
        </label>
        <br />
        <input
          id="luminosity"
          onChange={(event) => setColorLuminosity(event.target.value)}
        />

        <br />
        <br />

        <span>Don't like the size of the box? Change it here.</span>
        <br />
        <br />
        {/* Creates two range sliders to change the size of the ColoredBox component */}
        <label htmlFor="width">Width: </label>
        <br />
        <input
          id="width"
          type="range"
          min="80"
          max="800"
          value={boxWidth}
          onChange={(event) => setBoxWidth(event.target.value)}
        />
        <br />
        <label htmlFor="height">Height:</label>
        <br />
        <input
          id="height"
          type="range"
          min="50"
          max="500"
          value={boxHeight}
          onChange={(event) => setBoxHeight(event.target.value)}
        />
        <br />
        <br />
        {/* Button component that onClick call randomColor() */}
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
        <br />
        <br />
        <br />
        {/* ColoredBox component with color, width and height props */}
        <ColoredBox color={color} width={boxWidth} height={boxHeight} />
      </div>
    </div>
  );
}
export default App;
