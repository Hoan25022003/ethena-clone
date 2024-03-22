import LeftSide from "./main/LeftSide";
import RightSide from "./main/RightSide";

const MainLayout = () => {
  return (
    <div className="relative flex flex-col items-start px-3 py-6 lg:justify-between gap-x-[50px] lg:gap-x-10 lg:px-6 lg:py-4 lg:flex-row">
      <LeftSide />
      <img
        src="eth.gif"
        className="z-50 w-[20%] hidden mt-8 2xl:block"
        alt=""
      />
      <div className="flex items-center justify-center lg:w-[80%] xl:w-[60%] w-full mb-10">
        <RightSide />
      </div>
    </div>
  );
};

export default MainLayout;
