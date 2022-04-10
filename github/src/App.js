import './App.css';
import UserPage from './container/UserPage';
import HomePage from './container/HomePage';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    BrowserRouter,
    Routes,
} from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/user/:id' element={<UserPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
