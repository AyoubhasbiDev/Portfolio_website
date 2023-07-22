import React from "react";
import styles from "../style";
import { education } from "../constants/appData";
import { EducationCard } from "./Card";
const Education = () => {
  return (
    <section id="education" className="w-full  md:w-box md:relative top-0 left-[300px]">
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <h1 className="section-title mb-[50px]">Education & Experiences</h1>
        <div className="flex flex-col gap-y-5 ps-12">
          {education.map((item, index) => (
            <EducationCard
              key={item.id}
              date={item.date}
              title={item.title}
              description={item.desciption}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
