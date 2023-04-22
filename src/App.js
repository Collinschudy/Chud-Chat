import {Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='signin' element={<SignIn />}/>
        <Route path='signup' element={<SignUp />}/>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
  );
}


export default App;

