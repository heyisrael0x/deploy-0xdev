import { Link } from "react-router-dom";
const Join = () => {
  return (
    <div className="py-10 sm:py-20 gap-8 px-6 sm:px-20 flex flex-col items-center bg-brand">
      <div className="text-white sm:text-4xl text-2xl text-center font-medium sm:font-bold">
        Join Tokenfi Network Community On Telegram
      </div>
      <div className="text-white sm:text-2xl text-lg text-center font-normal sm:font-bold">
        Join And Connect With Token Creators Worldwide
      </div>
      <Link to="https://t.me/+VHsB-m7LFgk1ZGY0">
        <button
          className={`rounded-md sm:p-5 p-4 active:scale-95 transition-all duration-300 bg-white color sm:px-16`}
        >
          Join Now
        </button>
      </Link>
    </div>
  );
};
export default Join;
