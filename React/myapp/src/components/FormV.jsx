import React, { useState } from 'react';
import './FormV.css'; // Import the CSS file

function FormV() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); 
  };

  return (
    <div className="form-container">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter the Email" required className="input" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter the Password" required className="input" />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <h2 className="welcome-message">Welcome Dear</h2> 
      )}
    </div>
  );
}

export default FormV;
