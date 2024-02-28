/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "../src/assets/contact-us.png";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "pricing",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submission:", formData);
  };

  return (
    <>
      <div className="bg-primary min-h-screen">
        <Header />

        <div className="pt-24">
          <div className="sm:flex sm:justify-between gap-16 px-5 sm:px-12 max-w-7xl mx-auto py-8">
            <div className="flex justify-center w-full">
              <div className="max-w-xl w-full">
                <h3 className="ganora-font text-white text-4xl sm:text-[60px]">
                  Contact Us
                </h3>

                <p className="text-[#AAAAAA] text-xs sm:text-base font-medium mt-4">
                  Book a call or write us to discover our different options.
                  Whether it's membership for recurring missions or more
                  "classic" quotes for big projects, we have the right package
                  for you.
                </p>

                <form className="mt-4 sm:mt-8" onSubmit={handleSubmit}>
                  <div className="py-2.5">
                    <label className="text-white text-lg font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Input your full name in here"
                      className="mt-2 px-3 h-12 border border-white text-white placeholder-white/50 text-base font-normal bg-transparent block w-full focus:outline-none focus:ring-2 focus:ring-[#9C7339]"
                    />
                  </div>
                  <div className="py-2.5">
                    <label className="text-white text-lg font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Input your Email in here"
                      className="mt-2 px-3 h-12 border border-white text-white placeholder-white/50 text-base font-normal bg-transparent block w-full focus:outline-none focus:ring-2 focus:ring-[#9C7339]"
                    />
                  </div>
                  <div className="py-2.5">
                    <label className="text-white text-lg font-semibold">
                      Subjects
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 px-3 h-12 border border-white text-white placeholder-white/50 text-base font-normal bg-transparent block w-full focus:outline-none focus:ring-2 focus:ring-[#9C7339]"
                    >
                      <option value="pricing">Pricing</option>
                      <option value="bug-report">Bug report</option>
                    </select>
                  </div>
                  <div className="py-2.5">
                    <label className="text-white text-lg font-semibold">
                      Messages
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Input your Messages in here"
                      className="mt-2 px-3 py-3 border border-white text-white placeholder-white/50 text-base font-normal bg-transparent block w-full focus:outline-none focus:ring-2 focus:ring-[#9C7339]"
                    ></textarea>
                  </div>

                  <button
                    className="mt-2 my-2.5 px-3 py-3 flex justify-center items-center border border-white text-white text-base font-bold uppercase bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-[#9C7339] duration-300 ease-in-out hover:bg-black"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="w-[360px] hidden flex-shrink-0 sm:flex items-center justify-center">
              <img src={ContactUs} className="w-full" alt="Contact us" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
