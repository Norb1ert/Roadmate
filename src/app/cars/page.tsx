import React from "react";

import FilterOperations from "../components/FilterOperations";

import Filter from "../components/Filter";

export default async function page({ searchParams }) {
  const filter = searchParams?.price ?? "all";

  return (
    <div className=" bg-gray-100 pt-10">
      <div>
        <FilterOperations />
        <Filter filter={filter} />
      </div>
    </div>
  );
}
