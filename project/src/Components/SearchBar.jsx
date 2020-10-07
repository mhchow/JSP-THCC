import React, {useState} from 'react';

const SearchBar = () => {

  const [query, setQuery] = useState('');

  const handleClick = e => {
    e.preventDefault();
    console.log('searching for: ', query);
  }

  return (
    <React.Fragment>
      <input
        type="text" placeholder="username"
        onChange={(e)=> setQuery(e.target.value)}
        >
        </input>
      <button onClick={handleClick}>
        Search
      </button>
    </React.Fragment>
    )
}

export default SearchBar;