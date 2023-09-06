import { createContext, useState, useEffect, ReactNode, useContext } from "react";

// Créez un contexte pour l'authentification
const AuthContext = createContext<{ auth: any; setAuth: any }>({ auth: {}, setAuth: () => {} });

// Créez un composant fournisseur d'authentification qui englobe les enfants avec le contexte d'authentification
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // Utilisez l'état local pour stocker les données d'authentification
    const [auth, setAuth] = useState({});

    // Utilisez useEffect pour récupérer les données d'authentification depuis le stockage local lorsque le composant est monté
    useEffect(() => {
        const storedValue = window.localStorage.getItem('auth');

        // Vérifiez si la valeur n'est pas nulle avant de la parser
        if (storedValue !== null) {
            const value = JSON.parse(storedValue);
            if (Object.keys(value).length > 0) {
                console.log(value);
                setAuth(value);
            }
        }
    }, []);

    // Utilisez useEffect pour mettre à jour le stockage local lorsque les données d'authentification changent
    useEffect(() => {
        console.log('%c test', 'color:red', auth)
        if (Object.keys(auth).length > 0) {
            // Stockez les données d'authentification dans le stockage local au format JSON
            window.localStorage.setItem('auth', JSON.stringify(auth));
        }
    }, [auth]);

    // Rendre le contexte d'authentification disponible pour les composants enfants
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;