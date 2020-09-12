import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import FiltroPelicula from './FiltroPelicula'
import DatosUsuario from '../../context/DatosUsuario'
import VerPelicula from './VerPelicula'
import { Link } from 'react-router-dom'

export default function VisorPeliculas(props) {
    const [peliculas, setPeliculas] = useState([])
    const [loading, setLoading] = useState(false)
    const contextUsuario = useContext(DatosUsuario)
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
        <>
            <FiltroPelicula obtenerPeliculas={obtenerPeliculas} setPeliculas={setPeliculas} loading={loading} setLoading={setLoading} />
            <table border="1" className="table table-bordered">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Año</th>
                        <th>Cover</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas.map((pelicula, i) => {
                        return <tr key={i}>
                            <td>{pelicula.title}</td>
                            <td>{pelicula.year}</td>
                            <td><img src={pelicula.cover} alt={pelicula.title} /></td>
                            <td>{pelicula.description}</td>
                            <td>
                                <Link to={`view/${pelicula.id}`}>Ver</Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            {/*}
            <DatosUsuario.Consumer>
                {(value) => {
                    return <div>
                        <p>Nombre usuario: {value.userName}</p>
                        <p>Nombre: {value.fullName}</p>
                        <p>Apellido: {value.lastName}</p>
                    </div>
                }}
            </DatosUsuario.Consumer>
            {*/}
            <div>
                <p>Nombre usuario: {contextUsuario.userName}</p>
                <p>Nombre: {contextUsuario.fullName}</p>
                <p>Apellido: {contextUsuario.lastName}</p>
            </div>
        </>
    )
}

function MiniPelicula(props) {
    return <>
        <b>Este es un miniComponente </b>
        <DatosUsuario.Consumer>
            {value => <>
                <p>ID: {value.idUser}</p>
                <ul>
                    {value.professions !== undefined ? value.professions.map((profession,index) => <li key={index}>{profession}</li>):""}
                </ul>
            </>}
        </DatosUsuario.Consumer>
    </>
}