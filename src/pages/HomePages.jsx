/* eslint-disable react/no-unescaped-entities */

import { useRef } from "react"

export const HomePages = () => {

    const inputName = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        inputName.current.value.trim()
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Hi Trainer!</h2>
            <p>To start, please give me your trainer name</p>
            <form onSubmit={handleSubmit}>
                <input ref={inputName} type="text" />
                <button>Gotta catch'em all!</button>
            </form>
        </div>
    )
}
