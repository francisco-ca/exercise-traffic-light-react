import React, { useState } from 'react';

const Luces = () => {

const [color, setColor] = useState("redlight");
const[colory, setColory] = useState("yellowlight");
const[colorg,setColorg] =useState("greenlight");
  return (
    <div>


    <div>
       <button type="button" className={color} onClick={()=> 
    color==="redlight"? 
    (setColor("redlight selected"), setColory("yellowlight"), setColorg("greenlight"))
    :setColor("redlight")
    }></button>

      
    </div>
     <div>
       <button type="button" className={colory} onClick={()=> 
       colory==="yellowlight"? 
       (setColory("yellowlight selected"), setColor("redlight"), setColorg("greenlight"))
       :setColory("yellowlight")}>
       </button>
      
    </div>

     <div>
       <button type="button" className={colorg} onClick={()=> 
       colorg==="greenlight"? 
       (setColorg("greenlight selected"), setColor("redlight"), setColory("yellowlight"))
       :setColorg("greenlight")}>
       </button>
      
    </div>





    </div>
    
    
    
    )








//   ):
//   (   <div>
     
//       <div onClick={() => setRedon(<div className = "redlight"> </div>)}>  {redon} </div>
//       </div>)
//     ;
};

export default Luces;




{/* <div>
      <div onClick={() => setRedon(<div className = "green"> </div>)} > </div>
  </div> */}