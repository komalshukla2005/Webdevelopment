import React, { useState } from 'react'
function ShowText() {
    const [isText, setIsText] = useState(false)
    const ShowTheText = () => {
        setIsText(!isText)
    }
    return (
        <div style={{
            backgroundColor:'#fff',
            color:'black',
            padding:'4rem',
            borderRadius:'5px',
            marginTop:'3rem',
            fontSize:'2rem',
            textAlign:'center'
        }}>
            {isText && <p>I am Showing</p>} {/* Cleaner conditional rendering */}
            <button onClick={ShowTheText} style={{
                margin:'1rem',
                padding:'0.5rem',
                'borderRadius':'5px',
                fontSize:'1.5rem'
            }}>
                {isText ? 'Hide Text' : 'Show Text'}
            </button>
        </div>

    )
}
export default ShowText
