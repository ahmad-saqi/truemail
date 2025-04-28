import Vector from "../../assets/img/vector.svg";

const features = [
  "Credit Never Expire",
  "100 free Credits",
  "No Hidden Cost",
  "Detailed Status Codes",
  "24/7 customer support",
  "Volume Pricing",
  "Email Server Testⓘ",
  "Unknown results are free",
  "Free Deduplication Removing",
];

const Included = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 px-20 py-20">
      <h1 className="text-4xl font-bold">
        Included with all Truemail Accounts
      </h1>
      <div className="grid grid-cols-3 gap-4 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-start gap-2">
            <img src={Vector} alt="" />
            <p className="text-sm text-[#5C6584]">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Included;
