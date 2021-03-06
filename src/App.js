import './App.css';
import Routes from './Routes';
import Appbar from './components/Appbar';
import { Theme } from './Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <div className="App">
        <Appbar />
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
