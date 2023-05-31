import React from "react";

const HeaderSearch = () => {
  return (
    <div className="flex-grow">
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-12 text-base bg-[#e9e9e9] text-gray-900 border-gray-300 rounded-3xl focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            required
          />

        </div>
      </form>
    </div>
  );
};

export default HeaderSearch;
