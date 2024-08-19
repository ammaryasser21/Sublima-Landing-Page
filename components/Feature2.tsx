import React from "react";
import Info from "./Info";
import Image from "next/image";
const cards: any[] = [
  {
    title: "Real time data",
    describe:
      "Leverage real-time insights for well-informed decisions. Track key metrics based on data-driven analysis.",
  },
  {
    title: "Customizable dashboards",
    describe:
      "Create personalized dashboards tailored to your specific needs. Drag and drop widgets, rearrange layouts.",
  },
  {
    title: "Advanced analytic",
    describe:
      "Advanced analytics for deeper insights. Discover patterns and hidden insights through data segmentation",
  },
  {
    title: "Data visualization",
    describe:
      "Visualize complex data sets with clarity and simplicity. Choose from a variety of intuitive charts, graphs.",
  },
  {
    title: "Performance tracking",
    describe:
      "Measure the effectiveness of your marketing campaigns with precision. Track campaign performance metrics.",
  },
  {
    title: "Data security",
    describe:
      "Ensure the confidentiality and integrity of your data with robust security measures. Protect sensitive information.",
  },
];
const Feature2 = () => {
  return (
    <section
      className="Feature  flex flex-col gap-16 justify-center items-center py-[96px]"
    >
      <Info
        subTitle="Features"
        title="Everything you need for scalability"
        description="Maximize success with our flexible product features. Customize, stay compatible across platforms, and receive reliable support for optimized performance."
      />
      <div className="img py-[67px] relative">
        <Image
          src="/hero.png"
          alt=""
          width={1023}
          height={644.7}
          className="border-8px rounded-6 "
        />
      </div>
      <div className="grid grid-cols-3 gap-8 w-[1216px] pt-8 pb-12">
        {cards.map((card) => (
          <div
            key={card.title}
            className=" flex flex-row gap-6"
          >
            <div className="svg size-6 grid place-items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 8L9.5 14L7 11.5M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                stroke="#0072DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </div>


            <div className="content flex flex-col gap-2">
              <p className="text-[#111827] font-semibold text-[20px] leading-[30px]">
                {card.title}
              </p>
              <p className="text-[#4B5563] text-[16px] leading-6">
                {card.describe}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature2;
