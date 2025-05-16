import { useState } from "react";



import { ChevronLeft, ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";



import Image from "../../assets/img/g1.svg";





const recordsPerPage = 7;

const initialRecords = Array.from({ length: 25 }, (_, i) => ({
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
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(records.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentRecords = records.slice(startIndex, endIndex);

  const startItem = startIndex + 1;
  const endItem = Math.min(endIndex, records.length);
  const totalItems = records.length;

  const navigate = useNavigate();

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
    if (e.key === "Enter") handleSave();
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`rounded-xl px-4 py-2 text-sm font-semibold ${
            i === currentPage ? "bg-primary text-white" : "hover:bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="w-full overflow-x-auto   h-[calc(100dvh-325px)]">
     <div className=" h-[calc(100dvh-380px)]">
       <table className="w-full min-w-[768px] table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4">File Name</th>
            <th className="p-4 text-center">Deliverable</th>
            <th className="p-4 text-center">Total Emails</th>
            <th className="p-4 text-center">Status</th>
            <th className="flex justify-end p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((record) => (
            <tr
              key={record.id}
              className=" border-b-[10px]  border-gray-100 bg-white hover:bg-gray-50"
            >
              <td className="w-1/4 px-4 py-2">
                <div className="flex items-center gap-2 truncate">
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
              <td className="px-4 py-2 text-center">
                <p className="font-semibold">
                  {record.deliverable} <br />
                  <span className="text-sm font-normal">Processing</span>
                </p>
              </td>
              <td className="px-4 py-2 text-center font-semibold">
                {record.totalEmails.toLocaleString()}
              </td>
              <td className="px-4 py-2">
                <div className="w-full rounded-full bg-primary px-4 py-2 text-center text-sm text-white">
                  {record.status}
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center justify-end gap-2">
                  <button className="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-primary"
                    onClick={() => navigate("/overview")}>
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

      {/* Pagination Section */}
      <div className="flex w-full items-center justify-between p-2">
        <span className="text-sm">
          Showing&nbsp;
          <span className="font-semibold">
            {startItem}-{endItem}
          </span>
          &nbsp; from <span className="font-semibold">{totalItems}</span>
          &nbsp; Questions
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-xl border border-gray-300 bg-gray-100 p-2.5 text-primary hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex w-fit gap-1 rounded-xl border border-gray-300 bg-gray-100  text-primary">
            {renderPagination()}
          </div>
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-xl border border-gray-300 bg-gray-100 p-2.5 text-primary hover:bg-primary hover:text-white"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordList;