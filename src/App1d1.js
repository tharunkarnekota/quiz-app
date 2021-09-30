import React from 'react';
import Questions from './Questions.json';
import Display from './Display';


const App = () => {
  return (
    <div>
      {Questions.map((question,index) =>{
        return(
          <Display question={question}/>
        )
      })}
    </div>
  )
}

export default App