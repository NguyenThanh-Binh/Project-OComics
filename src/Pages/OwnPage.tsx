import React, { useEffect, useState } from 'react'
import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import OwnCard from '../Components/Testowncard';
import OwnList from '../Components/OwnList';
import { Card } from '../types/index';



const OwnPage = () => {

  //const { userId } = useParams<{ userId: string }>();
  const [resultAPI3, setResultAPI3] = useState<Card[]>();
  const token = localStorage.getItem('accessToken');



  return (
    <section>
      <Navbar />
      <section className="mx-40 lg:mx-56">
        <h1 className='text-white font-bold mb-1 text-xl inline-block p-2 bg-red-700 my-5 '>Vos comics</h1>
        <OwnList />
      </section>
      <Footer />
    </section>
  )
}

export default OwnPage;

