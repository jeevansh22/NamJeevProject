import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800">
        <div className="mx-auto max-w-screen-xl space-y-8 px-120 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div>
              <div className="text-white">
                <h1
                  className="h-8 text-2xl font-bold"
                  viewBox="0 0 118 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  Trimukh Sales And Services LLP
                </h1>
              </div>

              <p className="mt-4 max-w-xs text-white">
                We are authorized Channel Partner & Reseller of Buhler - a group
                with its parent company in Switzerland and world-wide activities
                in the field of plant and machine engineering - disposes of a
                comprehensive technological know-how and engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="  text-2xl font-bold text-white">Find us</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-bold transition hover:opacity-75"
                    >
                      {" "}
                      Address{" "}
                    </a>
                    <h3 className="text-slate-200">
                      Office No- 103, 1st Floor, Biscoman bhawan, Gandhi maidan,
                      Patna 800001.
                    </h3>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-bold transition hover:opacity-75"
                    >
                      {" "}
                      Phone{" "}
                    </a>
                    <h3 className="text-slate-200">
                      +91-9134353998 <br />
                      +91-7091231307
                    </h3>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-bold transition hover:opacity-75"
                    >
                      {" "}
                      E-Mail{" "}
                    </a>
                    <h3 className="text-slate-200">trimukh.buhler@gmail.com</h3>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-white ml-10">Quick Link</p>

                <ul className="mt-6 space-y-4 text-sm ml-10">
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75 text-slate-200"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-slate-200 transition hover:opacity-75"
                    >
                      {" "}
                      About us{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-slate-200 transition hover:opacity-75"
                    >
                      {" "}
                      Download Catalogue{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-slate-200 transition hover:opacity-75"
                    >
                      {" "}
                      Contatc Us{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-slate-200 ml-10">
                  <span className="text-orange-400">[</span>Get a call back{" "}
                  <span className="text-orange-400">]</span>
                </p>

                <ul className="mt-6 space-y-4 text-sm ml-10">
                  <li>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-80 px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      placeholder="Number"
                      className="w-80 px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </li>{" "}
                  <li>
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-80 px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </li>
                  <li>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 mt-4 bg-teal-800 text-white rounded-md hover:bg-teal-900 transition"
                    >
                      Submit
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-xl font-bold text-gray-500">
            &copy;  Trimukh sales and services LLp. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
