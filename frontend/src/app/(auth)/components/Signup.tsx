"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { FiCoffee } from "react-icons/fi";
import { Sipass } from "./Sipass";

export const SignupPage = ({
  setStep1,
}: {
  setStep1: Dispatch<SetStateAction<number>>;
}) => {
  const handleOnClick = (val: any) => {
    val(1);
  };
  return (
    <div className="flex">
      <div className="w-[50%] h-screen bg-[#FBBF24] pt-10 ">
        <div className="flex gap-2 text-black font-bold pl-10  items-center">
          <FiCoffee color="black" />
          <p>Buy Me Coffee</p>
        </div>

        <div className="flex justify-center items-center h-full flex-col gap-6">
          <img src="coffee.svg" alt="" />
          <p className="text-[24px] text-black font-bold">
            Fund your creative work
          </p>

          <p className="w-[455px] text-black">
            Accept support. Start a membership. Setup a shop. It’s easier
            <p className="flex pl-45"> than you think.</p>
          </p>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-[white]  pt-10">
        <div className="flex pl-[640px] ">
          <button className="w-[80px] h-[30px] rounded-md font-medium text-black bg-[#F4F4F5]">
            Log in
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col gap-[6px]">
            <p className="text-black font-bold text-[24px]">
              Create Your Account
            </p>
            <input
              className="w-[359px] text-gray-500"
              placeholder="Choose a username for your page"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-[10px] pt-[24px]">
            <p className="text-black font-medium">Username</p>
            <input
              className="text-gray-500 w-[359px] border border-gray-400 rounded-md h-[40px] px-3"
              placeholder="Enter username here"
              type="text"
            />
          </div>
          <div className="flex pt-4">
            <button
              onClick={() => {
                handleOnClick(setStep1);
              }}
              className="flex items-center justify-center w-[359px] h-[40px] border-gray-500 bg-gray-500 rounded-md"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
