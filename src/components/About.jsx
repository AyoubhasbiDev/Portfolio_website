import React from "react";
import styles from "../style";
import { john } from "../assets";
import { skillBarInfo } from "../constants/appData";
import Skill from "./Skill";
const About = () => {
  return (
    <section
      id="about"
      className="w-full md:w-box md:relative top-0 left-[300px]"
    >
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <h1 className="section-title mb-[50px]">About</h1>
        <div>
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-[30px]">
            <div>
              <img src={john} alt="" className="w-[150px] rounded-full" />
            </div>

            <div className="flex-1">
              <h4 className="font-poppins text-center sm:text-start font-semibold text-[20px] text-black-100 uppercase mb-2">
                I'm John Doe
              </h4>
              <p className="font-poppins text-[15px] text-black-100 text-center sm:text-justify leading-[1.5]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                fuga eaque, culpa cupiditate animi laborum natus! Similique odio
                sit facilis dolorum dicta velit provident sequi iusto, est
                pariatur quisquam corrupti animi necessitatibus aliquid deserunt
                reprehenderit voluptatibus? Exercitationem deserunt fugit dicta
                nesciunt velit quae tempora eius praesentium odio est,
                voluptatem vero incidunt omnis ad iure, soluta maiores nostrum
                inventore alias culpa. Nihil suscipit possimus est harum
                accusamus impedit libero deleniti repellat.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-y-10">
            {skillBarInfo.map((item, index) => (
              <Skill
                key={item.id}
                skill={item.title}
                progress={item.process}
                style={item.style}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
