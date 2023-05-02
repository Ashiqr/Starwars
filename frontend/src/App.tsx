import { Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalProvider from './context/GlobalContext';
import PersonList from './components/person/list';
import View from './components/person/view';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './style/theme';

function App() {

  return (
    <GlobalProvider>
       <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
            <Routes>
              <Route path="/" element={<PersonList />} />
              <Route path="view/:id" element={<View />} />
            </Routes>
        </div>
    </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
