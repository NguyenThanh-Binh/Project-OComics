import React, { useEffect } from 'react'


const OwnButton = ({ comic_id }) => {

  const addComicToCollection = () => {
    fetch('http://localhost:8080/api/own-list/add/' + comic_id, {  // Enter your IP address here
      method: 'POST',
      mode: 'cors',
    })
      .then((response) => {
        console.log(response.json())
      })
      .catch((err) => console.error(err));

  };

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={addComicToCollection}>
      Je possède
    </button>
  )
};

export default OwnButton;