import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";
import UplodeTmage from "@/components/upload-image";

const home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-full min-h-screen bg-gray-100 flex-col justify-center items-center">
        <Searchbar />
      <fieldset className="mx-auto mt-10 flex w-1/5 border-t border-gray-300 text-center">
        <legend className="px-5">Or</legend>
      </fieldset>
      <div className="mx-auto flex w-1/2 items-center justify-center rounded-full p-6">
        <UplodeTmage />
      </div>
      </div>
      
    </div>
  );
};

export default home;
