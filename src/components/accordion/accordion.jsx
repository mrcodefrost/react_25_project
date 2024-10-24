import { useState } from 'react';
import data from './data';
import './accordion.css';

const Accordion = () => {
  
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId);
        // to close the current accordion when a new one is clicked or same one is clicked
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSelection(getCurrentId){
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
        if(findIndexOfCurrentId === -1){
            copyMultiple.push(getCurrentId);
        }else {
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(copyMultiple);
    }
  
    console.log(selected, multiple);
    return (
    <div className='wrapper'>
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordion">
            {
                data && data.length > 0 ? 
                data.map(dataItem => (
                  <div className="item">
                    <div 
                    onClick={ enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} 
                    className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {

                        selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1
                        ? <div className='content'>{dataItem.answer}</div>
                        : null
                    }
                  </div>  
                )) 
                :
                <div>No data found
                    <div className=''></div>
                </div>
            }
        </div>
    </div>
  )
}
export default Accordion