import logo from './logo.svg';
import './App.css';
import CardArray from './components/CardArray';
import Grid from '@mui/material/Grid2';

function App() {
  return (
    <div className="App">
      <Grid 
        container spacing={5} 
        alignItems="center"
        justifyContent="center"
       >
        <CardArray/>
      </Grid>

    </div>
  );
}

export default App;
