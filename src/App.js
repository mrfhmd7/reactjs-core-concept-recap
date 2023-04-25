import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name='NKhali' special='bivag'></District>
      <District name='Bbaria' special='jodha Akbar'></District>
      <District name='Sumilla' special='moyna and moti'></District>
    </div>
  );
};

const districtStyle = {
  backgroundColor: 'tomato',
  margin: '15px',
  borderRadius: '10px',
  padding: '10px'
};

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h1>Name: {props.name}</h1>
      <p>Specialty: {props.special}</p>
      <h2>Power: {power}</h2>
      <button onClick={boostPower}>Boost to Click</button>
    </div>
  );
};

export default App;
