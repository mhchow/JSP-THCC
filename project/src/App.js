import React, {useState, useEffect} from 'react';
import SearchBar from './Components/SearchBar';
import DisplayGists from './Components/DisplayGists';
import GistInfo from './Components/GistInfo';
import axios from 'axios';

function App() {

  const [gists, setGists] = useState([]);
  const [oneGist, setOneGist] = useState(null);

  const handleClick = (id) => {

  }

  useEffect(() => {

  });

  const getAllGists = (query) => {
    axios({
      method: 'get',
      url: `https://api.github.com/users/${query}/gists`,
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      const data = res.data;
      setGists(data);
    })
    .catch(err => console.log(err))
  }

  const getOneGist = (id) => {
    axios({
      method:'get',
      url: `https://api.github.com/gists/${id}`,
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      const data = res.data;
      //data == one object

    })
    .catch(err => console.log(err))
  }



  return (
    <div id="main">
      <SearchBar search={ username => getAllGists(username)}/>
      {gists.length === 0 ? null : <DisplayGists gists={gists}/>}
      {oneGist == null ? null : <GistInfo gist={oneGist}/>}

    </div>

  )
}

export default App;
