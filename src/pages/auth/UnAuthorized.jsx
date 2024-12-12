import React from "react";
import { Link } from "react-router-dom";

const UnAuthorized = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">401</h1>
        <p className="mt-4 text-xl text-gray-600">UnAuthorized</p>
        <p className="mt-2 text-sm text-gray-500">
          Sorry, the page you are looking for are not allowed to access.
        </p>
        <div className="mt-6">
          <Link
            to={"/home"}
            className="px-6 py-3 text-white bg-gradient-to-r from-[#9B111E] to-[#D50032] rounded-lg shadow-md hover:bg-blue-700"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;