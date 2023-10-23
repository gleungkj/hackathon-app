import React from 'react';

function SearchBar() {
  const inputStyle = {
    width: '100%',
    height: '40px',
    borderRadius: '10px', 
    border: '1px solid #ccc', 
    paddingLeft: '1px',
  };

  const buttonStyle = {
    width: '5%',
    height: '50px',
    background: '#7752FE',
    color: 'white',
    borderRadius: '20px',
    marginTop: '15px',
    fontWeight: 'bold',
   
  };
  return (
    <div className="search-bar">
      <div className="search-field">
        <label htmlFor="from">From</label>
        <input type="text" id="from" style={inputStyle} placeholder="city or airport" />
      </div>

      <div className="search-field">
        <label htmlFor="to">To</label>
        <input type="text" id="to" style={inputStyle} placeholder="city or airport" />
      </div>

      <div className="search-field">
        <label htmlFor="depart">Depart</label>
        <input type="date" id="depart" style={inputStyle} />
      </div>

      <div className="search-field">
        <label htmlFor="return">Return</label>
        <input type="date" id="return" style={inputStyle} />
      </div>

      <div className="search-field">
        <label htmlFor="travellers">Travellers</label>
        <select id="travellers" style={inputStyle}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="search-field">
        <label htmlFor="budget">Budget (£)</label>
        <input type="number" id="budget" style={inputStyle} placeholder="Enter your budget" />
      </div>

      <button type="submit" style={buttonStyle}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
