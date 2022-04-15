import './App.css';
import UserPage from './container/UserPage';
import HomePage from './container/HomePage';
import { createTheme,  ThemeProvider } from '@mui/material/styles';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    BrowserRouter,
    Routes,
} from 'react-router-dom';

const theme = createTheme({
    palette: {
      primary: {
        main: '#424242',
      },
      secondary: {
        main: '#757575',
      },
    },
  });

function App() {
    return (
        <>  
            <ThemeProvider  theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/user/:id' element={<UserPage />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
     
    );
}

export default App;
