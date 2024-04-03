const Email = () => {
  return (
    <form className="py-5 sm:py-20 gap-8 px-6 sm:px-20 flex flex-col items-center bg-white">
      <div className="text-black sm:text-4xl text-2xl text-center font-bold">
        Get Notified When We Launch
      </div>
      <input
        type="email"
        name=""
        required
        placeholder="Enter Your Email"
        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[2px] bg-transparent text-black text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[600px]"
      />
      <button
        type="submit"
        className={`text-white rounded-md sm:p-5 p-4 active:scale-95 transition-all duration-300 bg-brand sm:px-16`}
      >
        Subscribe
      </button>
    </form>
  );
};
export default Email;
