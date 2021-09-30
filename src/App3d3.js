import React from 'react';
import Questions from './Questions.json';
import Display from './Display';


const App = () => {
  const result = (value) =>{
    alert(value);
  }
  return (
    <div>
      {Questions.map((question,index) =>{
        return(
          <Display question={question} index={index} result={result}/>
        )
      })}
    </div>
  )
}

export default App
