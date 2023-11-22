/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"

export const PokeinfoPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const [pokemon, getPokemon] = useFetch(url)

    useEffect(() => {
        getPokemon()
    }, [])

    console.log(pokemon)
    

    return (
        <div>
            <article>
                <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
                <h2>{pokemon?.name}</h2>
            </article>
        </div>
    )
}
