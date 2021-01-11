import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
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
                   <Tooltip title="Add">
                       <Button onClick={incrmNum} className="btn_green"><AddIcon /></Button>
                    </Tooltip> 
                    <Tooltip title="Delete">  
                       <Button onClick={decrmNum} className="btn_red"><DeleteIcon /></Button>
                    </Tooltip>
                   </div>
               </div>
           </div>
        </>
    )
}

export default ToDo;