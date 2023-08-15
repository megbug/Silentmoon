import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AccessPage from './pages/AccessPage';
import Welcome from './pages/Welcome';
import HomePage from './pages/HomePage';
import Yoga from './pages/Yoga'
import Video from './pages/Video';
import Meditation from './pages/Meditation';
import PlaylistDetail from './pages/PlaylistDetail'
import Profile from './pages/ProfilPage';
import Reminder from './pages/Reminder'
import ProtectedRoute from './components/ProtectedRoute';

import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<AccessPage mode='signUp'/>}/>
        <Route path='/login' element={<AccessPage mode='logIn'/>}/>
        <Route element={<ProtectedRoute />}>
          <Route path='/yoga' element={<Yoga />} />
          <Route path='/meditation' element={<Meditation />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/video/:id' element={<Video />} />
          <Route path='/music' element={<PlaylistDetail />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/reminder' element={<Reminder />} />
        </Route>
      </Routes >
    </>
  )
}

export default App;
