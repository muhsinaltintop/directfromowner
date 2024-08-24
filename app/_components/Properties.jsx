"use client"
import React, { useState, useEffect, useRef } from "react";
import Property from "../_atoms/Property";

const Properties = ({ initialData }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  // Extract unique cities from initialData
  const uniqueCities = Array.from(new Set(initialData.map(property => property?.attributes?.city)));

  // Filter data based on selected locations
  const filteredData = selectedLocations.length > 0 
    ? initialData.filter(property => selectedLocations.includes(property?.attributes?.city))
    : initialData;

  const handleLocationChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLocations([...selectedLocations, value]);
    } else {
      setSelectedLocations(selectedLocations.filter(location => location !== value));
    }
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-6 sm:py-6 lg:px-4">
        {initialData.length > 0 && (
          <div>
            <header>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Property Portfolio
              </h2>

              <p className="mt-4 max-w-md text-gray-500">
                Let&apos;s select the most profitable and suitable investment for
                you from our portfolio.
              </p>
            </header>

            <div className="mt-8 sm:flex sm:items-center sm:justify-between">
              <div className="block sm:hidden">
                <button 
                  className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                  onClick={handleFilterToggle}
                >
                  <span className="text-sm font-medium"> Filters & Sorting </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative sm:flex sm:gap-4">
                <div className="relative">
                  <button
                    onClick={handleFilterToggle}
                    className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                  >
                    <span className="text-sm font-medium">Location</span>
                    <span className={`transition ${isFilterOpen ? '-rotate-180' : ''}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>

                  {isFilterOpen && (
                    <div ref={filterRef} className="absolute z-50 mt-2 w-96 rounded border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {selectedLocations.length} Selected
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                          onClick={() => setSelectedLocations([])}
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        {uniqueCities.map((city, index) => (
                          <li key={index}>
                            <label
                              htmlFor={`Filter${city}`}
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id={`Filter${city}`}
                                value={city}
                                checked={selectedLocations.includes(city)}
                                onChange={handleLocationChange}
                                className="size-5 rounded border-gray-300"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                {city}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden sm:block">
                <label htmlFor="SortBy" className="sr-only">
                  SortBy
                </label>

                <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
                  <option>Sort By</option>
                  <option value="Title, DESC">Title, DESC</option>
                  <option value="Title, ASC">Title, ASC</option>
                  <option value="Price, DESC">Price, DESC</option>
                  <option value="Price, ASC">Price, ASC</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredData.map((property, index) => (
            <li key={index}>
              <Property data={property} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Properties;
