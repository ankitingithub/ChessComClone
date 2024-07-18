import React from 'react'
export default function Board() {

  const generateBoard = ()=>{
       for(let i=0;i<8;i++){
        <div className='row key'></div>
       }
    }  
  return (
    <div className='flex'>
      {generateBoard}
      
    </div>
  )
}
