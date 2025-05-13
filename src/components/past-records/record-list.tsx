import { useState } from "react";

import { ChevronRight, Trash } from "lucide-react";

import Image from "../../assets/img/g1.svg";

const initialRecords = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Holiday Event ${i + 1}`,
  deliverable: `${Math.floor(Math.random() * 100)}%`,
  totalEmails: Math.floor(Math.random() * 100000),
  status: "Processing",
}));

const RecordList = () => {
  const [records, setRecords] = useState(initialRecords);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState("");

  const handleEditClick = (id: number, name: string) => {
    setEditingId(id);
    setEditedName(name);
  };

  const handleSave = () => {
    setRecords((prev) =>
      prev.map((r) => (r.id === editingId ? { ...r, name: editedName } : r))
    );
    setEditingId(null);
    setEditedName("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[768px] table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4">File Name</th>
            <th className="p-4">Deliverable</th>
            <th className="p-4">Total Emails</th>
            <th className="p-4">Status</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="border-b hover:bg-gray-50">
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <img src={Image} alt="" className="size-6" />
                  {editingId === record.id ? (
                    <>
                      <input
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="rounded border px-2 py-1 text-sm"
                        autoFocus
                      />
                      <button
                        onClick={handleSave}
                        className="rounded bg-primary px-3 py-1 text-sm text-white"
                      >
                        Enter
                      </button>
                    </>
                  ) : (
                    <p
                      onClick={() => handleEditClick(record.id, record.name)}
                      className="cursor-pointer hover:underline"
                    >
                      {record.name}
                    </p>
                  )}
                </div>
              </td>
              <td className="p-4 text-center">
                <p className="font-semibold">
                  {record.deliverable} <br />
                  <span className="text-sm font-normal">Processing</span>
                </p>
              </td>
              <td className="p-4 font-semibold">
                {record.totalEmails.toLocaleString()}
              </td>
              <td className="p-4">
                <span className="rounded-full bg-primary px-4 py-1 text-sm text-white">
                  {record.status}
                </span>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-primary">
                    View <ChevronRight size={16} />
                  </button>
                  <button>
                    <Trash size={18} className="text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordList;
