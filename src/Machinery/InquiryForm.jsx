import React from "react";

const InquiryForm = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100 ">
        <form
          action="#"
          method="post"
          className="border border-gray-300 bg-white flex flex-col items-center justify-center p-6 space-y-4 rounded-lg shadow-lg w-96"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="mobile" className="mb-1">
              Mobile No:
            </label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Enter Your Mobile Number"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="productName" className="mb-1">
              Product Name:
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              placeholder="Enter Product Name"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="inquiry" className="mb-1">
              What's Your Inquiry?
            </label>
            <input
              type="text"
              name="inquiry"
              id="inquiry"
              placeholder="Enter Your Inquiry"
              className="border p-2 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-600 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default InquiryForm;
