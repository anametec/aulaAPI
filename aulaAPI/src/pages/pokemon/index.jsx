import {useState} from 'react'

const pokemonList = [
    {id:1, nome:'Bulbasauro'},
    {id:4, nome:'Charmander'},
    {id:22, nome:'Rattata'},
    {id:333, nome:'Swablu'},
    {id:7, nome:'Squirtle'},
    {id:13, nome:'Weedle'}
]

function Pokemon(){
    return (
        <div>
            <h1>Lista de Pokémon</h1>
        </div>
    )
}

export default Pokemon