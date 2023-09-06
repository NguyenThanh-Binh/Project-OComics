import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ComicsCard from '../Components/ComicsCard';
import { Card } from '../types/index';

const CharacterComicsPage: React.FC = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const [comics, setComics] = useState<Card[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/character/${characterId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des comics');
        }
        return response.json();
      })
      .then((data) => {
        const comicsWithOwnershipStatus = data.comics.map((comic: Card) => ({
          ...comic,
          ownershipStatus: null,
        }));
        setComics(comicsWithOwnershipStatus);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des comics:', error);
      });
  }, [characterId]);

  return (
    <div className="flex flex-col bg-gray-800 min-h-screen">
  <Link to="/Personnages" className="text-blue-500 hover:underline">Retour à la liste des personnages</Link>

  <h1 className="text-white font-bold mb-5 text-xl my-5">
    <span className="inline-block p-2 bg-red-700">Comics associés au personnage</span>
  </h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {comics.map((comic) => (
      <div key={comic.id}>
        <ComicsCard card={comic} />
      </div>
    ))}
  </div>
</div>


  );
};

export default CharacterComicsPage;
