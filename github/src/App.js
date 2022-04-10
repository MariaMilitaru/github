import './App.css';
import UserPage from './container/UserPage';
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
                    <Route path='/' element={<UserPage />} />
                    {/* <Route path='/home' element{<HomePage/>}/> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
