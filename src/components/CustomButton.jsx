import { ConnectButton } from "@rainbow-me/rainbowkit";
export const CustomButton = () => {
  return (
    // <section className="flex items-center gap-[0.62rem] justify-end w-full xl:px-20 xl:pt-8 xl:pb-[1.31rem] xl:border-b xl:border-[#424242]">
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] rounded-2xl border-[#424242] flex items-center gap-[0.62rem]"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className=" bg-[#9e2f2f] text-white p-[0.625rem] px-4 border-[0.5px] rounded-2xl border-[#424242] flex items-center gap-[0.62rem]"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                    className="bg-[#28282B] text-white p-[0.625rem] border-[0.5px] rounded-full border-[#424242] flex items-center gap-[0.62rem]"
                  >
                    {chain.hasIcon && (
                      <div
                      //   className="w-auto h-auto xl:w-9 xl:h-9"
                      //   style={{
                      //     background: chain.iconBackground,
                      //     borderRadius: 999,
                      //     overflow: "hidden",
                      //     marginRight: 4,
                      //   }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            className="w-[30px] h-[30px] xl:w-9 xl:h-9 rounded-xl"
                          />
                        )}
                      </div>
                    )}
                    {/* {chain.name} */}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="bg-[#28282B] text-white border-[0.5px] rounded-2xl border-[#424242] items-center"
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
    // </section>
  );
};
