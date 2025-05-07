import success from "../assets/images/success.png";

const SuccessModal = () => {
  return (
    <div className="bg-black/60 h-screen flex justify-center items-center absolute inset-0">
      <div className="bg-white rounded-4xl w-[30%] h-[40%] flex flex-col items-center justify-center">
        <div className="bg-[#3D6BD8] rounded-full p-5">
          <img src={success} alt="" />
        </div>
        <p className="text-3xl mt-5 font-bold">Subscribed Successfully</p>
        <p className="text-gray-400 mt-5"><span className="text-[#3D6BD8] font-medium">5000 Credit</span> added to your account</p>
        <p className="text-gray-400">you can start Validation Now!</p>
        <button className="bg-[#3D6BD8] text-white rounded-full px-9 py-3 mt-5">OK</button>
      </div>
    </div>
  );
};

export default SuccessModal;
