import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Card from './Card'
import axios from 'axios'

const baseURL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";

const verFoto = (index) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
 
fetch()

const Grid = () => {

    const [pokemon, setPokemon] = React.useState([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            const {results} = response.data;
            setPokemon(results)
        });
    }, [])

    const getHabilities = async(index) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${1}/`;
        const data = await axios.get(url);
        console.log(data);
    }

    return (
        
            <Container>
                { 
                    pokemon.map((a, index) =>
                    <Col>
                        <Card photo={verFoto(index)} name={a.name} ></Card>
                        <button onClick={async() => await getHabilities(index)}>ver habilidades </button>
                    </Col>
                    
                    )
                }<Row>
                    
                </Row>
            </Container>
        
    )
}

export default Grid;
