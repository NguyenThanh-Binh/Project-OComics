import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import CharactersList from './Pages/CharactersList';
import ComicsPage from './Pages/ComicsPage';
import Register from './Components/Register';
import Login from './Components/Login';
import Layout from './Components/Layout';
import OwnPage from './Pages/OwnPage';
import Unauthorized from './Components/Unauthorized';
import RequireAuth from './Components/RequireAuth';
import Administration from './Components/Administration';
import CharacterComicsPage from './Pages/CharacterComicsPage';
import { AuthProvider } from './context/AuthProvider';
import CRUD from './Pages/CRUD';
import BackOffice from './Pages/BackOffice';
import WishPage from './Pages/WishPage';


const App: React.FC = () => {

  
  return (
    <AuthProvider>
      <Routes>

        <Route path="/" element={<Layout />} >
            {/*public routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<ComicsPage/>} />
          <Route path="/Personnages" element={<CharactersList/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/unauthorized" element={<Unauthorized/>} />
          <Route path="/character-comics/:characterId" element={<CharacterComicsPage />} />
            {/*protected routes*/}
          <Route element={<RequireAuth/>} >
            <Route path="/wishlist" element={<WishPage/>} />
            <Route path="/ownlist" element={<OwnPage/>} />
            <Route path="/administration" element={<Administration/>} />
            <Route path="/crud" element={<CRUD />} /> 
            <Route path="/backoffice" element={<BackOffice />} /> 
          </Route>
        </Route>

      </Routes>
    </AuthProvider>
  );
};

export default App;

/* <Route path="/wishlist" element={<WishPage/>} />
*/
