import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-gray-400 text-center py-10 px-4 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Subscribe to our Newsletter
      </h2>
      <form
        action="#"
        className="flex flex-col items-center max-w-md mx-auto space-y-4"
      >
        <input
          type="email"
          placeholder="Enter Your E-mail..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
