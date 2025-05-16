import star from "../assets/img/star.svg";
import woman from "../assets/img/women.svg";

const Imagecomp = () => {
  return (
    <div className="rounded-4xl border-2 rounded-3xl border-white/50 bg-white/25 pl-10 pr-6 pt-6 backdrop-blur-md h-full w-full">
      <div className="relative flex gap-4">
        <p className="w-[60%] text-2xl font-bold text-white lg:text-4xl xl:text-4xl">
          Very good works are waiting for you Login Now!!!
        </p>
        <img src={woman} alt="" className=" -right-24 top-[50px] bottom-0" />
      </div>
      <div className="absolute -left-[11%] top-[70%] rounded-full bg-white p-6">
        <img src={star} alt="shine" className="aspect-square w-12"/>
      </div>
    </div>
  );
};

export default Imagecomp;
