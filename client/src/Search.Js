// src/Search.js
import React from 'react';

const Search = () => {
    return (
        <div className="col-md-4 small-frame">
            <div className="frame">
                <h5>Search for a Car -</h5>
                <div className="search-bar">
                    <input type="text" className="form-control" placeholder="Enter car name" />
                    <button className="btn mt-2">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;
