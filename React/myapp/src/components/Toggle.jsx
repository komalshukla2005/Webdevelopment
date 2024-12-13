import React, { useState } from 'react';
function Toggle() {
    const [isDark, setIsDark] = useState(false)
    const CheckDark = () => {
        setIsDark(!isDark)
    }
    return (
        <div style={{
            backgroundColor: isDark? "#000" : '#fff',
            color:isDark? '#fff' : '#000',
            padding:'4rem',
            textAlign:'center',
            borderRadius:'10px',
            fontSize:'3rem'
        }}>
            <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
            <button onClick={CheckDark} style={{
                padding:'1rem',
                fontSize:'2rem',
                border:'5px',
                borderRadius:'5px',
                backgroundColor: isDark? '#fff' : 'violet'
            }}>Change Theme</button>
        </div>
    )
}
export default Toggle;