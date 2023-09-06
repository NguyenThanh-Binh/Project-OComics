import {
  Dispatch,
  SetStateAction,
  FC,
  ChangeEvent,
  useState,
  FormEvent,
} from 'react';

type Props = {
  setSearch: Dispatch<SetStateAction<string>>;
};

interface CustomElements extends HTMLFormControlsCollection {
  keywords?: HTMLInputElement;
}

const SearchBar: FC<Props> = ({ setSearch }) => {
  // --- Fonction qui gère le submit du formulaire
  const handleSubmit = (e: FormEvent) => {
    // On empêche le reload de la page lors du submit
    e.preventDefault();

    // (=) e.target.elements.keywords.value
    // Typescript nous oblige à tout typer
    const formElements = (e.target as HTMLFormElement).elements;
    const keywords = (formElements as CustomElements).keywords?.value;

    // On enregistre le mot clé pour lancer la requête
    setSearch(keywords || '');
  };

  return (
    <section id="search_bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="keywords"
          id=""
          placeholder="Entrez un mot-clé"
        />
      </form>
    </section>
  );
};

export default SearchBar;

/*
//  Fonction qui gère l'appui sur la touche entrée
  const handleSubmit = (e:React.FormEvent) => {
    // on empêche le reload de la page
    e.preventDefault();
    // typescript nous oblige à tout typer
    const FormElements = (e.target as HTMLFormElement).elements;
    const keywords = (FormElements as CustomElements).keywords?. value;

    setSearch(keywords || "");
  };

  return(
  <form onSubmit={handleSubmit}>
    <input type="text" name="keywords" id="" value={search} onChange={(e) => setSearch(e.target.value)}  placeholder="Entrez un mot clé" />
  </form>
  );
*/