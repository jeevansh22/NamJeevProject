import React from "react";
import image1 from "/images/image1.png";
import { Link, useParams } from "react-router-dom";
import { Machineries } from "./Data";

const Machinery = () => {
  const { id } = useParams();
  const machinery = Machineries.find((machine) => machine.id === parseInt(id));
  console.log(machinery);
  if (!machinery) {
    return <div>Machinery not found</div>;
  }

  return (
    <>
      <div className="my-10"></div>

      <section className="relative ">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
            <div className="img">
              <div className="img-box h-full max-lg:mx-auto ">
                <img
                  // src={image1}
                  alt="Machinery"
                  className="max-lg:mx-auto lg:ml-auto h-full object-cover"
                />
              </div>
            </div>
            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
              <div className="data w-full max-w-xl">
                <p className="text-lg font-medium leading-8 text-blue-900 mb-4">
                  Machinery&nbsp; /&nbsp; Home
                </p>
                <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                  {machinery.name}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  {/* <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                    {machinery.price}
                  </h6> */}
                  <div className="flex items-center gap-2"></div>
                </div>
                <p className="text-gray-500 text-base font-normal mb-5">
                  {machinery.description}
                </p>
                <h1 className="text-4xl font-bold mb-10">Features</h1>
                <ul className="grid gap-y-4 mb-8">
                  {machinery.features.map((feature, index) => (
                    <li className="flex items-center gap-3" key={index}>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="26" height="26" rx="13" fill="#4F46E5" />
                        <path
                          d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                          stroke="white"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                      <span className="font-normal text-base text-gray-900 ">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3">
                  <Link to={"/inquiryform"}>
                    <button className="border-4 border-blue-950 p-1 px-4 rounded-md bg-blue-800 text-white">
                      Enquiry
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Machinery;

{
  /* <div className="overflow-auto mt-30">
        <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm mt-30">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">MODEL</th>
              <th className="border border-gray-300 px-4 py-2">SFI1000A-T</th>
              <th className="border border-gray-300 px-4 py-2">SFI1500A-T</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2" rowspan="3">
                Capacity (t/h)
              </td>
              <td className="border border-gray-300 px-4 py-2">Paddy rice</td>
              <td className="border border-gray-300 px-4 py-2">6-8</td>
              <td className="border border-gray-300 px-4 py-2">10-15</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Brown rice</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">12-15</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Wheat</td>
              <td className="border border-gray-300 px-4 py-2">
                Intake: 65 <br /> Cleaning: 16
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Intake: 100 <br /> Cleaning: 25
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Motor (KW)</td>
              <td className="border border-gray-300 px-4 py-2">0.85-6px2</td>
              <td className="border border-gray-300 px-4 py-2">1.6-6px2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2" rowspan="2">
                Suction
              </td>
              <td className="border border-gray-300 px-4 py-2">m³/min</td>
              <td className="border border-gray-300 px-4 py-2">12</td>
              <td className="border border-gray-300 px-4 py-2">12</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">(M³/min)</td>
              <td className="border border-gray-300 px-4 py-2">-0.2</td>
              <td className="border border-gray-300 px-4 py-2">-0.2</td>
            </tr>
          </tbody>
        </table>
      </div> */
}
