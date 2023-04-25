import logo from './logo.svg';
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
}

function District(props) {
  return (
    <div style={districtStyle}>
      <h1>Name: {props.name}</h1>
      <p>Specialty: {props.special}</p>
    </div>
  );
};

export default App;
