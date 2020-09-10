import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VisorPeliculas from './components/peliculas/VisorPeliculas';
import InsertarPelicula from './components/peliculas/InsertarPelicula';
import DatosUsuario from './context/DatosUsuario';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/create">
              <InsertarPelicula />
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
              <DatosUsuario.Provider value = {{
                    idUser : 90,
                    userName : "pepito",
                    fullName : "Pedro",
                    lastName : "Martinéz", 
                    professions : ["Ingeniero", "Test", "Test 1"]
                }}>
                <VisorPeliculas />
              </DatosUsuario.Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
