import React, { useEffect, useState } from "react";
import "./Search.css";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data.products || []);
      });
  }, [query]);

  const handleSearch = (event) => {
    const value = event.target.value;

    if (typingTimeout) clearTimeout(typingTimeout);

    const timeout = setTimeout(() => {
      setQuery(value);
    }, 1000);

    setTypingTimeout(timeout);
  };

  return (
    <div className="search-component">
      <h2>SEARCH COMPONENT WITH DEBOUNCING</h2>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search products..."
        className="search-input"
      />
    <hr/>
      <div className="search-list">
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map((data) => (
              <li className="search-list-container" key={data.id}>
                <div className="search-item">
                   <span className="search-title">{data.title}</span>
                    <img className='search-conatiner-image' src={data.images[0]} alt={data.title}/>
                    </div>
              </li>
            ))
          ) : (
            <div className="no-result">No results found</div>
          )}
        </ul>
      </div>
    </div>
  );
};
