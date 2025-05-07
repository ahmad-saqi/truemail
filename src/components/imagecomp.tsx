import image from "../assets/images/women with tab 1.png";
import star from "../assets/images/thunderbolt 1.png";

const Imagecomp = () => {
  return (
    <div className="bg-white/25 backdrop-blur-md rounded-4xl pl-10 pr-6 pt-6 md:w-[50%] md:h-[60.5%]   xl:w-[70%] xl:h-[78.5%] border-2 border-white/50 rel hidden lg:block">
      <div className="flex gap-4 relative">
        <p className="text-white lg:text-6xl text-2xl font-bold  w-[60%]">
          Very good works are waiting for you Login Now!!!
        </p>
        <img src={image} alt="" className="absolute -right-28 top-0" />
      </div>
      <div className="p-6 bg-white rounded-full absolute top-[70%] -left-[7%]">
        <img src={star} alt="shine" className="aspect-square w-12" />
      </div>
    </div>
  );
};

export default Imagecomp;
