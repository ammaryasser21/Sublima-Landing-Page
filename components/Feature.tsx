import React from "react";
import Info from "./Info";
import Link from "next/link";
const cards = [
  {
    svg: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 6V11L14 14M20.9354 12.1419C21.1628 10.1493 20.7866 8.13425 19.8555 6.35823C18.9245 4.5822 17.4816 3.12709 15.7141 2.18166C13.9465 1.23622 11.9359 0.844068 9.9429 1.05608C7.94991 1.26808 6.06657 2.07446 4.53716 3.37062C3.00775 4.66678 1.90284 6.39291 1.36575 8.32511C0.828665 10.2573 0.88418 12.3064 1.5251 14.2067C2.16601 16.1069 3.36276 17.7706 4.9601 18.9819C6.55745 20.1933 8.48168 20.8964 10.4832 21M14 19L16.3333 21L21 17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Real time data",
    describe:
      "Leverage real-time insights for well-informed decisions. Track key metrics based on data-driven analysis.",
  },
  {
    svg: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.2104 14.89C19.5742 16.3945 18.5792 17.7202 17.3123 18.7513C16.0454 19.7824 14.5452 20.4874 12.9428 20.8048C11.3405 21.1221 9.68483 21.0421 8.12055 20.5718C6.55627 20.1014 5.13103 19.2551 3.96942 18.1066C2.80782 16.9582 1.94522 15.5427 1.45704 13.9839C0.968859 12.4251 0.869965 10.7705 1.169 9.16462C1.46804 7.55877 2.1559 6.05061 3.17245 4.77202C4.189 3.49342 5.50329 2.4833 7.0004 1.82999M21 11C21 9.68678 20.7413 8.38642 20.2388 7.17317C19.7362 5.95991 18.9997 4.85752 18.0711 3.92893C17.1425 3.00035 16.0401 2.26375 14.8268 1.7612C13.6136 1.25866 12.3132 1 11 1V11H21Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Data visualization",
    describe:
      "Simplify data visualization. Choose intuitive charts and interactive graphs for clear presentation.",
  },
  {
    svg: (
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 17V7M7 17V1M1 17V11"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
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
      <div className="grid grid-cols-3 gap-8 w-[1216px]">
        {cards.map((card) => (
          <div key={card.title} className="rounded-[10px] bg-[#F9FAFB] p-8 flex flex-col gap-6">
            <div className="img grid place-items-center bg-[#0072DE] rounded-[10px] size-[40px]">{card.svg}</div>
            <div className="content flex flex-col gap-2">
              <p className="text-[#111827] font-semibold text-[20px] leading-[30px]">{card.title}</p>
              <p className="text-[#4B5563] text-[16px] leading-6">{card.describe}</p>
            </div>
            <div className="button">
              <Link href="/" className="flex flex-row items-center gap-2 text-[#0072DE] font-medium text-[16px] leading-[24px]">
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
