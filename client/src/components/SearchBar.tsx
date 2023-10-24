import React from 'react';
import './SearchBar.css'

export const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <div className="search-field">
        <label htmlFor="from">From</label>
        <input type="text" id="from" className='inputStyle' placeholder="city or airport" />
      </div>

      <div className="search-field">
        <label htmlFor="to">To</label>
        <input type="text" id="to" className='inputStyle' placeholder="city or airport" />
      </div>

      <div className="search-field">
        <label htmlFor="depart">Depart</label>
        <input type="date" id="depart" className='inputStyle' />
      </div>

      <div className="search-field">
        <label htmlFor="return">Return</label>
        <input type="date" id="return" className='inputStyle' />
      </div>

      <div className="search-field">
        <label htmlFor="travellers">Travellers</label>
        <select id="travellers" className='inputStyle'>
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
        <input type="number" id="budget" className='inputStyle'
        placeholder="Enter your budget" />
      </div>

      <button type="submit" className='buttonStyle'>
        Search
      </button>
    </div>
  );
}
