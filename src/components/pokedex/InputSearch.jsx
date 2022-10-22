import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSearch.css'

const InputSearch = () => {
    
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim()}`)
    }

    return (
        <form className='form-control' onSubmit={submit}>
            <input className='input-search' id='search' type='text' placeholder='Search a Pokemon'/>
            <button className='btn-search'>Search</button>
        </form>
    )
}

export default InputSearch