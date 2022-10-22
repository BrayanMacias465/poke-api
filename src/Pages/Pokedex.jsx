import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPokedex from '../components/pokedex/CardPokedex'
import axios from 'axios'
import InputSearch from '../components/pokedex/InputSearch'
import SelectByType from '../components/pokedex/SelectByType'
import Pagination from '../components/pokedex/Pagination'
import './styles/pokedex.css'
import Header from '../components/shared/Header'

const Pokedex = () => {

  const [pokemons, setPokemons ] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {
    if(typeSelected !== 'All Pokemons'){
      axios.get(typeSelected)
      .then(res => {
        const result = res.data.pokemon.map( e => e.pokemon )
        setPokemons(result)
      })
      .catch(err => console.log(err))
    }else{
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'
      axios.get(URL)
        .then( res => setPokemons(res.data.results))
        .catch( err => console.log(err))
    }
  }, [typeSelected])

  const userName = useSelector( state => state.userName )
  
  const [page, setPage] = useState(1)
  const [pokerPerPage, setPokerPerPage] = useState(12)
  const initialPoke = (page - 1) * pokerPerPage
  const finalPoke = page * pokerPerPage

  return (
    <div>
      <header>
        <Header />
        <p className='title-header'>Welcome {userName} <span className='title-header__span'>, here you can find your favorite pokemon</span></p>
      </header>
      <aside className='aside-header'>
        <div className='aside-header_filter'>
          <InputSearch />
          <SelectByType setTypeSelected={setTypeSelected} setPage={setPage}/>
        </div>
        <Pagination 
          page={page}
          pagesLength={ pokemons && Math.ceil(pokemons.length / pokerPerPage) }
          setPage={setPage}
        />
      </aside>
      <main className='main'>
        <div className='card-container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map( pokemon => (
              <CardPokedex 
                key={pokemon.url}
                url={pokemon.url}
              />
              ))
          }
        </div>
        <Pagination 
          page={page}
          pagesLength={ pokemons && Math.ceil(pokemons.length / pokerPerPage) }
          setPage={setPage}
        />
      </main>
    </div>
  )
}

export default Pokedex