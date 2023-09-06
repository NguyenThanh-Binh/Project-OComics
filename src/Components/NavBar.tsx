import React from 'react'; 
import Logo from '../assets/Logo.png'; 
import { UserOutlined } from '@ant-design/icons';
import useAuth from '../hooks/useAuth'; 
import { useNavigate, Link } from 'react-router-dom';

type NavbarProps = {
  isAuthenticated: boolean; 
}

// Définition du composant Navbar en tant que composant fonctionnel React
const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  console.log('authtototo', auth);

  const onLogout = () => {
    // Supprime le token d'accès du localStorage
    localStorage.removeItem('accessToken');

    // Réinitialise l'état de l'authentification
    const authData = {
      auth: false,
      email: '',
      roles: [],
      accessToken: '',
    };
    setAuth(authData);

    // Redirige l'utilisateur vers la page d'accueil (ou toute autre page souhaitée)
    navigate('/');
  };

  isAuthenticated = auth.auth
  return (
    <nav className="container mx-auto bg-yellow-500"> 
      <div className="flex h-14 items-center justify-between border-slate-200"> 
        <Link to="/"> {/* Un lien de navigation vers la page d'accueil */}
          <img className="h-12 w-24 rounded-md cursor-pointer" src={Logo} alt="" /> 
        </Link>
        <ul className="hidden gap-8 text-sm font-semibold md:flex">
          <li>
            <Link to="/Comics" className='hover:bg-yellow-600'>Comics</Link>
          </li>
          <li>

            <Link to="/Personnages" className='hover:bg-yellow-600'>Personnages</Link> 
          </li>
          {isAuthenticated ? ( // Condition pour vérifier si l'utilisateur est authentifié
            <>
              <li>
                <Link to="/wishlist" className='hover:bg-yellow-600'>Je possède</Link> 
              </li>
              <li>
                <Link to="/ownlist" className='hover:bg-yellow-600'>Je Veux</Link>
              </li>
              <li>
                <button onClick={onLogout} className='hover:bg-yellow-600'>Se déconnecter</button>
              </li>
              <li>
                <Link to="/backoffice" className='hover:bg-yellow-600'>Back Office</Link>
              </li>
              <li>
                {isAuthenticated && ( // Afficher l'icône d'utilisateur uniquement si l'utilisateur est authentifié
                  <UserOutlined style={{ fontSize: '18px' }} /> 
                )}
              </li>
            </>
          ) : ( // Si l'utilisateur n'est pas authentifié, afficher les liens d'inscription et de connexion
            <>
              <li>
                <Link to="/register" className='hover:bg-yellow-600'>Inscription</Link>
              </li>
              <li>
                <Link to="/login" className='hover:bg-yellow-600'>Se connecter</Link>
              </li>
            </>
          )}
        </ul>
        <div className="flex gap-4"> 
          <input placeholder="recherche..." className="rounded-md w-24 border-2 border-slate-200 md:w-32" type="text" /> {/* Champ de recherche */}
          <button className="block md:hidden"> 
            <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
