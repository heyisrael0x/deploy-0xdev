import { useEffect, useState } from "react";
// import { deployedTokens, getUserTokens, getAddress } from "../../utils";
import { contractAddress, abi } from "../../utils/contract";
import {
  useContractWrite,
  useNetwork,
  useAccount,
  useContractReads,
} from "wagmi";

const TokenDetails = () => {
  const [userToken, setUserToken] = useState([]);
  const [deployedToken, setDeployedToken] = useState("");
  const { address, isConnected } = useAccount();

  const { chain } = useNetwork();
  const tokenfiaddress =
    chain?.id in contractAddress ? contractAddress[chain?.id][0] : null;

  const { data, isLoading, error } = useContractReads({
    contracts: [
      {
        address: tokenfiaddress,
        abi: abi,
        functionName: "GetUserTokens",
        args: [address],
      },
      {
        address: tokenfiaddress,
        abi: abi,
        functionName: "deployedTokens",
      },
    ],
  });

  const updateDetails = async () => {
    if (!address || chain.unsupported || chain.id != "8453") {
      setUserToken([]);
      setDeployedToken(0);
    } else {
      setUserToken(data[0].result);
      setDeployedToken(data[1].result);
    }
  };
  setInterval(() => {
    updateDetails();
  }, 2000);
  useEffect(() => {
    updateDetails();
  }, [address, chain]);

  return (
    <>
      <div className="w-full px-10 my-6 sm:px-16">
        <div className="py-5 sm:py-20 gap-8 px-6 sm:px-20 flex flex-col rounded-[10px] white-glassmorphism">
          <div className="sm:text-4xl text-2xl text-center font-bold">
            YOUR LAUNCHED TOKENS
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="flex gap-4 items-center">
              <div className="text-xl">Total Launched Tokens:</div>
              <div className="w-10 h-10 bg-brand text-white rounded-[10px] flex items-center justify-center">
                {deployedToken ? deployedToken.toString() : 0}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-xl">Your Total Launched Tokens:</div>
              <div className="w-10 h-10 bg-brand text-white rounded-[10px] flex items-center justify-center">
                {userToken ? userToken.length : "0"}
              </div>
            </div>
          </div>
          <div className="text-xl w-full items-center">
            {userToken == 0 || userToken == undefined ? (
              <p className="w-full flex items-center justify-center">
                You have no Launched tokens
              </p>
            ) : (
              <div className="w-full">
                {userToken
                  ? userToken.map((token) => (
                      <div className="text text-base py-2">
                        <div className="flex">
                          <p>Address:&nbsp;</p>
                          <b className="font-semibold hover:underline">
                            <a
                              href={`${chain.blockExplorers.default.url}/address/${token.tokenAddress}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {token.tokenAddress}
                            </a>
                          </b>
                        </div>
                        <div className="flex">
                          <p>Name:&nbsp;</p>
                          <b className="font-semibold">{token.tokenName}</b>
                        </div>
                        <div className="flex">
                          <p>Symbol:&nbsp;</p>
                          <b className="font-semibold">{token.tokenSymbol}</b>
                        </div>
                        <div className="flex">
                          <p>Supply:&nbsp;</p>
                          <b className="font-semibold">
                            {token.totalSupply.toString()}
                          </b>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default TokenDetails;
