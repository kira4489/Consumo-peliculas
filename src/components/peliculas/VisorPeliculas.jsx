import React, { useState } from 'react'
import { useEffect } from 'react'

export default function VisorPeliculas(props) {
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch('https://api-movies-users.vercel.app/movies')
            .then(r => r.json())
            .then(movies => {
                setPeliculas(movies)
            })
    }, [])

    return (
        <section>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Año</th>
                        <th>Cover</th>
                        <th>Descripción</th>
                        <th>Duración</th>
                        <th>Calificación</th>
                        <th>Fuente</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas.map((pelicula, i) => {
                        return <tr key={i}>
                            <td>{pelicula.id}</td>
                            <td>{pelicula.title}</td>
                            <td>{pelicula.year}</td>
                            <td><img src={pelicula.cover}/></td>
                            <td>{pelicula.description}</td>
                            <td>{pelicula.duration}</td>
                            <td>{pelicula.contentRating}</td>
                            <td><a href={pelicula.source} target="_blank">enlace</a></td>
                            <td><ul>{pelicula.tags.map(tag => <li>{tag}</li>)}</ul></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </section>
    )
}