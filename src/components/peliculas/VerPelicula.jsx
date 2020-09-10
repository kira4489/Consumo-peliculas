
import React, { Component } from 'react';
import DatosUsuario from '../../context/DatosUsuario'
class VerPelicula extends Component {
    render() {
        return (
            <div>
                <i>El apellido de la persona es : {this.context.lastName}</i>
            </div>
        );
    }
}

VerPelicula.contextType = DatosUsuario

export default VerPelicula;