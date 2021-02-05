import React,{useState, useEffect} from 'react'
import './setquiz.css';

const SetQuiz = () => {
    const [total, setTotal] = useState(0);
    const [title, setTitle] = useState({});
    const [subjectCode, setSubjectCode] = useState(null);
    const [singleQuestion, setSingleQuestion] = useState(null);
    const [one, setOne] = useState('')
    const [two, setTwo] = useState('')
    const [three, setThree] = useState('')
    const [four, setFour] = useState('')

    const setQuestion = ()=>{
        return(
            <div>
                <div className="qn-section pl-4">
                <div className="form-group">
                    <input type="text" onChange={e => setOne(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="number a"/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={e => setTwo(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="number b"/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={e => setThree(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="number c"/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={e => setFour(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="number d"/>
                </div>
                <div>
                <div class="form-group">
                <label htmlFor="inputGroupSelect01"></label>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                </div>
                </div>
            </div>
        </div>                
        )
    }


    const questions = [];

    const addnew = ()=>{
        setTotal(total + 1);
    }
    
    useEffect(() => {
        questions.title = title;
        questions.subjectCode = subjectCode;
        questions.singleQuestion = singleQuestion;
        questions.answer = {one, two, three, four};
    }, [title, one, two, three, four, total , subjectCode, singleQuestion])
    
    const onFormSubmit = (e) =>{
        e.preventDefault();
        console.log(questions);
    }


    return (
        <div>
            <h1>options to set quiz.</h1>
            <form onSubmit={(e)=> onFormSubmit(e)}>
            <div class="row">
                <div class="col">
                <input type="text" class="form-control" placeholder="Subject Name" onChange={e => setTitle(e.target.value)}/>
                </div>
                <div class="col">
                <input type="number" class="form-control" placeholder="Subject code" onChange={e => setSubjectCode(e.target.value)}/>
                </div>
                <h4>Total : {total}</h4>
            </div>
            <div className="questions-up">
                <div className="form-group">
                    <label for="formGroupExampleInput">Question name</label>
                    <input type="text" onChange={e => setSingleQuestion(e.target.value)} className="form-control" id="formGroupExampleInput" placeholder="inter your question."/>
                </div>
                {setQuestion()}
            </div>

            <button type="submit">submit answer</button>
            </form>
            <button onClick={()=> addnew()}>Add+</button>
        </div>
    )
}

export default SetQuiz;
