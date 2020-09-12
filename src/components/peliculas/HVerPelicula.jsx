import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PeliculaTable from './PeliculaTable';
import { useParams } from 'react-router-dom';

export default function HVerPelicula() {
    const [pelicula, setPelicula] = useState({
        id: "",
        title: "",
        year: "",
        cover: "",
        description: "",
        duration: "",
        contentRating: "",
        source: "",
        tags: []
    })
    let {id} = useParams(); 

    useEffect(() => {
        let respuesta = axios.get(`https://api-movies-users.vercel.app/movies/${id}`)
        respuesta.then( (pelicula) => setPelicula({...pelicula.data}) )
    }, [])
    console.log(pelicula)
    return (
        <PeliculaTable {...pelicula} />
    )
}
