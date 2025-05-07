import { RxCross2 } from "react-icons/rx";

const EmailForm = () => {
  return (
    <div className="w-1/2 mx-auto bg-gray-200 mt-25 border-2 mb-10 border-gray-200 rounded-4xl p-5 hover:shadow-2xl transition-shadow duration-500">
      <div className=" flex justify-end items-end">
        <div className="justify-end items-end flex bg-black rounded-full text-white p-1">
          <RxCross2 />
        </div>
      </div>
      <div className="p-5">
        <div className="flex gap-5 items-center w-full">
          <div className="bg-[#7F61FF] rounded-full text-amber-50 text-2xl font-bold">
            <p className="px-8 py-5">R</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-2xl font-semibold">Rehan</p>
              <p className="text-sm">RehanSiddique@gmail.com</p>
            </div>
            <div className="bg-green-500 rounded-xl px-4 py-2 text-amber-50 text-2xl font-bold">
              <p>100</p>
            </div>
          </div>
        </div>
        <div className="w-full  py-6 px-4 mt-5">
          <div className="relative h-4 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 transform">
              <div className="w-6 h-6 rounded-full border-4 border-white bg-red-500"></div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-1/4 transform">
              <div className="w-6 h-6 rounded-full border-4 border-white bg-orange-400"></div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 transform">
              <div className="w-6 h-6 rounded-full border-4 border-white bg-yellow-400"></div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-3/4 transform">
              <div className="w-6 h-6 rounded-full border-4 border-white bg-lime-400"></div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 transform">
              <div className="w-6 h-6 rounded-full border-4 border-white bg-green-500"></div>
            </div>
          </div>
        </div>

        <p className="font-bold text-2xl mt-5">General</p>
        <div className="grid grid-cols-2 gap-10">
          <div className="mt-5">
            <div className="grid grid-cols-2 mr-15">
              <div className=" space-y-4 text-[#5C6584]">
                <p>Full Name</p>
                <p>Status</p>
                <p>Domain</p>
              </div>
              <div className=" font-bold space-y-4 ">
                <p>Salman</p>
                <p>Active</p>
                <p>SlamanBhaigmail.com</p>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <div className="grid grid-cols-2 mr-15">
              <div className="space-y-4 text-[#5C6584]">
                <p>Gender</p>
                <p>Reason</p>
              </div>
              <div className="font-bold space-y-4 ml-2">
                <p>Male</p>
                <p>Accepted Email</p>
              </div>
            </div>
          </div>
        </div>

        <p className="font-bold text-2xl mt-8">Details</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className=" space-y-4 text-[#5C6584]">
                <p>Free</p>
                <p>Disposable</p>
                <p>Tag</p>
                <p>Alphabetical Characters</p>
                <p>Mailbox Full</p>
              </div>
              <div className=" font-bold space-y-4 ml-2">
                <p>NO</p>
                <p>NO</p>
                <p>NO</p>
                <p>6</p>
                <p>NO</p>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 text-[#5C6584]">
                <p>Role</p>
                <p>Accept All</p>
                <p>Numerical Characters</p>
                <p>Unicode Symbols</p>
                <p>No Reply</p>
              </div>
              <div className="font-bold space-y-4 ml-2">
                <p>NO</p>
                <p>NO</p>
                <p>0</p>
                <p>0</p>
                <p>NO</p>
              </div>
            </div>
          </div>
        </div>

        <p className="font-bold text-2xl mt-8">Mail Server Info</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className=" space-y-4 text-[#5C6584]">
                <p>SMTP Provider</p>
                <p>Implicit MX Record</p>
              </div>
              <div className=" font-bold space-y-4 ml-2">
                <p>-</p>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 text-[#5C6584]">
                <p>MX Record</p>
              </div>
              <div className="font-bold space-y-4 ml-2">
                <p>mx1.titan.email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
