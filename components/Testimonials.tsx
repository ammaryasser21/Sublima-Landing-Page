import React from "react";
import Info from "./Info";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section
      className="flex flex-col gap-16 justify-center items-center py-[96px]"
      id="Testimonials"
    >
      <Info
        title="Everything you need for scalability"
        description="Maximize success with our flexible product features. Customize, stay compatible across platforms, and receive reliable support for optimized performance."
      />
      <div className="grid gap-8 w-[1216px] bg-[#F9FAFB] rounded-[32px] py-16 place-items-center ">
        <div className="content w-[768px] text-center flex flex-col justify-center items-center">
          <h1 className="text-[#111827] text-[36px] leading-[44px] font-medium pb-8">
            The product's flexibility and customization options are outstanding.
            It adapts perfectly to our unique needs.
          </h1>
          <Image src="/testimoinal.png" alt="test" width={40} height={40} />
          <p className="text-[#4B5563] text-[14px] leading-[20px] flex flex-row items-center gap-2 pt-4">
            <span className="text-[16px] leading-[24px] font-semibold text-[#111827]">
              Breanna Butler
            </span>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#111827" />
            </svg>
            Project Manager
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
