import React,{useState,useEffect}from 'react'


function MyHookComponent() {
    const [nombre,modificarNombre]= useState("jhonatan")
    const [edad,setEdad]= useState(28)
    const [estudio,setEstudios] = useState({
        estudio1 : "colegio",
        estudio2 : "tecnico",
        estudio3 : "tecnologo"
    })
    const [equipos, setequipos] = useState([
        {nombre:"nacional",categoria:"A",deporte:"futbol"},
        {nombre:"America",categoria:"B",deporte:"Futbol"},
        {nombre:"envigado",categoria:"C",deporte:"Baloncesto"},
    ])

      const ItemEquipo = ({nombre,categoria,deporte})=> (<tr>
          <td>{nombre}</td>
          <td>{categoria}</td>
          <td>{deporte}</td>
      </tr>)

    let{
        estudio1,
        estudio2,
        estudio3,
    }= estudio
    let cambiarEdad = (e) =>{
        let suma = 19
        setEdad (edadPrevia => {
            console.log(edadPrevia)
            return edadPrevia+1
        })
    }

    useEffect(function(){
        console.log("ya se renderzio en el dom")
        return terminoEdad
    },[edad])

    let terminoEdad = function(){
        console.log("termino de ejecutarse")
    }

    return (
        <div>
         Nim nombre es: {nombre}<br/>
         Mi edad es:{edad}<br/>
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
                <th>Categorias</th>
                <th>Deportes</th>
                </tr>
           </thead>
           <tbody>
            {
                equipos.map((equipo,index) => <ItemEquipo {...equipo} key={index}/> 
                    )
            }
           </tbody>
           </table>
           <button onClick={cambiarEdad}>Sumar edad</button>
        <input type="text" name="nombre" id="nombre" onKeyUp={(e) =>modificarNombre(document.getElementById('nombre').value)}/>
        </div>
    )
}

export default MyHookComponent
