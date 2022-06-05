import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import UpdateInventory from './Pages/UpdateInventory/UpdateInventory';
import Footer from './Utilities/Footer/Footer';
import Header from './Utilities/Header/Header';

function App() {
  return (
    <div className="App relative">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/inventory/:id' element={<UpdateInventory />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
