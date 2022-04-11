import './App.css';
import { Grid } from '@material-ui/core';
import Header from './components/Headers';
import Content from './components/Content';
import BodyCard from './components/BodyCard';
import BasicModal from './components/Modal';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <BasicModal />
      </Grid>
      <Grid item>
        <Content />
      </Grid>
    </Grid> 
  );
}

export default App;