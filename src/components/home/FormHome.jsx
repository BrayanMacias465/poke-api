import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/userName.slice'

const FormHome = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()  
        dispatch(setUserNameGlobal(e.target.prueba.value.trim()))
        navigate('pokedex')
    }

    return (
        <form onSubmit={submit} className="pokedex__form">
            <input id="prueba" className="pokedex__input" type="text" placeholder="Enter your name." />
            <button className="pokedex__btn">Catch them all!</button>
        </form>
    )
}

export default FormHome