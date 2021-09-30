import React from 'react'

const Display = ({question,index,result})=>{
    const Handler = e =>{
        let temp = question.answer === e.target.value ? 1 : 0;
        result(temp);
    }
    return (
        <div style={{"textAlign":"left","border": "1px solid black","margin":"4px","padding":"1px"}}>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                    {question.title}
                    </h4>
                    <div onChange={Handler}>
                        <input type="radio" value="A" name={index} /> <span>{question.options[0]}</span> &nbsp;
                        <input type="radio" value="B" name={index} /> <span>{question.options[1]}</span> &nbsp;
                        <input type="radio" value="C" name={index} /> <span>{question.options[2]}</span> &nbsp;
                        <input type="radio" value="D" name={index} /> <span>{question.options[3]}</span> &nbsp;
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Display