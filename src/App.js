import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Utilities/Footer/Footer';
import Header from './Utilities/Header/Header';

function App() {
  return (
    <div className="App vh-100 relative">
      <Header />

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/' element={<Home></Home>} />
        <Route path='/*' element={<NotFound></NotFound>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
