import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ServiceCard = ({ icon, title, description, style }) => {
  return (
    <div
      className={`w-full ss:w-col-2 md:w-col-3 text-center border-b-4 p-6 ${style} box-shadow cursor-pointer hover:translate-y-[-10px]`}
    >
      <FontAwesomeIcon icon={icon} className="text-3xl mb-2 text-black-100" />
      <h3 className="font-poppins font-semibold text-[18px] mb-4 text-black-100">
        {title}
      </h3>
      <p className="font-poppins text-[15px] text-black-100">{description}</p>
    </div>
  );
};

export const EducationCard = ({ date, title, description }) => {
  return (
    <div
      className={`education__card w-full  border-[1px] border-[#999] bg-primary rounded-xl p-6 relative`}
    >
      <h3 className="font-poppins font-semibold text-[16px] mb-1 text-black-100">
        {date}
      </h3>
      <h3 className="font-poppins font-semibold text-[16px] mb-3 text-black-100">
        {title}
      </h3>
      <p className="font-poppins text-[15px] text-black-100">{description}</p>
    </div>
  );
};

export const ProjectCard = ({ title, description, img }) => {
  return (
    <div
      className={`group w-full ss:w-col-2 overflow-hidden rounded-xl cursor-pointer relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#2980b9] after:rounded-xl after:bg-opacity-0 hover:after:bg-opacity-40 `}
    >
      <img
        src={img}
        className="group-hover:rotate-12 group-hover:scale-150 w-[100%] rounded-xl"
      />
      <div className="absolute left-[20px] bottom-[30px] opacity-0 group-hover:opacity-100 z-10">
        <h4 className="font-poppins font-semibold text-[18px] mb-1 text-white">
          {title}
        </h4>
        <p className="font-poppins text-[14px] text-white">{description}</p>
      </div>
    </div>
  );
};

export const ContactCard = ({ icon, info, style }) => {
  return (
    <div
      className={`w-full sm:w-col-3 mb-[30px] sm:mb-0 text-center border-b-4 p-6 ${style} box-shadow cursor-pointer hover:translate-y-[-10px]`}
    >
      <FontAwesomeIcon icon={icon} className="text-3xl mb-2 text-black-100" />
      <p className="font-poppins text-[15px] text-black-100">{info}</p>
    </div>
  );
};
