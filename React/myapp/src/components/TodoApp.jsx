import React, { useState } from "react";
function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const AddTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const RemoveTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{
            backgroundColor: '#f7f7f7',
            padding: '2rem',
            borderRadius: '8px',
            marginTop: '3rem',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            marginLeft: 'auto',
            marginRight: 'auto',

        }}>
            <h1 style={{
                fontSize: '2.5rem',
                color: '#333',
                marginBottom: '1.5rem'
            }}>TodoApp</h1>
            <div style={{
                backgroundColor: '#333',
                padding: '1.5rem',
                borderRadius: '8px',
                color: 'white',
                width:'50%',
                marginLeft:'29rem'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                }}>
                    <input
                        type="text"
                        placeholder="Enter your Task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        style={{
                            padding: '0.8rem',
                            fontSize: '1.2rem',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            flexGrow: 1,
                            marginRight: '1rem'
                        }}
                    />
                    <button
                        onClick={AddTask}
                        style={{
                            padding: '0.8rem 1.5rem',
                            fontSize: '1.2rem',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
                    >
                        Add Task
                    </button>
                </div>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    marginTop: '1rem'
                }}>
                    {tasks.map((item, index) => (
                        <li key={index} style={{
                            backgroundColor: '#444',
                            color: 'white',
                            padding: '0.8rem',
                            borderRadius: '5px',
                            marginBottom: '0.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            {item}
                            <button
                                onClick={() => RemoveTask(index)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    fontSize: '1rem',
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoApp;
