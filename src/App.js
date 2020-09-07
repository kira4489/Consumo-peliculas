import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VisorPeliculas from './components/peliculas/VisorPeliculas';
import InsertarPelicula from './components/peliculas/InsertarPelicula';
import DatosUsuario from './components/DatosUsuarios'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create">
            <DatosUsuario.Provider value = "otro valor">
              <InsertarPelicula />
            </DatosUsuario.Provider>
          </Route>
          <Route path="/update/:id">
            <VisorPeliculas />
          </Route>
          <Route path="/view/:id">
            <VisorPeliculas />
          </Route>
          <Route path="/delete/:id">
            <VisorPeliculas />
          </Route>
          <Route path="/">
            <VisorPeliculas />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
