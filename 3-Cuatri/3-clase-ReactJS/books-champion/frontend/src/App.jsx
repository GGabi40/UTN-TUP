import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router';

import Login from './components/auth/login/Login'
import Dashboard from './components/auth/Dashboard';
import NotFound from './components/notFound/NotFound';
import Protected from './components/protected/Protected';

function App() {
  

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/dashboard" element={ 
            <Protected>
              <Dashboard />
            </Protected>
          } />
          <Route path='*' element={ <NotFound />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
    </>
  )
}

export default App
