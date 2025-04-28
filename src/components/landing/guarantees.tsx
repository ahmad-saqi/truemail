import G1 from "../../assets/img/g1.svg";
import G2 from "../../assets/img/g2.svg";
import G3 from "../../assets/img/g3.svg";
import G4 from "../../assets/img/g4.svg";

const Guarantees = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 px-20 py-20">
      <h1 className="text-2xl font-bold">Our Guarantees</h1>
      <p className="text-gray-500">
        We are committed to providing the fastest and most accurate email
        verification tool
      </p>
      <div className="flex w-full items-center justify-between px gap-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={G1} alt="" className="size-10" />
          <h1 className="text-2xl font-bold">99%</h1>
          <h2 className="text-sm font-semibold">Deliverability Guarantee</h2>
          <p className="text-xs text-gray-500 text-center">
            We guarantee that no more than 1% of emails verified as.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={G2} alt="" className="size-10" />
          <h1 className="text-2xl font-bold">30K+</h1>
          <h2 className="text-sm font-semibold">Emails Verified Per Min</h2>
          <p className="text-xs text-gray-500 text-center">
            We verify emails over 8x faster than the competition.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={G2} alt="" className="size-10" />
          <h1 className="text-2xl font-bold">99.99%</h1>
          <h2 className="text-sm font-semibold">Platform Uptime</h2>
          <p className="text-xs text-gray-500 text-center">
            Our secure and robust global infrastructure provides.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={G4} alt="" className="size-10" />
          <h1 className="text-2xl font-bold">24/7</h1>
          <h2 className="text-sm font-semibold">Customer Support</h2>
          <p className="text-xs text-gray-500 text-center">
            Our team of experts are located around the globe & are available.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guarantees;
