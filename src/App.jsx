
import './App.css'
import ConsultationForm from './components/ConsultationForm'
import Footer from './components/Footer'
import Img from './components/Img'
import LawCategories from './components/LawCategories'
import LawCategories1 from './components/LawCategories1'
import MainComponent from './components/MainComponent'
import New2 from './components/New2'
import Newi from "./components/Newi"
import New3 from './components/New3'
import MilkShake from './components/milkshake'

function App() {

  return (
    <>
      
      <MainComponent />
      <LawCategories />
      <b>
        <h1 className='text-white text-center text-3xl'>Icecream</h1>
      </b>     
      <Img />
     <b> <h1 className='text-white text-center text-3xl'>MilkShake</h1></b>

      <MilkShake/>
      <b> <h1 className='text-white text-center text-3xl'>MilkShake</h1></b>

      <Img />
      
      <b> <h1 className='text-white text-center text-3xl'>MilkShake</h1></b>

<MilkShake/>
<b> <h1 className='text-white text-center text-3xl'>MilkShake</h1></b>

<Img/>

      {/* <LawCategories1 /> */}
      {/* <ConsultationForm /> */}
      <Footer />
      <h1 className='text-5xl text-center mb-6 text-white  '>Order Now For Free Delivery🚚 Above 5 Products </h1>
      
      {/* <Newi />
      <New2/>
      <New3/> */}
   </>
  )
}

export default App
