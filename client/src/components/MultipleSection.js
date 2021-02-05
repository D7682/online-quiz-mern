import React from 'react';

const MultipleSection = ({total}) => {
    return(
        <div>
            <div className="qn-section pl-4">
            {
                total.map((x, index) => (
                <div className="form-group" key={index}>
                    <input type="text" onChange={e => console(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="number a"/>
                </div>
                ))
            }   
            <div>
            <div className="form-group">
                <label htmlFor="inputGroupSelect01"></label>
                <select defaultValue="choose..." className="custom-select" id="inputGroupSelect01">
                    <option value="choose...">Choose...</option>
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

export default MultipleSection
