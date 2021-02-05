import React, { useEffect, useState } from 'react';
import MultipleSection from './MultipleSection';
import './setquiz.css';

const SetQuiz = () => {
    const [total, setTotal] = useState();
    const [title, setTitle] = useState({});
    const [subjectCode, setSubjectCode] = useState(null);
    const [singleQuestion, setSingleQuestion] = useState(null);
    // const [ one, setOne ] = useState();
    const [questions, setQuestions] = useState([
        {},
        {},
        {},
        {},
        {}
    ])

    
    const addnew = () => {
        setTotal(total + 1);
    }
    
    useEffect(() => {
        questions.title = title;
        questions.subjectCode = subjectCode;
        questions.singleQuestion = singleQuestion;
        // questions.answer = {one, two, three, four};
        setQuestions(questions);
    }, [questions, singleQuestion, subjectCode, title, total])

    const onFormSubmit = (e)=>{
        e.preventDefault();
        console.log(questions);
    }

    return (
        <div>
            <h1>options to set quiz.</h1>
            <form onSubmit={(e)=> onFormSubmit(e)}>
            <div className="row">
                <div className="col">
                <input type="text" className="form-control" placeholder="Subject Name" onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="col">
                <input type="number" className="form-control" placeholder="Subject code" onChange={e => setSubjectCode(e.target.value)}/>
                </div>
                <h4>Total : {total}</h4>
            </div>
            <div className="questions-up">
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Question name</label>
                    <input type="text" onChange={e => setSingleQuestion(e.target.value)} className="form-control" id="formGroupExampleInput" placeholder="inter your question."/>
                </div>
                <MultipleSection total={questions} />
                    <button type="submit">submit answer</button>
                </div>
            </form>
            <button onClick={addnew}>Add+</button>
        </div>
    )
}

export default SetQuiz;
