import { RxCross2 } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import { useState, useContext } from "react";
import { useNetwork } from "wagmi";
const AirdropModal = ({ setModal, symbol, number, txhash }) => {
  const { chain } = useNetwork();

  function ellipseAddress(address) {
    return address ? `${address.slice(0, 6)}....${address.slice(-6)}` : address;
  }
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="w-screen h-screen text-black modal-glassmorphism rounded-none flex items-center justify-center z-10 top-0 left-0 right-0 fixed bottom-0 font-epilogue"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="rounded-xl gap-2 p-5 bg-[#ffff] flex flex-col relative"
        >
          <div className="flex items-center justify-between">
            <label className="text-black">
              Yahh 🎉 <br />
              Your Token is being Airdrop 😎
            </label>
            <div
              onClick={() => setModal(false)}
              className="h-7 w-7 cursor-pointer text-white bg-[#0052FF] rounded-full border-2 border-[#0052FF] flex top-0 right-0 absolute mr-2 mt-2 items-center justify-center"
            >
              <RxCross2 />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="flex gap-1">
              <b>Tx hash: </b>
              {"  "}
              <a
                href={`${chain.blockExplorers.default.url}/tx/${txhash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row underline hover:text-black cursor-pointer"
              >
                {" "}
                {ellipseAddress(txhash)}
                <GoArrowUpRight />
              </a>
            </span>
            <span>{/* <b>Token Name:</b> {name} */}</span>
            <span> {/* <b>Token Symbol:</b> {symbol} */}</span>
            <span>
              You have successfully Airdrop Tokens to {number} People
            </span>
          </div>
          <a
            href={`${chain.blockExplorers.default.url}/tx/${txhash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-[#0052FF] justify-center items-center p-3 px-4 mr-2 rounded-lg cursor-pointer"
          >
            <p className="text-white text-base font-meduim">Check Basescan</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default AirdropModal;
