import { Upload } from "lucide-react";

const TestEmail = () => {
  return (
    <div className="grid grid-cols-2 bg-white gap-4 px-20 py-10">
      <div className="flex flex-col items-start justify-center gap-4">
        <h1 className="text-4xl font-bold">
          Test the Email Validator
        </h1>
        <p className="text-xs text-[#5C6584]">Truemail delivers industry-leading bulk email verification with 99% accuracy. Input an email address directly into our verification tool or upload a file to validate an entire list of email addresses.</p>
        <p  className="text-xs text-[#5C6584]">Within seconds, Truemail identifies invalid, risky, or inactive addresses using advanced real-time validation technology. Experience unmatched precision, efficiency, and reliability to ensure your campaigns reach genuine recipients and maintain sender reputation.</p>
      </div>
      <div className="bg-gray-100 flex flex-col items-center justify-center p-10 gap-6 rounded-2xl">
        <button className="text-white py-2 w-full flex justify-center items-center gap-2 bg-[#0F162E] rounded-full "><Upload/> Upload Your List</button>
        <div className="w-4/5">
           <fieldset className="flex w-full border-t-2 border-gray-300 text-center ">
            <legend className="px-5">or</legend>
          </fieldset>
        </div>
        <div className="w-full flex gap-4">
          <input type="text" name="" id="" placeholder="email@example.com" className="bg-white rounded-full py-2 px-6 w-full placeholder:text-xs" />
          <button className="text-white bg-primary rounded-full px-8 py-2 text-xs">Verify</button>
        </div>
      </div>
    </div>
  );
};

export default TestEmail;
