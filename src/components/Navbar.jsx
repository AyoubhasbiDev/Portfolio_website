import React, { useState } from "react";
import { navLinks } from "../constants/appData";
import { john, menu, close } from "../assets";
import styles from "../style";
const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  return (
    <header className="w-full md:fixed top-0 left-0 md:w-[300px] md:min-h-screen bg-primary relative">
      <div className=" py-[40px] hidden md:block">
        <nav className="flex flex-col items-center">
          <div className="text-center mb-[40px]">
            <img src={john} className="w-[150px] rounded-full" alt="john" />
            <h3 className="font-poppins font-semibold uppercase text-xl text-black-100">
              John Doe
            </h3>
            <p className="font-poppins font-light uppercase text-[15px] text-black-100">
              Web developper
            </p>
          </div>

          <ul className="text-center">
            {navLinks.map((item, index) => (
              <li
                className={`${index === navLinks.length - 1 ? "mb-0" : "mb-5"}`}
                key={item.id}
              >
                <a
                  className={`font-poppins font-light uppercase text-[15px] ${
                    active === item.id
                      ? "font-normal text-[#2980b9]"
                      : "text-black-100"
                  }`}
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`${styles.paddingX} py-6  md:hidden block`}>
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <img
              src={john}
              className="w-[50px] rounded-full me-[10px]"
              alt="john"
            />
            <h3 className="font-poppins font-semibold uppercase text-black-100">
              John Doe
            </h3>
          </div>
          <div className="block md:hidden">
            <img
              src={`${!toggle ? menu : close}`}
              onClick={() => setToggle(!toggle)}
              className="w-[32px]"
            />
          </div>

          <ul
            className={`${
              toggle ? "block" : "hidden"
            } text-center min-w-[170px] rounded-xl bg-gradient absolute top-0 right-0 me-16 mt-[75px] py-3 px-6 slider`}
          >
            {navLinks.map((item, index) => (
              <li
                className={`${index === navLinks.length - 1 ? "mb-0" : "mb-5"}`}
                key={item.id}
              >
                <a
                  className={`font-poppins font-light uppercase text-[15px]  ${
                    active === item.id
                      ? "font-normal text-[#2980b9]"
                      : "text-black-100"
                  }`}
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
