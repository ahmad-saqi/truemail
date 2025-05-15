import { useState } from "react";



import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";





const generateCards = () =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Holiday Event ${i + 1}`,
    source: i % 2 === 0 ? "Copy & Paste" : "My Computer",
    deliverable: Math.floor(Math.random() * 100),
  }));

const itemsPerPage = 10;

const RecordGrid = () => {
  const [cards, setCards] = useState(generateCards());
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = cards.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + itemsPerPage);
  const startItem = startIndex + 1;
  const endItem = Math.min(startIndex + itemsPerPage, totalItems);

  const handleDelete = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`rounded-xl px-3 py-1.5 text-sm font-medium ${
            currentPage === i
              ? "bg-primary text-white"
              : "text-primary hover:bg-primary/10"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="w-full  h-[calc(100dvh-325px)] ">
      {/* Grid Cards */}
      <div className="grid h-[calc(100dvh-380px)] w-full grid-cols-1 gap-6 overflow-y-auto p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {currentCards.map((card) => (
          <div
            key={card.id}
            className="group relative flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-md "
          >
            {/* Delete button (appears on hover) */}
            <button
              onClick={() => handleDelete(card.id)}
              className="absolute right-2 top-2 hidden rounded-full bg-red-100 p-1 hover:bg-red-200 group-hover:block"
            >
              <Trash2 size={16} className="text-red-500" />
            </button>

            <h3 className="text-lg font-semibold">{card.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{card.source}</p>

            {/* Radial Progress */}
            <div className="relative my-6 h-48 w-48 pl-5">
              <svg className="absolute left-5 top-3 h-full w-full">
                <circle
                  className="text-[#FECB60]"
                  strokeWidth="30"
                  stroke="currentColor"
                  fill="transparent"
                  r="62"
                  cx="80"
                  cy="80"
                />
                <circle
                  className="text-[#3ED299]"
                  strokeWidth="30"
                  strokeDasharray="452.4"
                  strokeDashoffset={452.4 - (card.deliverable / 100) * 452.4}
                  stroke="currentColor"
                  fill="transparent"
                  r="62"
                  cx="80"
                  cy="80"
                />
              </svg>
              <div className="absolute inset-0 -top-4 left-2 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{card.deliverable}%</span>
                <span className="text-sm text-gray-600">Deliverable</span>
              </div>
            </div>

            <button className="flex items-center gap-1 rounded-full bg-primary px-10 py-4 text-sm text-white hover:bg-primary/70"
            onClick={() => navigate("/overview")}>
              View Results <ChevronRight size={16} />
            </button>
          </div>
        ))}
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
            className="rounded-xl border border-gray-300 bg-gray-100 p-2.5 text-primary hover:bg-primary hover:text-white disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex w-fit gap-1 rounded-xl border border-gray-300 bg-gray-100 text-primary">
            {renderPagination()}
          </div>
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-xl border border-gray-300 bg-gray-100 p-2.5 text-primary hover:bg-primary hover:text-white disabled:opacity-40"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordGrid;