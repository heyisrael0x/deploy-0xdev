import { Link } from "react-router-dom";
import { LogoWhite, NautilusChain, Logo } from "../assets/icons";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { getAddress } from "../../utils";
import { useNetwork, useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { CustomButton } from "./CustomButton";
import { logo } from "../assets";

const CreateHeader = () => {
  const { open } = useWeb3Modal();

  const { address, isConnected } = useAccount();
  // https://ipfs.io/ipfs/QmafK1JDWBNtBwtKQQWbTQjQBQvev2jhWR86dK5n1ZgEKo
  const { chain } = useNetwork();
  const iconUrl = {
    22222: [
      "https://ipfs.io/ipfs/QmafK1JDWBNtBwtKQQWbTQjQBQvev2jhWR86dK5n1ZgEKo",
    ],
    130: ["https://scan.engram.tech/assets/network_icon.svg"],
  };
  const url = chain?.id in iconUrl ? iconUrl[chain?.id][0] : null;
  useEffect(() => {}, []);
  return (
    <div className="w-full flex justify-between items-center py-3 px-5 sm:px-10">
      <Link to="/" className="flex items-center gap-3">
        {/* <Logo />{" "} */}
        <img src={logo} alt="Logo" width="40px" className=" rounded-md" />

        <p className="text-white text-2xl font-bold hidden md:block">
          0xDeveloper
        </p>
      </Link>
      {/* <div className="flex items-center justify-center gap-2 font-medium">
        {address == null ? (
          <></>
        ) : (
          <button
            className={`rounded-full w-12 h-12 active:scale-95 transition-all border-white border-2 duration-300 bg-brand text-white`}
            onClick={() => open({ view: "Networks" })}
          >
            <img
              // src="https://pbs.twimg.com/profile_images/1626225438849929218/h_HtSU1a_400x400.jpg"
              src={url}
              className="rounded-full w-12 h-12"
              alt=""
            />
          </button>
        )}

        <button
          className={`rounded-md p-2 active:scale-95 transition-all border-white border-2 duration-300 bg-brand text-white px-7`}
          onClick={() => open()}
        >
          {address == null ? "Connect" : "Connected"}
        </button>
      </div> */}
      <CustomButton />
    </div>
  );
};
export default CreateHeader;
