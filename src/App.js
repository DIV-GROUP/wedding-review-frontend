import Header from "./components/Header"
import Main from './components/Main'
import Vendors from './components/Vendors'
import Subscribe from "./components/Subscribe";
import Destinations from "./components/Destinations";
import Review from "./components/Review"
import Videos from './components/Videos'



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Vendors/>
      <Subscribe/>
      <Destinations/>
      <Review/>
      <Videos/>
    </div>
  )
}

export default App;
