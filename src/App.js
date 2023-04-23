import {Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';


function App() {
  const styles = {
    container: ``
  }
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='signin' element={<SignIn />}/>
        <Route path='signup' element={<SignUp />}/>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
  );
}


export default App;

