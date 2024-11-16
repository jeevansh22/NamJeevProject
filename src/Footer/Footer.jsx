import React from "react";

const Footer = () => {
  return <>
  <footer className="bg-white">
  <div className="mx-auto max-w-screen-xl space-y-8 px-120 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
      <div>
        <div className="text-blue-800">
          <h1 className="h-8 text-4xl" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           Savco Sales pvt ltd
           
           </h1>
        
        </div>

        <p className="mt-4 max-w-xs text-gray-500">
        Ours started with farming in a small village, in Gujarat, India. We established a company in Kolkata under the name of Salehbhoy Abbasbhoy & Co. The founder of this company was Late Mr. Abbasbhoy Alibhai Patel.
        </p>

        
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <div>
          <p className=" text-gray-900 text-2xl font-bold">Find us</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 text-xl font-bold transition hover:opacity-75"> Address </a>
              <h3>67/B, Netaji Subhas Road 2nd Floor, Room No. 45, Kolkata-700001
              Phone</h3>
            </li>

            <li>
            <a href="#" className="text-gray-700 text-xl font-bold transition hover:opacity-75"> Phone </a>
              <h3>+91 993377 7444</h3>
            </li>

            <li>
            <a href="#" className="text-gray-700 text-xl font-bold transition hover:opacity-75"> Mail </a>
              <h3>marketing@savcosales.com</h3>
            </li>
           
          </ul>
        </div>

        <div>
          <p className="font-bold text-gray-900 ml-10">Quick Link</p>

          <ul className="mt-6 space-y-4 text-sm ml-10">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Home </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> About us </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Download Catalogue </a>
            </li>
            
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Contatc Us </a>
            </li>
          </ul>
        </div>

        <div>
  <p className="font-bold text-gray-900 ml-10">
    <span className="text-orange-400">[</span>Get a call back <span className="text-orange-400">]</span>
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
    </li>  <li>
      <input
        type="text"
        placeholder="Email"
        className="w-80 px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </li>
    <li>
      <button
        type="submit"
        className="w-full px-4 py-2 mt-4 bg-gray-800 text-white rounded-md hover:bg-orange-500 transition"
      >
        Submit
      </button>
    </li>
  </ul>
</div>


     
      </div>
    </div>

    <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p>
  </div>
</footer>
  </>;
};

export default Footer;
