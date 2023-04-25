import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name='NKhali' special='bivag'></District>
      <District name='Bbaria' special='jodha Akbar'></District>
      <District name='Sumilla' special='moyna and moti'></District>
    </div>
  );
};

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
    .then(data => setPosts(data));
  } ,[])
  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {
        posts.map(post => <Post
          title={post.title}
          body={post.body}
        ></Post>)
      }
    </div>
  );
};

function Post(props) {
  return (
    <div style={{backgroundColor:'tomato', margin:'10px', padding:'10px', borderRadius:'8px', border:'3px solid red' }}>
      <h3>Title: {props.title}</h3>
      <p style={{color:'white'}}>Body: {props.body}</p>
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
