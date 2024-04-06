import { useState, useEffect } from "react";
import { getAddress } from "../../utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import {
  useContractWrite,
  useNetwork,
  useAccount,
  useContractRead,
} from "wagmi";
import {
  contractAddress,
  abi,
  airdropperAddress,
  airdropperabi,
  IERC20abi,
} from "../../utils/contract";
import { Await } from "react-router-dom";

const Input = ({
  labelName,
  value,
  handleChange,
  inputType,
  placeholder,
  info,
}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-medium text-[14px] leading-[22px] text-white mb-[10px]">
          {labelName}
        </span>
      )}

      <input
        required
        value={value}
        onChange={handleChange}
        type={inputType}
        placeholder={placeholder}
        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] bg-transparent text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
      />
      <p className="font-base pt-[0.2rem] text-[#ffffffd4] text-[12px]">
        {info}
      </p>
    </label>
  );
};

const AirdropForm = ({ setModal, setMetadata, metadata }) => {
  const { address, isConnected } = useAccount();

  const { chain } = useNetwork();
  const dropperAddress =
    chain?.id in airdropperAddress ? airdropperAddress[chain?.id][0] : null;

  const { writeAsync, isLoading } = useContractWrite({
    abi: IERC20abi,
    functionName: "approve",
  });

  const { writeAsync: writeAirdrop, isLoading: isLoadingAirdrop } =
    useContractWrite({
      address: dropperAddress,
      abi: airdropperabi,
      functionName: "airdropToken",
    });

  console.log(isLoading);
  //   console.log("sucesss", isSuccess);

  const { open } = useWeb3Modal();
  useEffect(() => {}, []);
  const [airdropTokenForm, setAirdropTokenForm] = useState({
    tokenAddress: "",
    address: "",
    amount: "",
  });
  const handleFormFieldChange = (FieldName, e) => {
    setAirdropTokenForm({
      ...airdropTokenForm,
      [FieldName]: e.target.value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const tokenAddress = airdropTokenForm.tokenAddress;
    const addresses = airdropTokenForm.address
      .split(", ")
      .map((item) => item.trim());
    const amount = airdropTokenForm.amount;

    const responds = await writeAsync({
      address: tokenAddress,
      args: [dropperAddress, amount * addresses.length * 10 ** 18],
    })
      .then(async () => {
        const tx = await writeAirdrop({
          args: [tokenAddress, addresses, amount * 10 ** 18],
        });
        setMetadata({
          symbol: "",
          number: addresses.length,
          txhash: tx.hash,
        });
        setModal(true);
        airdropTokenForm.tokenAddress = "";
        airdropTokenForm.address = "";
        airdropTokenForm.amount = "";
      })
      .catch((e) => {
        console.log(e);
        alert("Invalid Token Address");
      });

    console.log("responds", responds);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full px-10 sm:px-28 sm:h-[80vh] my-5 h-[80vh] flex items-center justify-center "
    >
      <div className="bg-brand w-full h-full rounded-[20px] py-5 flex flex-col items-center justify-center px-5 sm:px-28 gap-4">
        <div className="text-center text-white text-3xl font-semibold ">
          Airdrop Token
        </div>
        <Input
          labelName={"Token Address"}
          handleChange={(e) => handleFormFieldChange("tokenAddress", e)}
          value={airdropTokenForm.tokenAddress}
          inputType={"text"}
          placeholder={"The Token Address you want to Airdrop"}
        />
        <Input
          labelName={"Recipients"}
          handleChange={(e) => handleFormFieldChange("address", e)}
          value={airdropTokenForm.address}
          inputType={"text"}
          placeholder={"The Addresses you want to send Tokens"}
          info={"Seprate Address using comma(,)"}
        />
        <Input
          labelName={"Amount"}
          handleChange={(e) => handleFormFieldChange("amount", e)}
          value={airdropTokenForm.amount}
          inputType={"number"}
        />
        <p>
          Note: This will undergo 2 Tx <b>Approval and Distrubtion</b>
        </p>
        {address == null ? (
          <button
            type="button"
            className={`bg-[#28282B] text-white p-[0.8rem] px-4 border-[0.5px] rounded-xl border-[#424242] flex items-center gap-[0.62rem] active:scale-95 transition-all duration-30`}
            onClick={() => open()}
          >
            Connect
          </button>
        ) : (
          <button
            type="submit"
            className={`bg-[#28282B] text-white p-[0.8rem] px-4 border-[0.5px] rounded-xl border-[#424242] flex items-center gap-[0.62rem] active:scale-95 transition-all duration-30`}
          >
            {isLoading || isLoadingAirdrop ? (
              <div className="flex gap-2">
                <div
                  class="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                ></div>
                Airdropping
              </div>
            ) : (
              <p>Airdrop</p>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default AirdropForm;
