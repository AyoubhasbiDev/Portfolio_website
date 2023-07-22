import React from "react";
import styles from "../style";
import { projects } from "../constants/appData";
import { ProjectCard } from "./Card";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full  md:w-box md:relative top-0 left-[300px]"
    >
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <h1 className="section-title mb-[50px]">Projects</h1>
        <div className="flex flex-wrap gap-y-5 justify-between">
          {projects.map((item, index) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
