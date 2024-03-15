import React, { useState } from 'react'

const Hotels = () => {
    const [selectedDate, setSelectedDate] = useState("");

    // Handle date change
    const handleDateChange = (event) => {
      const dateString = event.target.value;
      setSelectedDate(dateString);
    };
  
    return (
      <div>
        <h2>Select a Date</h2>
        <input 
          type="date" 
          value={selectedDate} 
          onChange={handleDateChange} 
          className='w-80'
        />
        <p>Selected Date: {selectedDate}</p>
      </div>
    );
}

export default Hotels