import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {
  return (
    <div className="pokedex">
      <img className='pokedex__img' src='/images/home/pokedex.png' />
      <header className='pokedex__header'>
        <h2 className="pokedex__subtitle">Hi Trainer</h2>
        <p className="pokedex__text">Give me your to see the pokedex</p>
      </header>
      <FormHome />
    </div>
  )
}

export default Home