// Typage des résultats de l'API
// '?' pour indiquer que les clés sont optionnels pour que s'il y a une erreur,
// ça règle le problème
export type Card = { // pour pas avoir d'erreur (message est ce qui apparait en cas d'erreur)
    title? : string;
    poster? :string;
    released_at? :string;
    synopsis? :string;
    id? :number;
    owned? :boolean;
    wanted? :boolean;
    // signifie que l'on peut avoir n'importe quel clé avec tous les noms possibles et 
    // avec des valeurs de n'importe quel type
  };

  export type Character ={
    name? : string;
    released_at? : string;
    poster? :string;
    id? :number;
  };



  export type ResultAPI = {
    message? :string;// pour pas avoir d'erreur (message est ce qui apparait en cas d'erreur)
    items? :Card[];
    post? :Character[];
  };
