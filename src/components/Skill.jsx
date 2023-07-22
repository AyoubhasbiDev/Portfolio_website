import React from "react";

const Skill = ({ skill, progress, style }) => {
  return (
    <div className="w-full ss:w-col-2 ">
      <div className="flex justify-between">
        <span className="font-poppins uppercase text-black-100 text-[15px]">
          {skill}
        </span>
        <span>{progress}%</span>
      </div>
      <div className="relative h-[5px]">
        <div className="w-full h-[100%] bg-primary rounded-xl"></div>
        <div
          className={`absolute top-0 left-0  h-[100%] rounded-xl ${style}`}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
