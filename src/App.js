import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='signin' element={<SignIn />}/>
        <Route path='signup' element={<SignUp />}/>
      </Routes>

    </div>
  );
}


export default App;

