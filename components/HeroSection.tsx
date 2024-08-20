import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="Hero-section flex items-center flex-col bg-[#F0F8FF] bg-[url('/bg.png')] bg-center rounded-3xl xl:w-[1300px] xl:h-[1103px] pt-16 pb-16">
      <div className="badge bg-[#FFFFFF] rounded-[16px] size-fit border-[#E5E7EB] border-[1px] flex items-center gap-1 p-1 pr-[10px]  ">
        <div className="bg-[#F9FAFB] rounded-[16px] border-[#E5E7EB] border-[1px] text-[#374151] font-medium text-[14px] leading-[20px] py-[2px] px-[14px]">
          ✨ v2.1
        </div>
        <span className="text-[#374151] font-medium text-[14px] leading-[20px]">
          Sublima UI v2.0 is out now!
        </span>
      </div>
      <h1 className="mt-8 text-[#111827] text-4xl sm:text-[60px] sm:leading-[72px] font-semibold xl:w-[768px] text-center">
        Discover a <span className="text-[#0072DE]">new world</span> of
        possibilities
      </h1>
      <p className="mt-[24px] sm:w-[590px] text-[18px] text-[#4B5563] leading-[28px] text-center">
        Empower your project with our comprehensive wireframe kits designed to
        meet the needs of any platform
      </p>
      <div className="buttons pt-8 flex sm:w-fit w-full sm:flex-row flex-col gap-6 sm:items-center justify-center text-center">
        <Link
          className="bg-[#0072DE] text-white sm:w-fit w-full rounded-[8px] leading-[24px] font-medium text-[16px] px-[20px] py-[12px]"
          href="/signUp"
        >
          Get started
        </Link>
        <Link
          className="leading-[24px]  sm:w-fit w-full flex flex-row justify-center  font-medium text-[16px] gap-2 text-[#374151]"
          href="/Login"
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5001 18.3333C15.1025 18.3333 18.8334 14.6024 18.8334 10C18.8334 5.39763 15.1025 1.66667 10.5001 1.66667C5.89771 1.66667 2.16675 5.39763 2.16675 10C2.16675 14.6024 5.89771 18.3333 10.5001 18.3333Z"
              stroke="#374151"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.83342 6.66667L13.8334 10L8.83342 13.3333V6.66667Z"
              stroke="#374151"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Watch video
        </Link>
      </div>
      <div className="img pt-[67px] relative">
        <Image
          src="/hero.png"
          alt=""
          width={1023}
          height={644.7}
          className="border-8px rounded-6 w-full"
        />
        <Image
          src="/hero2.png"
          alt=""
          width={200}
          height={182.8}
          className="border-8px xl:block hidden rounded-6 top-1/2 -left-[88px] translate-y-[-50%] absolute cursor-pointer"
        />
        <Image
          src="/hero3.png"
          alt=""
          width={240}
          height={94.3}
          className="border-8px rounded-6  xl:block hidden  top-[78.5%] -right-[40px] translate-y-[-50%] absolute cursor-pointer"
        />
      </div>
    </section>
  );
};

export default HeroSection;
