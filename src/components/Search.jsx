import React from 'react'
  
import '../styles/styles.css'

// const baseURL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";


const Search = () => {

    // const resp = await axios.get(baseURL);
    // console.log(resp.data)
    // const {results} = resp.data;
    // console.log(results);

    return (
        <div >
            <h1 className="title">Listado de Pokemon</h1>
            
            <input type="text" 
                placeholder="Buscar"
            />
        </div>

        
    )
}

export default Search;