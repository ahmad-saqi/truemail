import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";

const SearchPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex h-full min-h-screen flex-col bg-gray-100 justify-center items-center">
      <Searchbar />

      </div>
    </div>
  );
};

export default SearchPage;
