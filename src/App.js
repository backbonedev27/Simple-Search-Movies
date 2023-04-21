import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
  const [endPoint,setEndPoint] = useState('')
  const[container,setContainer] = useState([])
  const [finalPoint,setFinalPoint] = useState('')



  useEffect(() =>{
    fetchMe()
  },[finalPoint])

  const fetchMe = () =>{

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '608b8e2d6dmsh62f6a0a92fd58d2p11a1f4jsn3f6082d61a0f',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  
  fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
    .then(response => {
      return response.json()})
    .then(data =>{
      setContainer(data.d)
    })
    .catch(err => console.error(err));
  }

const onChangeHandler = (e) => {
  setEndPoint(e.target.value)
}
const submitHandler = e =>{
  e.preventDefault()
  setFinalPoint(endPoint)
}
  return (
    
    <div className="App">
     
     <form onSubmit={submitHandler}>
      <input type="text" value={endPoint} onChange={onChangeHandler}/>
      <button type ='submit'>Submit</button>
     </form>
     
     <div className='element'>
     {container.map((item,index) =>{
      return(
        <div key={index} className='element-div'>
        <img src={item.i.imageUrl} alt=''/>
        <p>{item.l}</p>
        </div>
      )
     })}
    </div>
    </div>
  );
}

export default App;
