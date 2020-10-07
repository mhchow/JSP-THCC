import React from 'react';

const GistInfo = ({gist}) => {
  //gist is an obj with lots of properties
  //we need gist.files.test.content which is a string
  return (
    <div>
      {gist.files.test.content}
    </div>)
}

export default GistInfo;