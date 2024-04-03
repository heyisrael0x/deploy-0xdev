import robot from "../assets/Robot.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="w-full bg-brand py-6 px-6 sm:px-20 flex sm:flex-row flex-col items-center justify-center gap-5">
      <div className="flex flex-col gap-7 basis-1/2">
        <p className="text-yellow-400 text-2xl font-bold">
          About Tokenfi Launcher
        </p>
        <p className="text-white text-xl font-normal w-full">
          Tokenfi Launcher is a customizable platform that enables easy creation
          and customization of tokens for token creators looking to launch their
          projects. Our core features empower users, including businesses,
          communities, organizations, and companies, to manage their tokens
          directly through our platform. Users can import tokens and customize
          them according to their preferences.
        </p>
        <Link to="/create">
          <button
            className={`rounded-md p-2 w-fit active:scale-95 transition-all duration-300 font-medium bg-white color px-3`}
          >
            Create Tokens
          </button>
        </Link>
      </div>
      <div className="w-full h-full flex grow pb-[1.5rem] basis-1/2">
        <img src={robot} alt="robot" />
      </div>
    </div>
  );
};

export default About;
