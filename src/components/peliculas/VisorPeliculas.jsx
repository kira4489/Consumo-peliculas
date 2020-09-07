import React, { useState } from 'react'
import { useEffect } from 'react'
import FiltroPelicula from './FiltroPelicula'
import DatosUsuario from '../DatosUsuarios'

export default function VisorPeliculas(props) {
    const [peliculas, setPeliculas] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function obtenerPeliculasIniciales() {
            let peliculas = await obtenerPeliculas()
            setPeliculas(peliculas)
            setLoading(false)
        }
        obtenerPeliculasIniciales()
    }, [])

    const obtenerPeliculas = async () => {
        setLoading(true)
        let respuesta = await fetch('https://api-movies-users.vercel.app/movies')
        let peliculas = await respuesta.json()
        return peliculas
    }

return (
        <section>
            <FiltroPelicula obtenerPeliculas={obtenerPeliculas} setPeliculas={setPeliculas} loading={loading} setLoading={setLoading} />
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
                            <td><img src={pelicula.cover} alt={pelicula.title} /></td>
                            <td>{pelicula.description}</td>
                            <td>{pelicula.duration}</td>
                            <td>{pelicula.contentRating}</td>
                            <td><a href={pelicula.source} rel="noopener noreferrer">enlace</a></td>
                            <td><ul>{pelicula.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <DatosUsuario.Consumer>
                {usuario => <div>
                    <p>Nombre de usuario: {usuario.userName}</p>
                </div>}
            </DatosUsuario.Consumer>
        </section>
    )
}