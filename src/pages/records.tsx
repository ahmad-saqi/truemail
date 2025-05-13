import { Search } from "lucide-react";

import GridInactive from "../assets/img/gridinactive.svg";
import ListActive from "../assets/img/listactive.svg";
import RecordList from "@/components/past-records/record-list";

const Records = () => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-start gap-5 bg-gray-100 p-16">
      <h1 className="text-5xl font-bold">Past Records</h1>
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
          <select className="rounded-lg border border-primary bg-white px-4 py-2 shadow-sm focus:outline-none text-primary font-semibold focus:ring-2 focus:ring-blue-500">
            <option value="single">Single Email</option>
            <option value="bulk">Bulk Email</option>
          </select>
        </div>
      </div>
      <RecordList />
    </div>
  );
};

export default Records;
