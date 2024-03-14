import React, { useState } from 'react';
import './MyForm.css';

function MyForm() {
  const [guestName, setGuestName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setGuestName(event.target.value);
  };

  const handleRoomNumberChange = (event) => {
    setRoomNumber(event.target.value);
  };

  const handleCheckInChange = (event) => {
    setIsCheckedIn(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Gast: ${guestName}, Zimmer: ${roomNumber}, Eingecheckt: ${isCheckedIn}`);
    setFormSubmitted(true);
  };

  return (
    <div>
      <h1>Hotel Check-In</h1>
      {formSubmitted ? (
        <div className="confirmation-message">
          <p>Vielen Dank, {guestName}. Sie sind nun eingecheckt.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="guestName">Name des Gastes:</label>
            <input 
              type="text" 
              id="guestName" 
              value={guestName} 
              onChange={handleNameChange} 
              required 
            />
          </div>
          <div className="form-control">
            <label htmlFor="roomNumber">Zimmernummer:</label>
            <input 
              type="text" 
              id="roomNumber" 
              value={roomNumber} 
              onChange={handleRoomNumberChange} 
              required 
            />
          </div>
          <div className="form-control">
            <input 
              type="checkbox" 
              id="isCheckedIn" 
              checked={isCheckedIn} 
              onChange={handleCheckInChange} 
            />
            <label htmlFor="isCheckedIn">Ich möchte jetzt einchecken</label>
          </div>
          <div className="form-control">
            <button type="submit">Einchecken</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default MyForm;
