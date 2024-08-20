import React from "react";
import Info from "./Info";
import Link from "next/link";
import f1 from "@/public/f1.svg";
import f2 from "@/public/f2.svg";
import f3 from "@/public/f3.svg";
import Image from "next/image";
const cards = [
  {
    svg: f1,
    title: "Real time data",
    describe:
      "Leverage real-time insights for well-informed decisions. Track key metrics based on data-driven analysis.",
  },
  {
    svg: f2,
    title: "Data visualization",
    describe:
      "Simplify data visualization. Choose intuitive charts and interactive graphs for clear presentation.",
  },
  {
    svg: f3,
    title: "Advanced analytic",
    describe:
      "Advanced analytics for deeper insights. Discover patterns and hidden insights through data segmentation",
  },
];
const Feature = () => {
  return (
    <section
      className="Feature  flex flex-col gap-16 justify-center items-center py-[96px]"
      id="Feature"
    >
      <Info
        subTitle="Features"
        title="Everything you need for scalability"
        description="Maximize success with our flexible product features. Customize, stay compatible across platforms, and receive reliable support for optimized performance."
      />
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 xl:w-[1216px] justify-center items-stretch">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-[10px] bg-[#F9FAFB] p-8 flex flex-col gap-6 lg:w-[384px]"
          >
            <div className="img grid place-items-center bg-[#0072DE] rounded-[10px] size-[40px]">
              <Image src={card.svg} width={24} height={24} alt="" />
            </div>
            <div className="content flex flex-col gap-2">
              <p className="text-[#111827] font-semibold text-[20px] leading-[30px]">
                {card.title}
              </p>
              <p className="text-[#4B5563] text-[16px] leading-6">
                {card.describe}
              </p>
            </div>
            <div className="button">
              <Link
                href="/"
                className="flex flex-row items-center gap-2 text-[#0072DE] font-medium text-[16px] leading-[24px]"
              >
                Learn More{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8334 6.99996L1.16675 6.99996M12.8334 6.99996L7.00008 1.16663M12.8334 6.99996L7.00008 12.8333"
                    stroke="#0072DE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
