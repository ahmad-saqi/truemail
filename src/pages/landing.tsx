import Hero from "../components/landing/hero"
import Navbar from "../components/landing/landing-navbar"
import Solutions from "../components/landing/solutions"   
const landing = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Solutions/>
      
    </div>
  )
}

export default landing