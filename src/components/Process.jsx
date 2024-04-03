import arrow from "../assets/arrow.svg";
const Card = ({ no, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="sm:w-20 w-5 max-w-20 sm:h-20 h-5 max-h-20 flex items-center justify-center text-white white-glassmorphism rounded-full sm:text-2xl text-lg font-normal sm:font-medium">
        {no}
      </div>
      <div class="max-w-[200px] text-center text-white text-[10px] sm:text-xl font-normal sm:font-medium">
        {text}
      </div>
    </div>
  );
};
const Process = () => {
  return (
    <div className="w-full py-5 sm:py-8 sm:gap-8 gap-3 px-6 sm:px-20 flex items-cente justify-center text-white">
      <div>
        <Card no={"1"} text={"SET YOUR TOKEN METADATA"} />
      </div>
      <img src={arrow} alt="arrow" width={100} className=" sm:-mt-20 " />
      <div>
        {" "}
        <Card no={"2"} text={"SUBMIT AND ACCEPT PAYMENT"} />
      </div>
      <img src={arrow} alt="arrow" width={100} className=" sm:-mt-20 " />
      <div>
        {" "}
        <Card no={"3"} text={"TOKEN CREATION SUCCESSFUL"} />
      </div>
    </div>
  );
};

export default Process;
