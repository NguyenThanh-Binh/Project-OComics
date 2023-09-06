import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

type Character = {
  id: number;
  name: string;
  description: string;
  poster: string; 
};


const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/character')
      .then((response) => {
        if (!response.ok) {
          throw new Error('');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setCharacters(data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <div className="flex flex-col bg-gray-800 min-h-screen">
  <NavBar />

  <div className="container mx-auto p-4">
    <div className="bg-gray-800 rounded-lg shadow-md p-6">
      <h1 className="text-white font-bold mb-5 text-xl inline-block p-2 bg-red-700 my-5">Liste des Personnages</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <li key={character.id} className="bg-gray-800 rounded-lg p-4 border-4 border-violet-800"> {/* Utilisez la classe "border-blue-500" pour une bordure bleue personnalisée */}
            <img src={character.poster} alt={character.name} className="w-full h-auto rounded" />
            <h2 className="text-xl font-semibold mt-2">{character.name}</h2>
            <p className="text-white mt-2">{character.description}</p>
            <Link
              to={`/character-comics/${character.id}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              Voir les Comics Associés
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>

  <Footer />
</div>

);
};

export default CharactersList;
