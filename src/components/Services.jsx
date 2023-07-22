import React from "react";
import styles from "../style";
import { services } from "../constants/appData";
import { ServiceCard } from "./Card";
const Services = () => {
  return (
    <section
      id="services"
      className="w-full md:w-box md:relative top-0 left-[300px]"
    >
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <h1 className="section-title mb-[50px]">Services</h1>
        <div className="flex flex-wrap justify-between gap-y-10">
          {services.map((item, index) => (
            <ServiceCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.desciption}
              style={item.style}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
