import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePages } from './pages/HomePages'
import { PokedexPage } from './pages/PokedexPage'
import { PokeinfoPage } from './pages/PokeinfoPage'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/pokedex' element={<PokedexPage/>} />
        <Route path='/pokedex/:id' element={<PokeinfoPage/>} />
      </Routes>
    </div>
  )
}

export default App
