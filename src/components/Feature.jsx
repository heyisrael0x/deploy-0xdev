import code from "../assets/code.svg";
import token from "../assets/token.svg";
import setting from "../assets/setting.svg";
import security from "../assets/security.svg";

const Card = ({ icon, title1, title2 }) => {
  return (
    <div className="flex flex-col gap-4 max-w-[8rem] sm:max-w-xs">
      <div className="bg-brand rounded-[10px] p-8 sm:p-14">
        <div className="bg-white rounded-[10px] p-2 sm:p-5">
          <img src={icon} alt={title1} width={40} />
        </div>
      </div>
      <div className="text-center text-black text-xl font-normal">
        {title1} <br /> {title2}
      </div>
    </div>
  );
};
const Feature = () => {
  return (
    <div className="w-full h-full bg-white py-5 sm:py-10 gap-12 px-6 sm:px-20 flex flex-col items-center justify center">
      <div className="text-black text-4xl font-bold ">Features</div>
      <div className="w-full sm:h-[25rem] flex sm:items-center justify-center sm:flex-row flex-wrap gap-6 sm:gap-20">
        <div className="w-fit h-full flex sm:items-start">
          <Card icon={code} title1={"A No-Code"} title2={"launcher"} />
        </div>
        <div className="w-fit h-full flex sm:items-end">
          <Card icon={token} title1={"Eazy"} title2={"Importation"} />
        </div>
        <div className="w-fit h-full flex sm:items-start">
          <Card
            icon={setting}
            title1={"Customizable"}
            title2={"Token Settings"}
          />
        </div>
        <div className="w-fit h-full flex sm:items-end">
          <Card icon={security} title1={"Set-up ready for"} title2={"token management."} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
