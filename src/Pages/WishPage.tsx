import React, { useEffect, useState } from 'react'
import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import OwnCard from '../Components/Testowncard';
import WishList from '../Components/WishList';
import { Card } from '../types/index';



const WishPage = () => {

    //const { userId } = useParams<{ userId: string }>();
    const [resultAPI5, setResultAPI5] = useState<Card[]>();
    const token = localStorage.getItem('accessToken');



    return (
        <section>
            <Navbar />
            <section className="mx-40 lg:mx-56">
                <h1 className='text-white font-bold mb-1 text-xl inline-block p-2 bg-red-700 my-5 '>Les comics que vous voulez</h1>
                <WishList />
            </section>
            <Footer />
        </section>
    )
}

export default WishPage;