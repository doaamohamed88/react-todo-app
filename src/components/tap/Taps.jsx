import React, { useState } from 'react'
import Content1 from './Content1'
import Content2 from './Content2';
import Content3 from './Content3';

export default function Taps() {
    const [active,setactive]=useState(1);

    
  return (
    <>
    <div className='flex gap-4 bg-slate-400'>
        <button className={`flex-1 ${active===1 ?"bg-gray-800":"bg-slate-500"} p-4`}  onClick={()=>setactive(1)}>Tap 1 </button>
        <button className={`flex-1 ${active===2 ?"bg-gray-800":"bg-slate-500"} p-4`}  onClick={()=>setactive(2)}>Tap 2</button>
        <button className={`flex-1 ${active===3 ?"bg-gray-800":"bg-slate-500"} p-4`}  onClick={()=>setactive(3)}>Tap 3</button>
    </div>
    <div>
        {active===1&&<Content1/>}
        {active===2&&<Content2/>}
        {active===3&&<Content3/>}
    </div>
    
    </>
  )
}
