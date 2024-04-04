import { Discrod, Dexscreener, Twitter, Logo } from "../assets/icons";
import { logo } from "../assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="py-5 sm:py-10 sm:gap-48 gap-10 px-6 justify-between sm:px-20 flex sm:flex-row flex-col bg-brand">
      <div className="text-white flex sm:flex-row flex-col gap-8 basis-1/2">
        {/* <div class="w-[150px] h-[150px] bg-zinc-300 rounded-[10px]"></div> */}

        <div className="flex flex-col gap-3">
          <p className="text-white flex gap-2 sm:text-4xl text-2xl font-semibold">
            <img
              src={logo}
              alt="Logo"
              width="40px"
              height="40px"
              className=" rounded-md"
            />{" "}
            0XDEVELOPER
          </p>
          <p className="max-w-[300px] text-white sm:text-xl text-base font-normal">
            Secure, customizable, and optimizable.
          </p>
        </div>
      </div>
      <div>
        <div className="text-white sm:text-4xl text-2xl text-start font-semibold">
          Lets Connect
        </div>
        <div className="flex gap-3">
          <a href="https://t.me/Base_0xdeveloper">
            <Discrod />
          </a>
          <a href="https://x.com/Base0xDeveloper">
            <Twitter />
          </a>
          <a href="">
            <Dexscreener />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
