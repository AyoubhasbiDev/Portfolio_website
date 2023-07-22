import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../style";
import Swal from "sweetalert2";
import { contact } from "../constants/appData";
import { ContactCard } from "./Card";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      subject: Yup.string().min(2, "Too Short!").required("Required"),
      message: Yup.string().min(20, "Too Short!").required("Required"),
    }),
    onSubmit: (values) => {
      Swal.fire("Good job!", "message sent successfully", "success");
      resetForm();
    },
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    resetForm,
  } = formik;

  return (
    <section
      id="contact"
      className="w-full  md:w-box md:relative top-0 left-[300px]"
    >
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <h1 className="section-title mb-[50px]">Get in touch</h1>
        <div>
          <div className="flex flex-wrap justify-between mb-[60px]">
            {contact.map((item, index) => (
              <ContactCard
                key={item.id}
                icon={item.icon}
                info={item.info}
                style={item.style}
              />
            ))}
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="flex flex-wrap justify-between"
            >
              <div className="w-full sm:w-col-2 mb-[50px] relative">
                <input
                  name="fullname"
                  type="text"
                  id="fullname"
                  placeholder=" "
                  className="peer w-full font-poppins text-[15px] bg-primary p-2 outline-none rounded-xl"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="fullname"
                  className="font-poppins text-[15px] font-semibold text-black-100 absolute top-[10px] left-[10px] -translate-y-9 peer-placeholder-shown:translate-y-0 peer-focus:text-black-100 peer-placeholder-shown:text-[#999] peer-focus:-translate-y-9  "
                >
                  Full name
                </label>
                {errors.fullname && touched.fullname ? (
                  <div className="absolute top-[45px] font-poppins text-xs text-[#f00]">
                    {errors.fullname}
                  </div>
                ) : null}
              </div>
              <div className="w-full sm:w-col-2 mb-[50px] relative">
                <input
                  name="email"
                  type="text"
                  id="email"
                  placeholder=" "
                  className="peer w-full font-poppins text-[15px] bg-primary p-2 outline-none rounded-xl"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="email"
                  className="font-poppins text-[15px] font-semibold text-black-100 absolute top-[10px] left-[10px] -translate-y-9 peer-placeholder-shown:text-[#999] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-9  peer-focus:text-black-100"
                >
                  Email
                </label>
                {errors.email && touched.email ? (
                  <div className="absolute top-[45px] font-poppins text-xs text-[#f00]">
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className="w-full mb-[50px] relative">
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  placeholder=" "
                  className="peer w-full font-poppins text-[15px] bg-primary p-2 outline-none rounded-xl"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="subject"
                  className="font-poppins text-[15px] font-semibold text-black-100 absolute top-[10px] left-[10px] peer-focus:text-black-100 peer-placeholder-shown:text-[#999] -translate-y-9 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-9"
                >
                  Subject
                </label>
                {errors.subject && touched.subject ? (
                  <div className="absolute top-[45px] font-poppins text-xs text-[#f00]">
                    {errors.subject}
                  </div>
                ) : null}
              </div>
              <div className="w-full mb-[30px] relative">
                <textarea
                  name="message"
                  id="message"
                  placeholder=" "
                  className="peer w-full font-poppins text-[15px] h-[250px] p-2 bg-primary outline-none rounded-xl"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="message"
                  className="font-poppins text-[15px] font-semibold text-black-100 absolute top-[10px] left-[10px]  peer-focus:text-black-100 peer-placeholder-shown:text-[#999] -translate-y-9 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-9"
                >
                  Message
                </label>
                {errors.message && touched.message ? (
                  <div className="absolute bottom-[-15px] font-poppins text-xs text-[#f00]">
                    {errors.message}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="font-poppins font-medium w-[140px] bg-[#2980b9] py-3 text-white rounded-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
