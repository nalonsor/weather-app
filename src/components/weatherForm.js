import { useState } from 'react'

import styles from './weatherForm.module.css'

export default function WeatherForm({ onChangeCity }){

    const [city, setCity] = useState('')

    const handleChange = (e) => {

        const valor = e.target.value
        if(valor !== ''){
            setCity(valor)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onChangeCity(city)
    }

    return <form onSubmit={handleSubmit} className={styles.container}>
        <input 
            type="text" 
            onChange={handleChange}
            className={styles.input}
        />
    </form>
}