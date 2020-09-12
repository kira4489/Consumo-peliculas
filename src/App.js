import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VisorPeliculas from './components/peliculas/VisorPeliculas';
import InsertarPelicula from './components/peliculas/InsertarPelicula';
import DatosUsuario from './context/DatosUsuario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import VerPelicula from './components/peliculas/VerPelicula';
import HVerPelicula from './components/peliculas/HVerPelicula';


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Router>
          <Switch>
            <Route path="/create">
              <InsertarPelicula />
            </Route>
            <Route path="/update/:id">
              <VisorPeliculas />
            </Route>
            <Route path="/view/:id" render = {(props) => <VerPelicula {...props} /> }/>
            <Route path="/hview/:id" render = {(props) => <HVerPelicula {...props} /> }/>
            <Route path="/delete/:id">
              <VisorPeliculas />
            </Route>
            <Route path="/">
              <DatosUsuario.Provider value={{
                idUser: 90,
                userName: "pepito",
                fullName: "Pedro",
                lastName: "Martinéz",
                professions: ["Ingeniero", "Test", "Test 1"]
              }}>
                <VisorPeliculas />
              </DatosUsuario.Provider>
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
