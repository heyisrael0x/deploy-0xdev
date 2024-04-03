import token from "../assets/Tokenomics.png";
const Distrubution = () => {
  return (
    <div className="py-5 sm:py-10 gap-12 px-6 sm:px-20 flex flex-col items-center">
      <div className="text-black text-center text-4xl font-bold ">$TL Distribution</div>
      <div class="max-w-full border border-zinc-400 justify-center items-center inline-flex">
        <img src={token} alt="token" />
      </div>
    </div>
  );
};

export default Distrubution;
