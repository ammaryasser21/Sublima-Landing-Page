"use client";
import React, { useState } from "react";
import Info from "./Info";
import Link from "next/link";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started with your product?",
      answer:
        "Sign up on our website, explore features, customize your profile, and start using our product. We're here to help!",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features.",
    },
    {
      question: "Is technical support available?",
      answer:
        "Absolutely! Our support team is available 24/7 to assist you with any issues.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings.",
    },
    {
      question: "Is my data secure with your product?",
      answer:
        "We use advanced security measures to ensure your data is safe and secure at all times.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="flex flex-col gap-16 justify-center items-center py-[96px]"
      id="FAQs"
    >
      <Info
        title="Frequently asked questions"
        description="For any unanswered questions, reach out to our support team via email. We'll respond as soon as possible to assist you."
      />
      <div className="faqs  lg:w-[768px] w-full flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg w-[90%] sm:w-full  font-medium text-[#111827]">
                {faq.question}
              </h3>
              <span className="text-xl">
                {activeIndex === index ? (
                  <svg
                    width="16"
                    height="2"
                    viewBox="0 0 16 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 1.00002L1 1"
                      stroke="#4B5563"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 15L7.99998 1.00002M15 8.00003L1.00002 8.00001"
                      stroke="#4B5563"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="pb-4 w-[90%] sm:w-full text-[#4B5563] text-[16px] leading-[24px]">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-8 w-full xl:w-[1216px] bg-[#F9FAFB] rounded-[32px] py-8 place-items-center ">
        <div className="content w-full lg:w-[768px] text-center flex flex-col justify-center items-center gap-2">
          <p className="text-[#111827] text-[20px] leading-[30px] font-semibold">
            Didn't find an answer to your question?
          </p>
          <p className="text-[#4B5563] text-[16px] leading-[24px]">
            Is there something you're uncertain about? Reach out to our
            welcoming team for assistance.
          </p>
        </div>
        <Link
          href="/"
          className="bg-[#0072DE] rounded-lg py-[10px] px-[18px] text-base font-medium text-white"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default FAQs;
