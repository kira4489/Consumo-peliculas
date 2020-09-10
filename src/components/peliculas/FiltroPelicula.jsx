import React from 'react'
import IMGloading from '../../imagenes/loading.gif'

export default function FiltroPelicula({obtenerPeliculas,setPeliculas,...props}) {

    let filtrarPeliculas = async(e) => {
        document.querySelector("#filtro").disabled = true
        let peliculaServicio = await obtenerPeliculas()
        let filtro = document.querySelector("#filtro").value.toLowerCase()
        let resultado = peliculaServicio.filter(function(pelicula){
            let tituloMin = pelicula.title.toLowerCase()
            return tituloMin.indexOf(filtro) >= 0
        })
        setPeliculas(resultado)
        props.setLoading(false)
        document.querySelector("#filtro").disabled = false
        document.querySelector("#filtro").focus()
    }

    return (
        <div>
            <input type="text" id="filtro" onKeyUp={filtrarPeliculas} placeholder="Filtrar por titulo"/>
            {props.loading===true?<span><img src={IMGloading} alt="cargando..."/></span>:""}
        </div>
    )
}
