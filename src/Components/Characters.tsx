import React, { useEffect, useState } from 'react';
import { Character } from '../types/index';
import CharactersCard from './CharactersCard';

const CharacterImage: React.FC = () => {

  const [resultAPI2, setResultAPI2] = useState<Character[]>();

  useEffect(() => {
    fetch('http://localhost:8080/api/character')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResultAPI2(data);
      })
      .catch((err) => console.error(err));
    }, []);
  
  return (
    <div className="flex flex-wrap grid grid-cols-2 md:grid-cols-6 place-content-center mb-10">
      {/* <SearchBar search={search} setSearch={setSearch}/>
      <ComicsCard cards={cardPicker()}/> */}
      {resultAPI2?.map(post => (
        <div className="basis-1/6 h-[350px]" key={post.id}>
          <CharactersCard post={post}/>

        </div>
        
        ))}
    </div>

  );
};


export default CharacterImage;

// function setResultAPI2(data: any) {
//   throw new Error('Function not implemented.');
// }