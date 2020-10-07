import React, {useState} from 'react';

const SearchBar = ({search}) => {

  //stores username from the from
  const [username, setUserName] = useState('');

  const handleClick = e => {
    e.preventDefault();
    console.log('searching for: ', username);
    search(username)
  }

  return (
    <form onSubmit={handleClick}>
      <input
        type="text" placeholder="username"
        onChange={(e)=> setUserName(e.target.value)}
        value={username}
        />
      <button type="submit">
        Search
      </button>
    </form>
    )
}

export default SearchBar;