import React,{useState} from 'react';
import Questions from './Questions.json';
import Display from './Display';


const App = () => {
  const [marks,setMarks] = useState(0);
  const result = (value) =>{
    setMarks(marks+value);
  }
  return (
    <div>
      {Questions.map((question,index) =>{
        return(
          <Display question={question} index={index} result={result}/>
        )
      })}
      <center>
        <br />
        <button className="btn btn-primary" onClick={()=> alert(marks)}>End Quiz</button><br/><br />
      </center>
    </div>
  )
}

export default App
