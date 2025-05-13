import Navbar from "@/components/navbar";

const HelpPage = () => {
  return (
    <div className="bg-[#F5F6F8CC]">
      <Navbar />
      <div className="flex h-screen w-full items-center justify-center bg-[#F5F6F8CC] p-20 pt-20">
        <div className="w-full rounded-xl bg-red-300 p-10">
          <p className="text-3xl font-bold text-center">How can we help you?</p>
          <fieldset className="mt-5 flex border-t border-gray-300 text-center"></fieldset>
          <div className="flex justify-between mt-5">
            <div>
              <p className="text-3xl font-semibold">Frequently Read Articles </p>
            </div>
            <div className="w-[30%]">
              <input
                type="search"
                placeholder="Search our help center... "
                className="flex h-full w-full items-start justify-start rounded-full bg-white px-10 py-5 shadow-md focus-visible:outline-none"
              />
            </div>
          </div>
           <div className="grid grid-cols-2 gap-16 mt-10">
            <div className="w-full">
              <div className="flex w-full rounded-full bg-gray-100 p-3">
                <select name="" id="" className="w-full outline-none bg-gray-100 " >
                  <option value="" disabled selected >
                   Understanding Apple Private Email Relay Service ad- dresses (@privaterelay.appleid.com)
                  </option>
                  <option value="1">Pakistan</option>
                  <option value="1">Pakistan</option>
                  <option value="1">Pakistan</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full rounded-full bg-gray-100 p-3">
                <select name="" id="" className="w-full outline-none bg-gray-100">
                  <option value="" disabled selected>
                    Choose...
                  </option>
                  <option value="1">Active</option>
                  <option value="2">InActive</option>
                </select>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
