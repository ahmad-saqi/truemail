import Faqs from "@/components/landing/faqs";
import Footer from "@/components/landing/footer";
import Guarantees from "@/components/landing/guarantees";
import Included from "@/components/landing/included";
import Services from "@/components/landing/services";
import TestEmail from "@/components/landing/test-email";
import Testimonials from "@/components/landing/testimonials";

import Hero from "../components/landing/hero";
import Navbar from "../components/landing/landing-navbar";
import Pricing from "../components/landing/pricing";
import Solutions from "../components/landing/solutions";

const landing = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <Solutions />
      <Pricing />
      <Included />
      <TestEmail />
      <Guarantees />
      <Services />
      <Faqs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default landing;
