import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input 
          type="text" 
          placeholder="Buscar HQ..." 
          className="search-input"
        />
        <button className="search-button">
          {/* Ícone de Lupa */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;