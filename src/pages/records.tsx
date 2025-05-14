import { useState } from "react";

import { Search } from "lucide-react";

import Navbar from "@/components/navbar";
import RecordGrid from "@/components/past-records/record-grid";
import RecordList from "@/components/past-records/record-list";

import GridActive from "../assets/img/gridactive.svg";
import GridInactive from "../assets/img/gridinactive.svg";
import ListActive from "../assets/img/listactive.svg";
import ListInactive from "../assets/img/listinactive.svg";

const Records = () => {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="flex w-full flex-col items-center justify-start gap-5 bg-gray-100 px-16 py-10">
        <h1 className="mt-24 text-5xl font-bold">Past Records</h1>
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
            <img
              src={view === "list" ? ListActive : ListInactive}
              alt="List View"
              className="size-8 cursor-pointer"
              onClick={() => setView("list")}
            />
            <img
              src={view === "grid" ? GridActive : GridInactive}
              alt="Grid View"
              className="size-8 cursor-pointer"
              onClick={() => setView("grid")}
            />
            <select className="rounded-lg border border-primary bg-white px-4 py-2 font-semibold text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="single">Single Email</option>
              <option value="bulk">Bulk Email</option>
            </select>
          </div>
        </div>

        {view === "list" ? <RecordList /> : <RecordGrid />}
      </div>
    </div>
  );
};

export default Records;
