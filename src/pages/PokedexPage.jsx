/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"

export const PokedexPage = () => {

    const trainerName = useSelector(store => store.trainerName)

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=1009&offset=0'

    const [ pokemons, getPokemons ] = useFetch(url)

    useEffect(() => {
        getPokemons()
    }, [])
    

    console.log(pokemons)

    return (
        <div>
            <p>Welcome <span>{ trainerName }, Here you can find your favorite Pokémon. let's go!</span></p>
        </div>
    )
}
