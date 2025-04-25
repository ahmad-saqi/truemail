import Aerow from "../../assets/img/aerow.svg";
import HeroImg from "../../assets/img/hero.svg";

const hero = () => {
  return (
    <div className="grid h-full min-h-screen w-full grid-cols-1 md:grid-cols-2 bg-[#0F162E] px-10 py-8 mt-20">
      <div className="items center flex flex-col justify-center gap-8 px-10">
        <h1 className="text-3xl md:text-6xl font-bold text-white font-faktum">
          The most accurate email verification tool
        </h1>
        <p className="text-xl text-white">
          Improve deliverability, stop list decay, and remove bounces by
          verifying your emails. Simply upload a list, and export.
        </p>
        <div className="flex">
          <div className="flex flex-col gap-4">
            <button className="w-fit rounded-full bg-primary px-6 py-3 font-light text-white">
              Get Started
            </button>
            <p className="text-white">Includes 250 free credits</p>
          </div>
          <div>
            <img src={Aerow} alt="" />
            <div className="-rotate-12 pl-12">
              <p className="text-white font-gochi">No credit</p>
              <p className="text-white font-gochi">card required!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img src={HeroImg} alt="" className="" />
      </div>
    </div>
  );
};

export default hero;
