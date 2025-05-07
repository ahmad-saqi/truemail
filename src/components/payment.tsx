import HBL from "../assets/images/hbl.png";
import cardtick from "../assets/images/card-tick.svg";
import visa from "../assets/images/visa.png";
import strpe from "../assets/images/stipe.png";

const Payment = () => {
  return (
    <div className="flex pt-20 h-full gap-5 w-full">
        <div className="flex flex-col gap-3 w-full mb-10">
            <div className="bg-white rounded-2xl py-5 px-10 h-full">
              <p className="text-2xl font-semibold">Billing address</p>
              <p className="text-sm text-gray-400 ">
                Please make sure your billing address matches the one your bank
                has on file.
              </p>
              <div className="grid grid-cols-2 gap-16 mt-">
                <div className="w-full">
                  <p className="mt-3 text-lg font-semibold mb-2">Full Name</p>
                  <input
                    type="text"
                    className="bg-gray-100 p-3 rounded-full w-full outline-none"
                    placeholder="Enter you'r name"
                  />
                </div>
                <div className="w-full">
                  <p className="mt-3 text-lg font-semibold mb-2">Last name</p>
                  <input
                    type="text"
                    className="bg-gray-100 p-3 rounded-full w-full outline-none"
                    placeholder="Enter you'r Last name"
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="mt-3 text-lg font-semibold mb-2">Address</p>
                <input
                  type="text"
                  className="bg-gray-100 p-3 rounded-full w-full outline-none"
                  placeholder="Enter you'r Address"
                />
              </div>
              <div className="w-full">
                <p className="mt-3 text-lg font-semibold mb-2">City</p>
                <input
                  type="text"
                  className="bg-gray-100 p-3 rounded-full w-full outline-none"
                  placeholder="Enter you'r City name"
                />
              </div>
              <div className="grid grid-cols-3 gap-16 ">
                <div className="w-full">
                  <p className="mt-3 text-lg font-semibold mb-2">Country</p>
                  <div className="flex bg-gray-100 p-3 rounded-full w-full ">
                    <select name="" id="" className="outline-none w-2/2">
                      <option value="" disabled selected>
                        Choose...
                      </option>
                      <option value="1">Pakistan</option>
                      <option value="1">Pakistan</option>
                      <option value="1">Pakistan</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <p className="mt-3 text-lg font-semibold mb-2">Status</p>
                  <div className="flex bg-gray-100 p-3 rounded-full w-full">
                    <select name="" id="" className="outline-none w-full">
                      <option value="" disabled selected>
                        Choose...
                      </option>
                      <option value="1">Active</option>
                      <option value="2">InActive</option>
                    </select>
                  </div>
                </div>

                <div className="w-full">
                  <p className="mt-3 text-lg font-semibold mb-2">Zip</p>
                  <input
                    type="text"
                    className="bg-gray-100 p-3 rounded-full w-full outline-none"
                    placeholder="Enter you'r Zip Code"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl py-5 px-10">
              <p className="text-2xl font-semibold">Payment</p>
              <div className="grid grid-cols-2 gap-16">
                <div className="w-full">
                  <div className="flex gap-2 mt-3 mb-2 justify-start items-center">
                    <p className=" text-lg font-semibold ">Name on card</p>
                    <p className=" text-[12px] text-gray-400">
                      Full name as displayed on card
                    </p>
                  </div>
                  <input
                    type="text"
                    className="bg-gray-100 p-3 rounded-full w-full outline-none"
                    placeholder="Rehan Siddique"
                  />
                </div>
                <div className="w-full">
                  <p className="mt-3 text-lg font-semibold mb-2">
                    {" "}
                    Credit card number{" "}
                  </p>
                  <div className="bg-gray-100 p-3 rounded-full w-full flex justify-between items-center">
                    <input
                      type="text"
                      className="outline-none"
                      placeholder="1234 1234 1234 1234"
                    />
                    <div className="flex gap-2">
                      <img src={visa} alt="" />
                      <img src={strpe} alt="" />
                      <img src={HBL} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-16 mt-3 w-[60%]">
                <div className="w-full">
                  <p className=" text-lg font-semibold mb-2">Expiration</p>
                  <input
                    type="text"
                    className="bg-gray-100 p-3 rounded-full w-full outline-none"
                    placeholder="10/25"
                  />
                </div>
                <div className="w-full">
                  <p className=" text-lg font-semibold mb-2">
                    
                    Credit card number
                  </p>
                  <div className="bg-gray-100 p-3 rounded-full w-full flex justify-between items-center focus:border focus:border-gray-500">
                    <input
                      type="text"
                      className="outline-none"
                      placeholder="1234 1234 1234 1234"
                    />
                    <img src={cardtick} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end ">
                <button className="bg-gray-300 hover:bg-white border border-gray-300 hover:border-gray-500 hover:text-black cursor-pointer  rounded-full px-5 py-2 text-gray">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 w-[30%] flex flex-col justify-between mb-10">
            <div>
              <p>Number of Credits</p>
              <p className="text-4xl mb-5 font-bold">5,000</p>
              <p className="text-black text-xl font-semibold">$0.0076</p>
              <p className="text-gray-500">Cost Per Credit</p>
              <p className="mt-6">Price shown in USD</p>
            </div>
            <div >
              <div className="flex justify-between">
                <p>5,000 credits</p>
                <p>$38</p>
              </div>
              <fieldset className="w-full h-0.5 bg-[#648BE6] rounded-full mt-2"></fieldset>
              <div className="flex justify-between mt-2">
                <p>Tolal</p>
                <p className="font-bold">$38</p>
              </div>
              <div className="mt-5 w-full">
              <button className="bg-[#0F162E] hover:bg-white hover:text-black hover:border border cursor-pointer rounded-full px-5 py-4 text-white w-full">Confirm Checkout</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Payment