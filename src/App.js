import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/home';
import Catering from './components/catering';
import Flower from './components/flower';
import Makeup from './components/makeup';
import Photo from './components/photo';
import Cake from './components/cake';
import Bridal from './components/bridal';
import Fancy from './components/fancy';
import Fashion from './components/fashion';
import Rings from './components/rings';
import Bar from './components/bar';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/makeup' element={<Makeup/>}></Route>
        <Route path='/photo' element={<Photo/>}></Route>
        <Route path='/cake' element={<Cake/>}></Route>
        <Route path='/bridal' element={<Bridal/>}></Route>
        <Route path='/fancy' element={<Fancy/>}></Route>
        <Route path='/fashion' element={<Fashion/>}></Route>
        <Route path='/rings' element={<Rings/>}></Route>
        <Route path='/cake' element={<Cake/>}></Route>
        <Route path='/catering' element={<Catering/>}></Route>
        <Route path='/flower' element={<Flower/>}></Route>
        <Route path='/bar' element={<Bar/>}></Route>
        
      </Routes>
      

      </div>


);

}


export default App;
