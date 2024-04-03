const Card = ({ name, role, img }) => {
  return (
    <div className="flex gap-4 flex-col text-white items-center justify-center text-center">
      <div className="bg-white p-40 rounded-[10px]"></div>
      <p>{name}</p>
      <p className="text-2xl font-semibold">{role}</p>
    </div>
  );
};
const Team = () => {
  return (
    <div className="w-full py-5 bg-brand sm:py-10 gap-12 px-6 sm:px-20 flex flex-col sm:flex-row items-center justify-center">
      <Card name={"Lorem ipsum dolor "} role={"CEO"} />
      <Card name={"Lorem ipsum dolor "} role={"DEVELOPER"} />
      <Card name={"Lorem ipsum dolor "} role={"DESIGNER"} />
    </div>
  );
};
export default Team;
