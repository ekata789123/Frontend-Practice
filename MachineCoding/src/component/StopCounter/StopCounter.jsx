import {useState,useEffect} from 'react';
import './StopCounter.css';
export const StopCounter=()=>{
    const [count,setCount]=useState(0)
    const [stop,setStop]=useState(false)
    const handleReset=()=>{
        setCount(0)
        setStop(false)
    }
    useEffect(()=>{
    let interval
      if(!stop){
         interval=setInterval(()=>{
            setCount((prevCount)=>prevCount+1)
        },1000) 
    }
        return ()=>clearInterval(interval)
    },[stop])
    return <div className="stop-counter-component">
                <h2>COUNTER WITH STOP AND RESET BUTTON</h2>
                <hr/>
               <div className='counter-container'>
                 <div className="counter-display">{count}</div>
                <div className="button-container">
                    <button className="stop-button" onClick={()=>setStop(true)}>Stop</button>
                    <button className="reset-button" onClick={handleReset}>Reset</button>
                </div>
               </div>
         </div>
}