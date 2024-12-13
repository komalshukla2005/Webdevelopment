import React, { useEffect, useState } from 'react'
function User() {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) =>response.json())
            .then((data) => 
                setAllData(data)
            )
    }, [])
    return (
        <div style={{
            backgroundColor:"white",
            padding:'4rem',
            borderRadius:'5px',
            marginTop:'4rem',
        }}>
            <h1>Users</h1>
            <ul>
                {allData.map((user) => (
                    <li key={user.id} style={{
                        marginTop:'1rem',
                        fontSize:'1.5rem'
                    }}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default User;