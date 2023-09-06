import React from 'react';
import Navbar from '../Components/NavBar';
import Comics from '../Components/Comics';
import Footer from '../Components/Footer';
import SearchBar from '../Components/SearchBar';

type Props = {};

const ComicsPage: React.FC = () => {
  return (
    <section>
      <div className = "flex flex-col bg-gray-800 min-h-screen" >
        <Navbar />
        <SearchBar />
        <Comics />
        <Footer />
        </div>
    </section>
  )
};

export default ComicsPage;