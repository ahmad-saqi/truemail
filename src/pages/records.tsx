import { Search } from "lucide-react";

import Navbar from "@/components/navbar";
import RecordList from "@/components/past-records/record-list";

import GridInactive from "../assets/img/gridinactive.svg";
import ListActive from "../assets/img/listactive.svg";

const Records = () => {
  return (
    <div className="h-full w-full ">
      <Navbar />
      <div className="flex  w-full flex-col items-center justify-start gap-5 bg-gray-100 py-10 px-16 ">
        <h1 className="text-5xl font-bold mt-24">Past Records</h1>
        <div className="grid w-full grid-cols-3 gap-5">
          <div className="col-span-1"></div>
          <div className="relative col-span-1 w-full">
            <input
              type="text"
              placeholder="Search by file name "
              className="w-full rounded-full bg-white py-4 pl-12 shadow-md"
            />
            <Search className="absolute left-4 top-4 text-gray-500" />
          </div>
          <div className="col-span-1 flex items-center justify-end gap-5">
            <img src={ListActive} alt="List View" className="size-8" />
            <img src={GridInactive} alt="Grid View" className="size-8" />
            <select className="rounded-lg border border-primary bg-white px-4 py-2 font-semibold text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="single">Single Email</option>
              <option value="bulk">Bulk Email</option>
            </select>
          </div>
        </div>
        <RecordList />
      </div>
    </div>
  );
};

export default Records;
