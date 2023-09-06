import React, { useRef, useState } from 'react'


const CRUD = () => {

    const list =[
        {
            id:1,
            name: "Marvel",
            description: "Comics",
        },
        {
            id:2,
            name: "Batman",
            description: "Batman comics 3",
        },
    ];

    const [comics, setComics] = useState(list);
    const [updateState, setUpdateState] = useState(-1);
    
    function EditComics () {
        return(
            <ul>
                <li><input type="text" name="name"/></li>
                <li><input type="text" name="description"/></li>
                <li><button >Modification</button></li>
            </ul>
        )
    };

    function AddComics({setComics}){
        const nameRef = useRef();
        const descriptionRef = useRef();

        function handleSubmit(event){
            event?.preventDefault
            const name = event?.target.elements.name.value;
            const description = event?.target.elements.description.value;
            const newcomics = {
                id:3,
                name,
                description
            }

            setComics((prevComics)=>
            {
                return prevComics.concat(newcomics)
            })
            nameRef.current.value ="";
            descriptionRef.current.value ="";
        };

        return(
            <form className="mb-5" onSubmit={handleSubmit}>
                <input className="border-2" type="text" name="name" placeholder="Entrer le nom du comics" ref={nameRef}/>
                <input className="border-2" type="text" name="description" placeholder="Entrer la description" ref={descriptionRef}/>
                <button className="bg-red-200 ml-2" type="submit">Ajouter</button>
            </form>
        )
    };

    

  return (

    <div className="flex ">
        <div>
        <AddComics setComics={setComics}/>
        <table>
            {
                comics.map((current)=> (
                    updateState === current.id ? <EditComics /> :
                    <ul>
                        <li className="bg-blue-300" >{current.name}</li>
                        <li className="bg-green-300 h-12 ">{current.description}</li>
                        <li>
                            <button className="mr-2" onClick={()=> handleSubmit(current.id)}>Ajout</button>
                            <button>Supprimer</button>
                        </li>
                    </ul>
                ))
            }
        </table>
        </div>
    </div>
  )
  
  function handleSubmit(id){
    setUpdateState(id)
}
};

export default CRUD;