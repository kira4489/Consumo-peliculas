import React, {useState} from 'react'
import DatosUsuario from '../../context/DatosUsuario';

const InsertarPelicula = () => {
    const [dataPelicula, setDataPelicula] = useState({
        title : "Test oscar",
        year : "2018",
        cover : "http://dummyimage.com/170x206.jpg/cc0000/ffffff",
        description:"Test descripción película",
        duration : "120",
        contentRating : "PG",
        source : "http://prnewswire.com/aliquam/erat.html" ,
        tags : [
            "test 1",
            "test 2"
        ]
    })

    let capturaDatosFormulario = (e) => {
        let pelicula = dataPelicula 
        pelicula[e.target.name] = e.target.value
        setDataPelicula(pelicula)
    }

    let enviarPelicula = async(e) => {
        e.preventDefault();
        let respuesta = await fetch('https://api-movies-users.vercel.app/movies', { method: 'POST', body: JSON.stringify(dataPelicula),headers:{'Content-Type': 'application/json'}})
        let pelicula = await respuesta.json()
        if(respuesta.status === 201){
            alert(`Pelicula con ID ${pelicula.id} insertada`)
        }
    }

   // const contextType = <DatosUsuario/>
    //    console.log(contextType)
    return (
        <form id="frm_insertar_pelicula" onSubmit={enviarPelicula}>
            <div>
                <label htmlFor="title">Titulo (*)</label>
                <input type="text" name="title" id="title" defaultValue={dataPelicula.title} onChange={capturaDatosFormulario} required/>
            </div>
            <div>
                <label htmlFor="year">Año (*)</label>
                <input type="number" name="year" id="year"  placeholder="YYYY" min="2010" max="2020" onChange={capturaDatosFormulario}  required defaultValue={dataPelicula.year}/>
            </div>
            <div>
                <label htmlFor="cover">Caratula (*)</label>
                <input type="url" name="cover" id="cover"  placeholder="Caratula de la portada" onChange={capturaDatosFormulario}  defaultValue={dataPelicula.cover} required/>
            </div>
            <div>
                <label htmlFor="description">Descripción</label>
                <textarea name="description" id="description" defaultValue={dataPelicula.description} placeholder="Descripción de la pelicula" onChange={capturaDatosFormulario} />
            </div>
            <div>
                <label htmlFor="duration">Duración (*)</label>
                <input type="number" name="duration" id="duration"  placeholder="YYYY" min="30" max="300" defaultValue={dataPelicula.duration} onChange={capturaDatosFormulario}  required/>
            </div>
            <div>
                <label htmlFor="contentRating">Clasificación (*)</label>
                <select defaultValue={dataPelicula.contentRating} id="contentRating" onChange={capturaDatosFormulario}  name="contentRating" required>
                    <option value="R">Restringido</option>
                    <option value="G">General</option>
                    <option value="PG">En compañia de un adulto</option>
                    <option value="PG-13">En compañia de un adulto y publico mayor a 13</option>
                    <option value="NC-17">Publico mayor a 17</option>
                </select>
            </div>
            <div>
                <label htmlFor="source">Fuente (*)</label>
                <input type="url" name="source" id="source" defaultValue={dataPelicula.source} onChange={capturaDatosFormulario}  required/>
            </div>
            <div>
                <label htmlFor="tags">Tags (*)</label>
                <input type="text" name="tags" id="tags" defaultValue={dataPelicula.tags} onChange={capturaDatosFormulario}  placeholder="Cada tag debe ir con una ," required/>
            </div>
            <div>
                <input type="submit" value="Enviar"/>
            </div>
        </form>
    )
}

export default InsertarPelicula
