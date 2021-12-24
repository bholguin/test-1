import Grid from '@mui/material/Grid';
import Numbers from './components/numbers';
import Pokemons from './components/pokemons';
import './App.css';
import { FC } from 'react';



const App: FC = (): JSX.Element => {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Parte 1 - Ejercicio de Lógica
        </p>
        <Grid container>
          <Grid item xs={6}>
            <Numbers />
          </Grid>
          <Grid item xs={6}>
            <Pokemons />
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
