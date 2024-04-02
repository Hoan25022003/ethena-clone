import ConnectWallet from "../../components/ConnectWallet";

const LeftSide = () => {
  return (
    <div className="z-50 flex flex-col items-start my-5 pl-1 sm:my-12 md:pl-10 lg:pl-[60px] xl:pl-[120px]">
      <h1 className="py-1 uppercase text-[36px] font-semibold leading-10 sm:text-[48px] sm:leading-[50px] lg:text-6xl lg:leading-[70px] opacity-90">
        Leading payment <br /> solution
      </h1>
      <p className="mt-2 text-[18px] font-light text-left sm:mt-3 lg:mt-4 sm:text-2xl lg:text-2xl text-grayColor">
        Security, speed, anonymity increase conversions with built-in
        optimization, access to 100+ payment methods and one-click checkout.
      </p>
      <div className="flex items-center justify-center p-3 mt-5 text-lg text-gray-600 border rounded-md gap-x-2 border-neutral-900 stat">
        <span className="font-semibold leading-4 text-white">Market Size</span>{" "}
        <span className="font-bold leading-4 text-primaryColor">$100M/Day</span>
      </div>
      <ConnectWallet className="min-w-[250px] mt-6 py-[14px]"></ConnectWallet>
    </div>
  );
};

export default LeftSide;
