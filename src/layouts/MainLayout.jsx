import SocialLink from "../components/SocialLink";
import LeftSide from "./main/LeftSide";
import RightSide from "./main/RightSide";

const MainLayout = () => {
  return (
    <div className="flex flex-col items-start px-3 py-6 lg:justify-between gap-x-10 lg:gap-x-[100px] lg:px-6 lg:py-4 lg:flex-row relative">
      <LeftSide />
      <img
        src="eth.gif"
        className="z-50 w-[20%] hidden mt-8 2xl:block"
        alt=""
      />
      <div className="flex items-center justify-center lg:w-[80%] xl:w-[50%] w-full mb-14">
        <RightSide />
      </div>
      <SocialLink />
    </div>
  );
};

export default MainLayout;
