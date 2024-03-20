import { FaTelegramPlane, FaGithub, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiNotionFill } from "react-icons/ri";

const SocialLink = () => {
  return (
    <div className="flex items-center gap-x-[2.2rem] absolute bottom-3 right-5">
      <a
        href="/"
        className="p-2 text-2xl transition-all rounded-full text-grayColor hover:bg-borderColor"
      >
        <FaTelegramPlane />
      </a>
      <a
        href="/"
        className="p-2 text-2xl transition-all rounded-full text-grayColor hover:bg-borderColor"
      >
        <FaGithub />
      </a>
      <a
        href="/"
        className="p-2 text-2xl transition-all rounded-full text-grayColor hover:bg-borderColor"
      >
        <FaDiscord />
      </a>
      <a
        href="/"
        className="p-2 text-2xl transition-all rounded-full text-grayColor hover:bg-borderColor"
      >
        <RiNotionFill />
      </a>
      <a
        href="/"
        className="p-2 text-2xl transition-all rounded-full text-grayColor hover:bg-borderColor"
      >
        <FaXTwitter />
      </a>
    </div>
  );
};

export default SocialLink;
