"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex flex-wrap items-center justify-between p-4 bg-white rounded-lg gap-y-4">
      <div className="flex flex-wrap gap-4">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-xl text-sm font-medium bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="py-2 px-4 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="py-2 px-4 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleFilterChange}
        />
        <select
          name="cat"
          className="py-2 px-4 rounded-xl text-sm font-medium bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-xl text-sm font-medium bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="w-full md:w-auto flex justify-start md:justify-start">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-xl text-sm font-medium bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
