import './App.css';
import Inicial from './Home'
import Contato from './FormularioContato';
import Texto from './QuemSomos';
import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

  function App() {
    return (
     <div className="App">
      <Navbar />
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Inicial />} />
     <Route path='/quem_somos' element={<Texto />} />
     </Routes>
     </BrowserRouter>
     <Footer />
     </div> 
    );
  }

export default App;
