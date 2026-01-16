import React from 'react'
import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.jsx'
// import Calllog from './pages/Calllog.jsx'

const Login = React.lazy(() => import("./pages/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Leads= React.lazy(()=>import("./pages/Leads"))
const Callog =React.lazy(()=>import("./pages/Calllog.jsx"))

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <ProtectedRoute> */}
        <Suspense fallback={<h3>Loading....</h3>}>
          <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            {/* <Route path='/  ' element={<Login></Login>}></Route> */}
            <Route path='/dashboard' element={<ProtectedRoute><div><Dashboard></Dashboard></div></ProtectedRoute>}></Route>
            <Route path='/leads' element={<ProtectedRoute><div><Leads></Leads></div></ProtectedRoute>}></Route>
            <Route path='/calls' element={<ProtectedRoute><div><Callog></Callog></div></ProtectedRoute>}></Route>
            <Route path='/setting' element={<ProtectedRoute role="Admin"><div><Dashboard></Dashboard></div></ProtectedRoute>}></Route>
          </Routes>
          </Suspense>
        {/* </ProtectedRoute> */}
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
