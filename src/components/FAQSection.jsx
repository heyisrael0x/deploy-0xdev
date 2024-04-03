import { useState } from "react";
import { Plus, Cross } from "../assets/icons";
const faqData = [
  {
    title: "How does deployer work",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Sit quam enim vestibulum aenean. Pretium enim urna sem pretium magnis mauris in. Metus leo quis pretium pulvinar scelerisque. Adipiscing dolor lorem ipsum tempor nibh. Lorem ipsum dolor sit amet consectetur. Sit quam enim vestibulum aenean. Pretium enim urna sem pretium magnis mauris in. Metus leo quis pretium pulvinar scelerisque. Adipiscing dolor lorem ipsum tempor nibh.",
  },
  {
    title: "How does deployer work",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, id.",
  },
  {
    title: "How does deployer work",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsam dolor impedit adipisci consequatur quae inventore aut laboriosam ullam accusamus fugit optio, odit repellendus, quasi vitae nisi quia omnis corrupti. Suscipit, nostrum neque omnis maiores harum eaque culpa debitis veniam tempore esse. Quae, amet ducimus enim ex iure aliquam consequatur!",
  },
  {
    title: "How does deployer work",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsam dolor impedit adipisci consequatur quae inventore aut laboriosam ullam accusamus fugit optio, odit repellendus, quasi vitae nisi quia omnis corrupti. Suscipit, nostrum neque omnis maiores harum eaque culpa debitis veniam tempore esse. Quae, amet ducimus enim ex iure aliquam consequatur!",
  },
  {
    title: "How does deployer work",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsam dolor impedit adipisci consequatur quae inventore aut laboriosam ullam accusamus fugit optio, odit repellendus, quasi vitae nisi quia omnis corrupti. Suscipit, nostrum neque omnis maiores harum eaque culpa debitis veniam tempore esse. Quae, amet ducimus enim ex iure aliquam consequatur!",
  },
  {
    title: "How does deployer work",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsam dolor impedit adipisci consequatur quae inventore aut laboriosam ullam accusamus fugit optio, odit repellendus, quasi vitae nisi quia omnis corrupti. Suscipit, nostrum neque omnis maiores harum eaque culpa debitis veniam tempore esse. Quae, amet ducimus enim ex iure aliquam consequatur!",
  },
];

const FAQ = ({ title, subtitle }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full max-w-2xl border-b-2 border-[#361212] hover:bg-[#260e0e2f] transition-all duration-300 rounded-t-md">
      <button
        onClick={() => setOpened((prev) => !prev)}
        className="flex items-center justify-between w-full p-3 text-lg font-semibold text-gray-900"
      >
        {title}
        {opened ? 
        <Cross
          className={`transition-all duration-300`}
        />:
        <Plus
          className={`transition-all duration-300`}
        />
        }
      </button>
      <div
        className={`overflow-hidden grid transition-all duration-300 ${
          opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`min-h-0 transition-all duration-300 ${
            opened ? "p-2" : "p-0"
          }`}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="py-5 sm:py-10 gap-12 px-6 sm:px-20 flex flex-col items-center">
      <div className="text-black text-2xl text-center sm:text-4xl font-bold ">
        Frequently Asked Questions
      </div>
      <div className="mt-10 space-y-6">
        {faqData.map((props, index) => (
          <FAQ key={index} {...props} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
