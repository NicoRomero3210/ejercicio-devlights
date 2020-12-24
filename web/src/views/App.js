import {makeStyles} from '@material-ui/core/styles'
import {Container,Grid} from '@material-ui/core'
import Contenido from '../components/Contenido'
import {BrowserRouter as Router} from 'react-router-dom'

const estilos = makeStyles({
  container:{
    minHeight:"100vh",
    minWidth: "100vw",
  },
  cabecera:{
    minWidth: "100vw",
    minHeight: "15vh",
    backgroundColor : "#0A0A0A"
  },
})

function App(props) {
  const estilosLayout = estilos() 
  return (
    <Router>
      <Container
        className={estilosLayout.container}
        disableGutters={true}
      >
        <Grid className={estilosLayout.cabecera} container direction="row" justify="center">
          <h1 style={{color:'white'}}>Validacion de Strings</h1>
        </Grid>
        <Contenido />
      </Container>
    </Router>
   
  );
}

export default App;
