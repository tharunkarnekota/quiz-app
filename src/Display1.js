import React from 'react'

const Display = ({question})=>{
    return (
        <div style={{"textAlign":"left","border": "1px solid black","margin":"4px","padding":"1px"}}>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                    {question.title}
                    </h4>
                    <div >
                        <input type="radio" value="A" name="question1" /> <span>{question.options[0]}</span> &nbsp;
                        <input type="radio" value="B" name="question1" /> <span>{question.options[1]}</span> &nbsp;
                        <input type="radio" value="C" name="question1" /> <span>{question.options[2]}</span> &nbsp;
                        <input type="radio" value="D" name="question1" /> <span>{question.options[3]}</span> &nbsp;
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Display