import React from 'react'
import { Character } from '../types'
import '../assets/styles/styles.css';
import Footer from './Footer';


type Props = {
    post : Character;
};

const CharactersCard: React.FC<Props> = ({post}) => {
  return (
    
        
      <div className='relative flex flex-col h-full w-full cursor-pointer my-5 gap-4 '>
        <div className='absolute bottom-0 text-center w-full font-extrabold text-white z-10 p-2 charactersIMG'>{post.name}</div>
        <img
          src={post.poster}
          alt="Image"
          className="object-cover h-full w-full" 
        />
      </div>
     

    
  );
  
};
<Footer />
/* 


*/

export default CharactersCard;