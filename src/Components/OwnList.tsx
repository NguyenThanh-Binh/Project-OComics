import React, { useEffect, useState } from 'react';
import ComicsCard from './ComicsCard';
import SearchBar from './SearchBar';
import { Card } from '../types/index';
/* type Props = {} */

const OwnList: React.FC = () => {
  // State de synchro de l'input
  // const [search, setSearch] = useState('');
  // State de stockage du resultat de l'API
  const [resultAPI, setResultAPI] = useState<Card[]>();

  const token = localStorage.getItem('accessToken');
  // console.log(search);
  useEffect(() => {
    fetch('http://localhost:8080/api/ownedlist'
      , {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResultAPI(data[0].comics);
      })
      .catch((err) => console.error(err));
  }, []);



  // Fonction qui gère les props de ComicsCard
  // ".message" est le message d'erreur dans l'API
  /*const cardPicker = (): Card[]  => {
    if (!resultAPI || resultAPI.message === "le message d'erreur d'API") return [];
    return resultAPI.items;
    }; */

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-10 md:my-16 gap-5">
      {/* <SearchBar search={search} setSearch={setSearch}/>
      <ComicsCard cards={cardPicker()}/> */}

      {resultAPI?.map(item => (

        <div className="basis-1/4" key={item.id}>
          <ComicsCard key={item.id} card={item} owned={true} />

        </div>

      ))}
    </div>

  );

};

export default OwnList;