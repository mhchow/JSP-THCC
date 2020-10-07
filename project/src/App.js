import React, {useState, useEffect} from 'react';
import SearchBar from './Components/SearchBar';
import DisplayGists from './Components/DisplayGists';

import axios from 'axios';

function App() {

  const [gists, setGists] = useState([]);

  useEffect(() => {

  });

  const getAllGists = (query) => {
    console.log('change back to query');
    axios({
      method: 'get',
      url: `https://api.github.com/users/${query}/gists`,
      headers: {"Content-Type": "application/json"}
    })
    .then(res => {
      const data = res.data;
      setGists(data);
    })
    .catch(err => console.log(err))
  }



  return (
    <div id="main">
      <SearchBar search={ username => getAllGists(username)}/>
      {gists.length === 0 ? null : <DisplayGists gists={gists}/>}

    </div>

  )
}

export default App;
