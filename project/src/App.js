import React, {useState, useEffect} from 'react';
import SearchBar from './Components/SearchBar';
import DisplayGists from './Components/DisplayGists';

import axios from 'axios';

function App() {

  const [gists, setGists] = useState([]);
  //const [query, setQuery] = useState(null);

  useEffect(() => {
    //getAllGists(query);

  });

  const getAllGists = (query) => {
    axios({
      method: 'get',
      url: `https://api.github.com/users/${query}/gists`,
      headers: {"Content-Type": "application/json"}
    })
    .then(res => {
      const data = res.data;
      setGists(data);
    })
  }



  return (
    <div id="main">
      <SearchBar search={ username => getAllGists(username)}/>
      <DisplayGists gists={gists}/>
    </div>

  )
}

export default App;
