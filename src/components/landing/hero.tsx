import Aerow from "../../assets/img/aerow.svg";
import HeroImg from "../../assets/img/hero.svg";

const hero = () => {
  return (
    <div className="mt-20 grid h-full min-h-screen w-full grid-cols-1 bg-[#0F162E] py-8 md:grid-cols-2 lg:px-10">
      <div className="items center flex flex-col justify-center gap-8 px-4 lg:px-10">
        <h1 className="font-faktum text-3xl font-bold text-white md:text-6xl">
          The most accurate email verification tool
        </h1>
        <p className="text-sx text-gray-300 lg:text-xl">
          Improve deliverability, stop list decay, and remove bounces by
          verifying your emails. Simply upload a list, and export.
        </p>
        <div className="flex gap-2">
          <div className="flex flex-col gap-4">
            <button className="w-fit rounded-full bg-primary px-6 py-3 text-xs font-light text-white lg:px-6">
              Get Started Free
            </button>
            <p className="text-xs text-white">Includes 250 free credits</p>
          </div>
          <div>
            <img src={Aerow} alt="" />
            <div className="-rotate-12 pl-12 pt-2">
              <p className="text-center font-gochi text-[16px] leading-[16px] text-white">
                No credit <br />
                card required!
              </p>
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
