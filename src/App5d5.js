import React,{useState} from 'react';
import Questions from './Questions.json';
import Display from './Display';


const App = () => {
  let tempMarks = []
  const [marks,setMarks] = useState([]);
  const result = (value,index) =>{
    tempMarks = marks;
    tempMarks[index] = value;
    setMarks([...tempMarks]);
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
        <button className="btn btn-primary" onClick={()=> alert(marks.reduce((a,b)=>a+b,0)+'/10')}>End Quiz</button><br/><br />
      </center>
    </div>
  )
}

export default App
