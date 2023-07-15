import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { setCurrentUser } from './redux/user/user.actions';
import { auth } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/userSelector';
import { createStructuredSelector } from 'reselect';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from './firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';



function App({ currentUser, setActiveUser }) {

  const styles = {
    container: ``
  }

  const ProcRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='signin' />

    }
    return children;
  }
const navigate = useNavigate()
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if(user){
        const ref = doc(db, 'chudChatUsers', user.uid);
        onSnapshot(ref, (snapDoc) => {
          setActiveUser({id: snapDoc.id, ...snapDoc.data()})
         
        })
      }else{
        navigate('/signin')
      }
      
    });
    return () => unsub();
  }, [])

  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={ <ProcRoute><HomePage /></ProcRoute>  } />
        <Route exact path='signin' element={ <SignIn /> } />
        <Route exact path='signup' element={ <SignUp />} />
      </Routes>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setActiveUser: (user) => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

