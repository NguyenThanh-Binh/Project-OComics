import React, { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; 

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Za-z0-9+_.-]+@(.+)$/;
const REGISTER_URL = 'http://localhost:8080/api/register';

const Register = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [username, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [email, setEmail] = useState(''); 
  const [validEmail, setValidEmail] = useState(false); 
  
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');  

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email)); 
  }, [email]);

  useEffect(() => {
    setErrMsg('');
  }, [username, password, matchPwd, email]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2 || !validEmail) { 
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email, firstName, lastName }), 
      });

      if (response.ok) {
        setSuccess(true);
      } else if (response.status === 409) {
        setErrMsg('Username Token');
      } else {
        setErrMsg('Registration Failed');
      }

      setUser('');
      setPwd('');
      setMatchPwd('');
      setEmail('');
      setFirstName('');
      setLastName('');

      navigate('/');
    } catch (err) {
      setErrMsg('No Server Response');
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  }

  return (
      <section className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <p ref={errRef} className={`text-red-500 ${errMsg ? 'block' : 'hidden'}`} aria-live="assertive">
            {errMsg}
          </p>
          <h1 className="text-3xl font-semibold mb-4">Inscription</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-600">Prénom:</label>
              <input
                type="text"
                id="firstName"
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-600">Nom:</label>
              <input
                type="text"
                id="lastName"
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email:</label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">Nom d'utilisateur:</label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={username}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
                <FontAwesomeIcon icon={faCheck} className={`absolute right-3 top-3 ${validName ? 'text-green-500' : 'hidden'}`} />
                <FontAwesomeIcon icon={faTimes} className={`absolute right-3 top-3 ${validName || !username ? 'hidden' : 'text-red-500'}`} />
              </div>
              <p id="uidnote" className={`mt-1 text-xs ${userFocus && username && !validName ? 'text-red-500' : 'offscreen'}`}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 à 24 caractères.<br />
                Doit commencer par une lettre.<br />
                Les lettres, les chiffres, les traits de soulignement et les traits d'union sont autorisés.
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Mot de passe:</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={password}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
                <FontAwesomeIcon icon={faCheck} className={`absolute right-3 top-3 ${validPwd ? 'text-green-500' : 'hidden'}`} />
                <FontAwesomeIcon icon={faTimes} className={`absolute right-3 top-3 ${validPwd || !password ? 'hidden' : 'text-red-500'}`} />
              </div>
              <p id="pwdnote" className={`mt-1 text-xs ${pwdFocus && !validPwd ? 'text-red-500' : 'offscreen'}`}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 à 24 caractères.<br />
                Doit incluire un minuscule, une majuscule, un chiffre et un caractère spécial.<br />
                Caractères spéciaux acceptés: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="confirm_pwd" className="block text-gray-600">Confirmer le mot de passe:</label>
              <div className="relative">
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
                <FontAwesomeIcon icon={faCheck} className={`absolute right-3 top-3 ${validMatch && matchPwd ? 'text-green-500' : 'hidden'}`} />
                <FontAwesomeIcon icon={faTimes} className={`absolute right-3 top-3 ${validMatch || !matchPwd ? 'hidden' : 'text-red-500'}`} />
              </div>
              <p id="confirmnote" className={`mt-1 text-xs ${matchFocus && !validMatch ? 'text-red-500' : 'offscreen'}`}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Doit correspondre au premier mot de passe saisi.
              </p>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={!validName || !validPwd || !validMatch || !validEmail} // Modification pour inclure la validité de l'email
            >
              S'inscrire
            </button>
          </form>
          <p className="mt-4 text-gray-600">
            Déjà inscrit ?<br />
            <span className="line">
              <Link to="/login" className="text-blue-500 hover:underline">Connectez-vous !</Link>
            </span>
          </p>
          <span className="mt-4 text-gray-600">
            <Link to="/" className="text-blue-500 hover:underline">Accueil</Link>
          </span>
        </div>
      </section>
  );
}

export default Register;
