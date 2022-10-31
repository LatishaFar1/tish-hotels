import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Hotels from './components/Hotels';
import HotelDetails from './components/HotelDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hotels' element={<Hotels/>} />
          <Route path='/hotels/:id' element={ <HotelDetails/>  } />
        </Routes>
      
      </Router>
    </div>  
  );
}

export default App;
