import React, {useState} from 'react';
import './styles/app.css';


function App() {

  const [inputValue,setInputValue] = useState([]);

  const updateValue = (e) => {
    setInputValue((PrevInputVal)=>
       [...PrevInputVal,e.target.value]
    );
    console.log(inputValue);
    
  }

  return (
    <div className="App">
      <br/>
      <div>
        this is the div for text to appear on change
      </div>
      <br/>
      <input
        onChange={updateValue}
        placeholder='This is a placeholder'
      />

    </div>
  );
}

export default App;
