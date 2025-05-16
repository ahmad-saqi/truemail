import { useState } from "react";

import { BadgeCheck } from "lucide-react";

import Navbar from "@/components/navbar";

const emailData = [
  {
    email: "robbie.hausman@carma.com.au",
    reason: "Accepted Email",
    score: 100,
    status: "DELIVERABLE",
    color: "#3ED299",
  },
  {
    email: "maria.johnson@example.com",
    reason: "Low Deliverability",
    score: 60,
    status: "RISKY",
    color: "#FECB60",
  },
  {
    email: "invalid.user@example.com",
    reason: "Email Not Found",
    score: 0,
    status: "UNDELIVERABLE",
    color: "#F87171",
  },
  {
    email: "unknown.user@example.com",
    reason: "No Response",
    score: 50,
    status: "UNKNOWN",
    color: "#A0AEC0",
  },
  ...Array.from({ length: 16 }).map((_, i) => {
    const types = [
      {
        status: "DELIVERABLE",
        reason: "Accepted Email",
        score: 100,
        color: "#3ED299",
      },
      {
        status: "RISKY",
        reason: "Low Deliverability",
        score: 60,
        color: "#FECB60",
      },
      {
        status: "UNDELIVERABLE",
        reason: "Email Not Found",
        score: 0,
        color: "#F87171",
      },
      {
        status: "UNKNOWN",
        reason: "No Response",
        score: 50,
        color: "#A0AEC0",
      },
    ];
    const item = types[i % 4];
    return {
      email: `user${i + 1}@example.com`,
      ...item,
    };
  }),
];

const statusFilters = [
  "All",
  "DELIVERABLE",
  "UNDELIVERABLE",
  "RISKY",
  "UNKNOWN",
];

const ViewEmails = () => {
  const [activeStatus, setActiveStatus] = useState("All");

  const filteredData =
    activeStatus === "All"
      ? emailData
      : emailData.filter((item) => item.status === activeStatus);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-20">
        {/* Header Info */}
        <div className="mt-20 h-full w-full space-y-12 rounded-t-xl bg-white pb-5 p-12">
          <div className="grid grid-cols-3">
            <div>
              <p>Name</p>
              <p className="font-bold">Email</p>
            </div>
            <div>
              <p>Email</p>
              <p className="font-bold">09</p>
            </div>
            <div>
              <p>Uploaded</p>
              <p className="font-bold">5/12/2025</p>
            </div>
          </div>

          <div className="h-[2px] w-full bg-gray-300" />

          {/* Filter Buttons */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Emails</h1>
            <div className="flex gap-4">
              {statusFilters.map((status) => (
                <button
                  key={status}
                  className={`rounded-md border px-3 py-1 text-sm ${
                    activeStatus === status
                      ? "border-blue-500 text-blue-500"
                      : "border-transparent text-gray-500"
                  }`}
                  onClick={() => setActiveStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className=" h-full w-full rounded-b-xl bg-white px-10 pb-20 ">
          <table className="w-full table-auto border-collapse px-10 ">
            <thead className="px-10">
              <tr className="border-b border-gray-200 text-left bg-gray-100 ">
                <th className="p-3 text-lg font-bold text-gray-700">Email</th>
                <th className="p-3 text-lg font-bold text-gray-700">Reason</th>
                <th className="p-3 text-lg font-bold text-gray-700">Score</th>
                <th className="p-3 text-lg font-bold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-100 hover:bg-gray-50 px-10"
                >
                  <td className="p-3 text-xs text-gray-500">{item.email}</td>
                  <td className="p-3">
                    <span className="rounded-lg bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      {item.reason}
                    </span>
                  </td>
                  <td className="p-3 ">
                    <div
                      className="rounded-lg w-12 text-center px-3 py-1 text-xs text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.score}
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <BadgeCheck
                        fill={item.color}
                        className="size-5 text-white"
                      />
                      {item.status.charAt(0) +
                        item.status.slice(1).toLowerCase()}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewEmails;
