import React, { useEffect, useState } from 'react';
import { Card } from '../types/index';
import ComicsCard from './ComicsCard';


const WishList: React.FC = () => {

    const [resultAPI, setResultAPI] = useState<Card[]>();

  const token = localStorage.getItem('accessToken');
  // console.log(search);
  useEffect(() => {
    fetch('http://localhost:8080/api/wishlist'
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

  return (
    <div>
        {resultAPI?.map(item => (

        <div className="basis-1/4" key={item.id}>
         <ComicsCard key={item.id} card={item} wanted={true} />

    </div>

))}
    </div>
  )
};

export default WishList;