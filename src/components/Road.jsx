import arrow from "../assets/arrow.svg";

const one = [
  "Lorem ipsum dolor",
  "sit amet consectetur.",
  "Ipsum eleifend erat",
  "massa cras",
  "pellentesque sapien",
  "iaculis dictum",
];

const Card = ({ stage, lists }) => {
  return (
    <div className="rounded-[10px] border border-black flex flex-col items-center justify-center">
      <div className="w-full bg-brand flex items-center justify-center rounded-t-[10px] py-5">
        <div className="text-2xl font-semibold text-white">{stage}</div>
      </div>
      <div className="w-full px-10 py-3">
        <ul className="list-disc text-black text- font-normal">
          {lists.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Road = () => {
  return (
    <div className="w-full py-5 sm:py-10 gap-12 px-6 sm:px-20 flex flex-col items-center justify-center">
      <div className="text-black text-xl sm:text-4xl font-bold ">Roadmap</div>
      <div className="text-black text-base sm:text-xl font-normal text-center">
        Discover Our Exciting Roadmap And Milestones As We Shape The FutureOf
        Token Creation.
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
        <Card stage={"Stage 1"} lists={one} />
        <img src={arrow} alt="arrow" className="hidden sm:grid" />
        <Card stage={"Stage 2"} lists={one} />
        <img src={arrow} alt="arrow" className="hidden sm:grid"  />
        <Card stage={"Stage 3"} lists={one} />
        <img src={arrow} alt="arrow" className="hidden sm:grid"  />
        <Card stage={"Stage 4"} lists={one} />
      </div>
    </div>
  );
};

export default Road;
