import React from 'react';

const DisplayGists = ({gists}) => {
  console.log('gists', gists);
  return (
    <div id="gists-container">
      {gists.map(gist => {
        return (
          <div className="card" key={gist.id}>
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