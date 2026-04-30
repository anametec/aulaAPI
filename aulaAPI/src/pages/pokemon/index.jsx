import { useState } from 'react'
import './style.css'

const pokemonList = [
    {id:1, nome:'Bulbasauro'},
    {id:4, nome:'Charmander'},
    {id:22, nome:'Rattata'},
    {id:333, nome:'Swablu'},
    {id:7, nome:'Squirtle'},
    {id:13, nome:'Weedle'},
    {id:5, nome:'Charmeleon'},
    {id:24, nome:'Arbok'},
    {id:2, nome:'Ivysaur'},
    {id:23, nome:'Ekans'},
    {id:18, nome:'Pidgeot'}
]

function Pokemon(){
    const [pokemonGlobal, setPokemonGlobal] = useState(null)

    const getPokemonData = (idPokemon)=>{
        const uri = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`

        fetch(uri)
            .then(res =>res.json())
                .then(json=>{
                    const pokemonFetch = {
                        nome: json.name,
                        altura: json.height,
                        peso: json.weight,
                        vida: json.stats[0].base_stat,
                        geracao: json.generation,
                        imagem: json.sprites.other['official-artwork'].front_default
                    }
                    setPokemonGlobal(pokemonFetch)
                    console.log(pokemonFetch)
                })
                .catch(()=>alert('Não foi possível acessar os dados do pokémon'))
    }

    return (
        <div className='container'>
            <div className='header'>
                <h1>Escolha o seu Pokémon</h1>
            </div>

            {pokemonGlobal && (
                <div className='pokemon-info'>
                    <h2>Nome: {pokemonGlobal.nome}</h2>
                    <h2>Altura: {pokemonGlobal.altura}</h2>
                    <p>Peso: {pokemonGlobal.peso}</p>
                    <p>Vida: {pokemonGlobal.vida}</p>
                    <p>Geração: {pokemonGlobal.generation}</p>
                    <img
                        src={pokemonGlobal.imagem}
                        alt={pokemonGlobal.nome}
                        />
                </div>
            )}

            {pokemonList.map((item)=>(
                <div className='card' key={item.id}>
                    <p>{item.nome}</p>
                    <button onClick={()=>getPokemonData(item.id)}>Saiba mais</button>
                </div>
            ))}
        </div>
   
    )
}

export default Pokemon