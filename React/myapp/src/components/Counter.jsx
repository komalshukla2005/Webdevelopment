import React, { useState } from 'react'
function Counter() {
    const[count,setCount]=useState(0)
    const Increment=()=>{
        setCount(count+1);
    }
    const DecrementValue=()=>{
        setCount(count-1)
    }
    return (
        <div style={{
            backgroundColor:'#fff',
            color:'black',
            padding:'4rem',
            borderRadius:'5px',
            marginTop:'3rem',
            fontSize:'4rem',
            textAlign:'center'
        }}>
            <h1>Count Value :{count} </h1>
            <button onClick={Increment} style={{
                margin:'1rem',
                padding:'0.5rem',
                'borderRadius':'5px',
                fontSize:'1.5rem'
            }}>Increment</button>
            <button onClick={DecrementValue} style={{
                margin:'1rem',
                padding:'0.5rem',
                'borderRadius':'5px',
                fontSize:'1.5rem'
            }}>Decrement</button>
        </div>
    )
}
export default Counter;