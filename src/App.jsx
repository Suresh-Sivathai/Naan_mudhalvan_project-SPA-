import './App.css'
import Premiumcoll from './Branded coll/Brand-coll'
import Foot from './Footer/footer'
import Banner from './Head-Section/Hero-Sec'
import Login from './Login-Sec/Login'
import Navbar from './Nav-Section/Navbar'
import Sponsers from './Products/Product'
import Services from './Service&Discount/Service&Offers'

function App() {
  return <>
    <Navbar />
    <Banner />
    <Login/>
    <Premiumcoll/>
    <Services/>
    <Sponsers/>
    <Foot/>
    <body class="bg-purple-300" />
  </>
}

export default App
