import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './pages/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import SingleVideoPage from './pages/videoSingle';
import ProfilePage from './pages/profile';
import Cookies from 'js-cookie';
import { useAuth } from './hooks/Auth';
import { RequireAuth } from './shared/requireAuth';
import RegisterPage from './pages/signup';

function App() {

  const user = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
          {/* <RequireAuth> */}
          <Route path="/" element={<Homepage/>}/>
          <Route path="/video/:id" element={<SingleVideoPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* </RequireAuth> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
