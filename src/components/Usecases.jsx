import usecase from "../assets/usescase.jpg";
const Cases = ({ title, subtitle, img }) => {
  return (
    <div className="text-white flex flex-col gap-4 ">
      <p className="text-2xl font-semibold">{title}</p>
      <div className="flex gap-5">
        {/* <div className="min-w-[84px] h-[84px] bg-white "></div> */}
        <p className="sm:text-lg font-normal">{subtitle}</p>
      </div>
    </div>
  );
};

const Usecases = () => {
  return (
    <div className="w-full bg-brand py-6 px-6 sm:px-20 flex sm:flex-row flex-col items-center justify-center gap-5">
      <div className=" w-full h-full flex basis-1/2 p-5">
        <div className="bg-transparent w-[500px] sm:h-[566px] h-[250px] max-w-[500px] max-h-[566px] usecase"></div>
      </div>
      <div className="flex basis-1/2 gap-4 flex-col">
        <p className="text-yellow-400 text-2xl font-bold">Use case</p>
        <p className="text-white text-4xl font-bold">
          Discover how Tokenfi Launcher can be utilized in the DeFi ecosystem.
        </p>
        <Cases
          title={"- Initial Coin Offerings (ICOs) and Token Sales:"}
          subtitle={
            "One of the most common use cases for a token deployer is facilitating Initial Coin Offerings (ICOs) and token sales. Startups, projects, organizations, companies, communities, and DAOs seeking to raise capital can collaborate with our Tokenfi Launcher to create and launch their own tokens on the blockchain, seamlessly integrated with our platform."
          }
        />
        <Cases
          title={"- Tokenization of Assets:"}
          subtitle={
            "By representing assets as digital tokens on a blockchain, they can be divided into smaller, more easily tradable units. This opens up new investment opportunities that enhance liquidity by using our launcher."
          }
        />
        {/* <Cases
          title={"Crowdfunding"}
          subtitle={
            "Create Tokens For Crowdfunding Campaigns, Allowing Backers To Receive Tokens In Exchange For Their Support."
          }
        /> */}
      </div>
    </div>
  );
};

export default Usecases;
