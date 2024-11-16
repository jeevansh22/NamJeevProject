import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-gray-400 text-center">
      <h2>Subscribe to our Newsletter</h2>
      <form action="#">
        <input type="email" placeholder="Enter Your E-mail..." />
        <br />
        <button>SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default NewsLetter;
