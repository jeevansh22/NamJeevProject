import React from "react";
import { Link } from "react-router-dom";

const MachineList = ({ machineries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {machineries.map((machine) => (
        <div
          key={machine.id}
          className="bg-white rounded-md shadow-lg p-6 text-gray-900 flex flex-col"
        >
          <div className="flex justify-center mb-4">
            <img
              src={machine.image}
              alt={machine.name}
              className="rounded-md w-auto h-40 object-cover"
            />
          </div>
          <div className="flex-grow text-center">
            <h2 className="text-lg font-semibold mb-4">{machine.name}</h2>
          </div>
          <div className="mt-auto flex justify-center">
            <Link
              to={`/machine/${machine.id}`}
              className="bg-teal-600 hover:bg-teal-800 text-white text-sm font-medium py-2 px-4 rounded"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MachineList;
