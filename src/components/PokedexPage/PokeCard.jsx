/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"

export const PokeCard = ({ url }) => {

    const [ infoPoke, getInfoPoke ] = useFetch(url)

    useEffect(() => {
        getInfoPoke()
    }, [])
    
    console.log(infoPoke)

    return (
        <article>
            <header>
                <img src={infoPoke?.sprites.other.dream_world.front_default} alt="" /> {/* SE PUEDE USAR TAMBIEN ... infoPoke?.sprites.other["official-artwork"].front_default ... infoPoke?.sprites.other.dream_world.front_default */}
                <section>
                    <h3>{infoPoke?.name}</h3>
                    <ul>{
                        infoPoke?.types.map(infoType => (
                            <li key={infoType.url}> {infoType.type.name}</li>
                        ))
                        }
                    </ul>
                    <hr />
                    <ul>
                        {
                            infoPoke?.stats.map(infoStat => (
                                <li key={infoStat.stat.url}>
                                    <span>{infoStat.stat.name}</span>
                                    <span>{infoStat.base_stat}</span>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </header>
        </article>
    )
}
