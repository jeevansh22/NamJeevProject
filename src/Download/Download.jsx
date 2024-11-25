import React from "react";

const DownloadCatalogue = () => {
  const catalogues = [
    { title: "DESTONER - SGA5B-T", link: "#" },
    { title: "DESTONER - SGA10B(2)-T", link: "#" },
    { title: "DESTONER - SGA15BD-T", link: "#" },
    { title: "GRAIN COLOUR SORTER - RMGS1404DIS", link: "#" },
    { title: "DESTONER - SGA5B-T", link: "#" },
    { title: "DESTONER - SGA10B(2)-T", link: "#" },
    { title: "DESTONER - SGA15BD-T", link: "#" },
    { title: "GRAIN COLOUR SORTER - RMGS1404DIS", link: "#" },
    { title: "DESTONER - SGA5B-T", link: "#" },
    { title: "DESTONER - SGA10B(2)-T", link: "#" },
    { title: "DESTONER - SGA15BD-T", link: "#" },
    { title: "GRAIN COLOUR SORTER - RMGS1404DIS", link: "#" },
  ];

  return (
    <div className="bg-blue-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-10">
        
        <h1 className="bg-white text-black text-3xl font-bold text-center">Download Catalogue</h1>
        <p className=" bg-white text-black text-center mt-2 text-sm">Home / Download Catalogue</p>
        
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {catalogues.map((catalogue, index) => (
            <div
              key={index}
              className="bg-white text-center rounded-md shadow-lg p-6 text-black"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 rounded-md w-20 h-28 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PDF</span>
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-4">{catalogue.title}</h2>
              <a
                href={catalogue.link}
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium py-2 px-4 rounded"
              >
                Download Catalogue
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadCatalogue;
