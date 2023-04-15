
import './App.css';
import { createTheme } from '@mui/material/styles';
import SubscriptionForm from './SubscriptionForm';
import { ThemeProvider } from '@mui/material/styles';

//create default theme object of material-ui
let theme = createTheme({
  palette: {
    primary: {
      main: '#008080',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <SubscriptionForm />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
