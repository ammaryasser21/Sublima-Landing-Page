import React from "react";

interface InfoProps {
  title?: string;
  subTitle?: string;
  description?: string;
}

const Info: React.FC<InfoProps> = ({ title, subTitle, description }) => {
  return (
    <div className="lg:w-[768px] text-center">
      {subTitle && (
        <p className="text-[#0072DE] font-semibold text-[16px] leading-[24px]">
          {subTitle}
        </p>
      )}
      {title && (
        <h1 className="text-[#111827] font-semibold text-[36px] leading-[44px] pt-3 pb-4">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-[#4B5563] text-[18px] leading-[28px]">
          {description}
        </p>
      )}
    </div>
  );
};

export default Info;
