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
                    <Route exact path='/' element={<UserPage />} />
                    {/* <Route path='/home' element{<HomePage/>}/> */}
                </Routes>
            </BrowserRouter>
        </>
        // <div>
        //     <p>fadsas</p>
        //     <UserPage></UserPage>
        // </div>
    );
}

export default App;
