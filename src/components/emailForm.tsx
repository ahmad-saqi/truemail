import { RxCross2 } from "react-icons/rx";

const EmailForm = () => {
  return (
    <div className="mt-25 rounded-4xl mx-auto mb-10 w-1/2 border-2 border-gray-200 bg-gray-200 p-5 transition-shadow duration-500 hover:shadow-2xl">
      <div className="flex items-end justify-end">
        <div className="flex items-end justify-end rounded-full bg-black p-1 text-white">
          <RxCross2 />
        </div>
      </div>
      <div className="p-5">
        <div className="flex w-full items-center gap-5">
          <div className="rounded-full bg-[#7F61FF] text-2xl font-bold text-amber-50">
            <p className="px-8 py-5">R</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <p className="text-2xl font-semibold">Rehan</p>
              <p className="text-sm">RehanSiddique@gmail.com</p>
            </div>
            <div className="rounded-xl bg-green-500 px-4 py-2 text-2xl font-bold text-amber-50">
              <p>100</p>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full px-4 py-6">
          <div className="relative h-4 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
              <div className="h-6 w-6 rounded-full border-4 border-white bg-red-500"></div>
            </div>
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 transform">
              <div className="h-6 w-6 rounded-full border-4 border-white bg-orange-400"></div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 transform">
              <div className="h-6 w-6 rounded-full border-4 border-white bg-yellow-400"></div>
            </div>
            <div className="absolute left-3/4 top-1/2 -translate-y-1/2 transform">
              <div className="h-6 w-6 rounded-full border-4 border-white bg-lime-400"></div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
              <div className="h-6 w-6 rounded-full border-4 border-white bg-green-500"></div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-2xl font-bold">General</p>
        <div className="grid grid-cols-2 gap-10">
          <div className="mt-5">
            <div className="mr-15 grid grid-cols-2">
              <div className="space-y-4 text-[#5C6584]">
                <p>Full Name</p>
                <p>Status</p>
                <p>Domain</p>
              </div>
              <div className="space-y-4 font-bold">
                <p>Salman</p>
                <p>Active</p>
                <p>SlamanBhaigmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mr-15 grid grid-cols-2">
              <div className="space-y-4 text-[#5C6584]">
                <p>Gender</p>
                <p>Reason</p>
              </div>
              <div className="ml-2 space-y-4 font-bold">
                <p>Male</p>
                <p>Accepted Email</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-2xl font-bold">Details</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 text-[#5C6584]">
                <p>Free</p>
                <p>Disposable</p>
                <p>Tag</p>
                <p>Alphabetical Characters</p>
                <p>Mailbox Full</p>
              </div>
              <div className="ml-2 space-y-4 font-bold">
                <p>NO</p>
                <p>NO</p>
                <p>NO</p>
                <p>6</p>
                <p>NO</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 text-[#5C6584]">
                <p>Role</p>
                <p>Accept All</p>
                <p>Numerical Characters</p>
                <p>Unicode Symbols</p>
                <p>No Reply</p>
              </div>
              <div className="ml-2 space-y-4 font-bold">
                <p>NO</p>
                <p>NO</p>
                <p>0</p>
                <p>0</p>
                <p>NO</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-2xl font-bold">Mail Server Info</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 text-[#5C6584]">
                <p>SMTP Provider</p>
                <p>Implicit MX Record</p>
              </div>
              <div className="ml-2 space-y-4 font-bold">
                <p>-</p>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 text-[#5C6584]">
                <p>MX Record</p>
              </div>
              <div className="ml-2 space-y-4 font-bold">
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
