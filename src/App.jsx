
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import SearchCars from './screens/SearchCars';
import DetailCar from './screens/DetailCar';
import AddCar from './screens/AddCar';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <>
      <Navbar />
      <div className='bg-white-200 flex-grow flex'>
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/search' element={<SearchCars />} />
          <Route exact path='/cars/:id' element={<DetailCar />} />
          <Route exact path='/add-car' element={<AddCar />} />
          <Route exact path='/user/:id' element={<ProfileScreen />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
