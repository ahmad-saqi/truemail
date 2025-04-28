import Hero from "../components/landing/hero"
import Navbar from "../components/landing/landing-navbar"
import Solutions from "../components/landing/solutions"   
import Pricing from "../components/landing/pricing"
import Included from "@/components/landing/included"
import TestEmail from "@/components/landing/test-email"
import Guarantees from "@/components/landing/guarantees"
const landing = () => {
  return (
    <div className="bg-gray-100">
      <Navbar/>
      <Hero/>
      <Solutions/>
      <Pricing/>
      <Included/>
      <TestEmail/>
      <Guarantees/>
      
    </div>
  )
}

export default landing