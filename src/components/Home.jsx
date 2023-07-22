import React from "react";
import styles from "../style";
import Button from "./Button";
import { john2, john } from "../assets";

const Home = () => {
  return (
    <section id="home" className="w-full md:w-box h-[620px] xl:h-[100vh] md:relative top-0 left-[300px]">
      <div className={`${styles.paddingX} pt-16 md:pt-6 h-[100%]`}>
        <div className="h-[100%] min-h-[500px] max-h-[580px] flex justify-between items-center">
          <div className="sm:w-[400px] w-full  text-center sm:text-start">
            <img
              src={john}
              alt=""
              className="w-[150px] rounded-full mx-auto mb-6 block sm:hidden"
            />
            <h1 className="font-poppins font-semibold text-[40px] md:text-[60px] tracking-[10px] mb-[-5px] text-black-100 uppercase">
              Hi <br /> I'm John
            </h1>
            <h2 className="font-poppins font-normal text-[15px] md:text-[17px] tracking-[9px] md:tracking-[15px] text-black-100 uppercase mb-[30px]">
              Web developper
            </h2>
            <p className="font-poppins font-normal text-[15px] text-black-100 mb-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              fuga eius! Officia.
            </p>
            <div>
              <Button style={"bg-black-100 text-white me-3 mb-5"}>
                Contact me
              </Button>
              <Button style={"hover:text-white hover:bg-black-100"}>
                Download cv
              </Button>
            </div>
          </div>
          <img
            src={john2}
            alt="john"
            className="w-[360px] place-self-end hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
