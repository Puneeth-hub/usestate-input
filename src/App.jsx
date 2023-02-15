import React, {useState} from "react"; 
import './App.css' 


function App(){
  const [count, setCount] = useState(0)
  
  const inputValue=(e)=>{
    setCount(e.target.value)
    
  }

  return(
    <div className="input-container">
      <div className="middle-contianer">
      
      <h1 className="heading">Use State🤷‍♀️✔😜</h1>
        
      <input type='text' onChange={inputValue} className='input-value' placeholder="Type Here"/>
      
      
      </div>
      
      <marquee><p className="para">{count}</p></marquee>
    </div>
  )
}
export default App