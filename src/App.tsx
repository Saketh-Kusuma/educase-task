import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './Layout'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'
import AccountSettings from './pages/AccountSettings'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/create-account" element={<CreateAccount/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/account-settings" element={<AccountSettings/>} />
        </Route>
       
      </Routes>
    </>
  )
}

export default App
