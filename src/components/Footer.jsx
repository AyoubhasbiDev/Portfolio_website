import React from "react";
import styles from "../style";
import { socialMedia } from "../constants/appData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="w-full bg-primary md:w-box md:relative top-0 left-[300px]">
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className="flex flex-col items-center">
          <div className="mb-3">&copy; 2023 | Created & Designed By Me</div>
          <div>
            {socialMedia.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                className={`text-xl hover:text-[#2980b9] ${
                  index === socialMedia.length - 1 ? "me-0" : "me-6"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
