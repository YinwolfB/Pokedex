/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux"
import { useFetch } from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import { PokeCard } from "../components/PokedexPage/PokeCard"

export const PokedexPage = () => {

    const [inputValue, setInputValue] = useState('')

    const trainerName = useSelector(store => store.trainerName)

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

    const [pokemons, getPokemons] = useFetch(url)

    useEffect(() => {
        getPokemons()
    }, [])

    const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.toLowerCase().trim())
    }

    const cdFilter = (poke) => {
        const nameFiltered = poke.name.includes(inputValue)
        return nameFiltered
    }

    return (
        <div>
            <p>Welcome <span>{trainerName}, Here you can find your favorite Pokémon. let's go!</span></p>
            <form onSubmit={handleSubmit}>
                <input ref={inputSearch} type="text" />
                <button>Search</button>
            </form>
            <div>
                {
                    pokemons?.results.filter(cdFilter).map(poke => (
                        <PokeCard 
                            key={poke.url}
                            url={poke.url}
                        />
                    ))
                }
            </div>
        </div>
    )
}
