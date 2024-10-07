import React, { useState } from 'react';
import './../styles/styles.css';

const SearchFrame: React.FC = () => {
  const [carName, setCarName] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${carName}`);
    // Add search logic here
  };

  return (
    <div className="small-frame">
      <div className="frame">
        <h5>Search for a Car -</h5>
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Enter car name"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
          />
          <button className="btn mt-2" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchFrame;