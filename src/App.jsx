import './App.css'
import {Home, Store, Contact, About, Account} from './components/pages/index'
import {Routes, Route} from 'react-router-dom';
import { Navbar } from './components/layouts/Navbar.jsx';


function App() {
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/account' element={<Account/>}/>
    </Routes>
    </>
  )
}

export default App
