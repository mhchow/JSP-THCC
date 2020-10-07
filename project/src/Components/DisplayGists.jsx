import React from 'react';

const DisplayGists = ({gists}) => {
  //need to add an onclick handler so we know which gist is selected
  const handleClick = (e, key) => {
    console.log('clicked a gist', key)
  }
  return (
    <div id="gists-container">
      {gists.map(gist => {
        return (
          <div className="card" key={gist.id} onClick={(e) => handleClick(e, gist.id)}>
            <li>FileName: {gist.files.test.filename}</li>
            <li>Description: {gist.description}</li>
            <li>Created At: {gist.created_at}</li>
          </div>
          )
      })
      }
    </div>
  )
}

export default DisplayGists;