import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white z-50 grid place-items-center py-[14px]">
      <div className="container px-4 xl:px-0 xl:w-[1280px] flex flex-row justify-between text-[#374151]">
        <div className="flex flex-row items-center gap-[40px]">
          <div className="Logo">
            <Image src="/logo.png" alt="logo" width={32} height={32}/>
          </div>
          <ul className="NavLinks hidden sm:flex flex-row items-center gap-8">
            <li className="leading-[24px] font-medium text-[16px] cursor-pointer">
              <Link href="#Feature">Features</Link>
            </li>
            <li className="leading-[24px] font-medium text-[16px] cursor-pointer">
              Resources
            </li>
            <li className="leading-[24px] font-medium text-[16px] cursor-pointer">
              Enterprise
            </li>
            <li className="leading-[24px] font-medium text-[16px] cursor-pointer">
              <Link href="#Pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="flex sm:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#4B5563"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="Registration hidden sm:flex flex-row items-center gap-8 ">
          <Link
            className="leading-[20px] font-medium text-[14px]"
            href="/Login"
          >
            Log in
          </Link>
          <Link
            className="bg-[#0072DE] text-white rounded-[8px] leading-[20px] font-medium text-[14px] px-[14px] py-[8px]"
            href="/signUp"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
