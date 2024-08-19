import React from "react";
import Info from "./Info";
const cards = [
  {
    title:"h",
    subtitle:"h",
    price:100
  },
  {
    title:"h",
    subtitle:"h",
    price:100,
    badge:"bad"
  },
  {
    title:"h",
    subtitle:"h",
    price:100
  },

]
const Pricing = () => {
  return (
    <section
      className="flex flex-col gap-16 justify-center items-center py-[96px]"
      id="Pricing"
    >
      <Info
        subTitle="Pricing"
        title="Scalable plans for any team size"
        description="Unlock the power of scalability with our plans tailored to accommodate teams of any size, providing the flexibility you need to grow and succeed"
      />
      <div className="bg-[#F9FAFB] p-1 flex items-center gap-2 rounded-[24px] cursor-pointer mt-8">
        <div className="py-2 px-[14px] rounded-[24px] bg-white shadow-sm font-medium text-[14px] leading-[20px]">Monthly</div>
        <div className="py-2 px-[14px] text-[#6B7280] font-medium text-[14px] leading-[20px]">Annually</div>

      </div>
      <div className="pricing pt-16 flex flex-row justify-evenly">
        <div className="pricing-card rounded-[24px] border-[#E5E7EB] border"></div>
      </div>
    </section>
  );
};

export default Pricing;
