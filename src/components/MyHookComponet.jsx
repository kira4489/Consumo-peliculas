import React, { useState, useEffect } from 'react'

export default function MyHookComponet() {
    const [nombre, modificarNombre] = useState("oscar mesa")
    const [edad, setEdad] = useState(29)
    const [estudios, setEstudios] = useState({
        estudio1: "Colegio",
        estudio2: "Técnico",
        estudio3: "Tecnólogo",
    })
    const [equipos, setEquipos] = useState([
        {nombre:"Nacional",categoria:"A",deporte:"Futbol"},
        {nombre:"América",categoria:"B",deporte:"Futbol"},
        {nombre:"Envigado",categoria:"C",deporte:"Baloncesto"}
    ])

    const ItemEquipo = ({nombre,categoria,deporte}) => <tr>
        <td>{nombre}</td>
        <td>{categoria}</td>
        <td>{deporte}</td>
    </tr>;

    let {
        estudio1,
        estudio2,
        estudio3
    } = estudios

    let cambiarEdad = (e) => {
        let suma = 19
        setEdad(edadPrevia => {
            return edadPrevia + 1
        })
    }

    useEffect(function(){
        console.log("Ya se renderizo la edad en el DOM");

        return terminoEdad
    },[edad])

    let terminoEdad = function() {
        console.log("Termino de ejecutarse el useEffect de edad")
    }

    return (
        <div>
            Mi nombre es : {nombre}<br />
            Mi edad es : {edad}<br/>
            <b>Estudios:</b>
            <ol>
                <li>{estudio1}</li>
                <li>{estudio2}</li>
                <li>{estudio3}</li>
            </ol>

            <b>Equipos</b>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Deporte</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        equipos.map((equipo,index) => <ItemEquipo {...equipo} key={index} />)
                    }
                </tbody>
            </table>
            <button onClick={cambiarEdad}>Sumar edad</button>
            <input type="text" name="nombre" id="nombre" onKeyUp = { (e) => modificarNombre(document.getElementById('nombre').value)} />
        </div>
    )
}
