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
import 'material-icons/iconfont/material-icons.css';
import UpdateProductQuantity from './Pages/UpdateProductQuantity/UpdateProductQuantity';
import 'react-toastify/dist/ReactToastify.css';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddProduct from './Pages/AddProduct/AddProduct';
import Signup from './Pages/Signup/Signup';
import EmailVerification from './Pages/EmailVerification/EmailVerification';
import RequireAuth from './Utilities/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App relative">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path='/add' element={
          <RequireAuth>
            <AddProduct />
          </RequireAuth>
        } />
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } />
        <Route path='/update/:id' element={
          <RequireAuth>
            <UpdateInventory />
          </RequireAuth>
        } />
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <UpdateProductQuantity />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/verifyemail' element={
          <EmailVerification />
        } />
        <Route path='/*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
