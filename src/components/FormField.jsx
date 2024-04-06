import { useState, useEffect } from "react";
import { getAddress } from "../../utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useContractWrite, useNetwork, useAccount } from "wagmi";
import { contractAddress, abi } from "../../utils/contract";

const Input = ({ labelName, value, handleChange, inputType, placeholder }) => {
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
    </label>
  );
};

const FormField = ({ setModal, setMetadata, metadata }) => {
  const { address, isConnected } = useAccount();

  const { chain } = useNetwork();
  const tokenfiaddress =
    chain?.id in contractAddress ? contractAddress[chain?.id][0] : null;
  const { data, isLoading, isSuccess, error, write, writeAsync } =
    useContractWrite({
      address: tokenfiaddress,
      abi: abi,
      functionName: "deployERC20Token",
    });

  console.log(isLoading);
  console.log("sucesss", isSuccess);

  const { open } = useWeb3Modal();
  useEffect(() => {}, []);
  const [createTokenForm, setCreateTokenForm] = useState({
    name: "",
    symbol: "",
    supply: "",
  });
  const handleFormFieldChange = (FieldName, e) => {
    setCreateTokenForm({
      ...createTokenForm,
      [FieldName]: e.target.value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const name = createTokenForm.name;
    const symbol = createTokenForm.symbol;
    const supply = createTokenForm.supply;
    const responds = await writeAsync({ args: [name, symbol, supply] })
    setMetadata({
      name: createTokenForm.name,
      symbol: createTokenForm.symbol,
      txhash: responds.hash,
    });
    setModal(true);
    createTokenForm.name = "";
    createTokenForm.symbol = "";
    createTokenForm.supply = "";
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full px-10 sm:px-28 sm:h-[80vh] my-5 h-[80vh] flex items-center justify-center "
    >
      <div className="bg-brand w-full h-full rounded-[20px] py-5 flex flex-col items-center justify-center px-5 sm:px-28 gap-4">
        <div className="text-center text-white text-3xl font-semibold ">
          Create <span className="text-[#0052FF] text-3xl font-bold">BASE</span>{" "}
          Token
        </div>
        <Input
          labelName={"Token name"}
          handleChange={(e) => handleFormFieldChange("name", e)}
          value={createTokenForm.name}
          inputType={"text"}
        />
        <Input
          labelName={"Token Symbol"}
          handleChange={(e) => handleFormFieldChange("symbol", e)}
          value={createTokenForm.symbol}
          inputType={"text"}
        />
        <Input
          labelName={"Max Supply"}
          handleChange={(e) => handleFormFieldChange("supply", e)}
          value={createTokenForm.supply}
          inputType={"number"}
        />
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
            {isLoading ? (
              <div className="flex gap-2">
                <div
                  class="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                ></div>
                deploying...
              </div>
            ) : (
              <p>Create Token</p>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default FormField;
