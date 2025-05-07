import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";

const SearchPage = () => {
  return (
    <div className="flex h-full flex-col bg-[#F5F6F8CC]">
      <Navbar />
      <Searchbar />
    </div>
  );
};

export default SearchPage;
