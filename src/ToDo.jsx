import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDo = () => {
    
    const [curData , setCurData] = useState(0);

    const incrmNum = () =>{
        setCurData(curData + 1);
    }
    const decrmNum = () =>{
        if(curData > 0){
            setCurData(curData - 1);
        }else{
            setCurData(0)
            alert("sorry , Zero limit reached");
        }
    }

    return (
        <>
           <div className="main_div">
               <div className = "inner_div">
                   <h1> {curData} </h1>
                   <div className="btn_div">
                       <button onClick={incrmNum}><AddIcon /></button>
                       <button onClick={decrmNum}><DeleteIcon /></button>
                   </div>
               </div>
           </div>
        </>
    )
}

export default ToDo;