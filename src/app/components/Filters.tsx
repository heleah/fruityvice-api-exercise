"use client";

import { useEffect, useState } from "react";
import SingleFilter from "./SingleFilter";
import { Fruit } from "../types";

interface FiltersProps {
  allFruits: Fruit[];
  setDisplayedFruits: (obj: any) => any;
}

interface FilterConditions {
  [key: string]: string;
}

const FRUIT_FAMILIES = [
  "rosaceae",
  "musaceae",
  "ebenaceae",
  "solanaceae",
  "malvaceae",
];

const FRUIT_GENERA = [
  "fragaria",
  "pyrus",
  "rubus",
  "prunus",
  "malus",
  "diospyros",
  "musa",
  "solanum",
  "durio",
];

export default function Filters({
  allFruits,
  setDisplayedFruits,
}: FiltersProps) {
  const [filterConditions, setFilterConditions] = useState<FilterConditions>(
    {}
  );

  useEffect(() => {
    let filtered = [...allFruits].filter((fruit) => {
      return Object.keys(filterConditions).every((key) => {
        return filterConditions[key] === fruit[key].toLowerCase();
      });
    });

    setDisplayedFruits(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterConditions]);

  function addToFilter(key: string, value: string) {
    setFilterConditions({ ...filterConditions, [key]: value });
  }

  function removeFromFilter() {
    setDisplayedFruits(allFruits);
  }

  return (
    <div className="flex flex-col h-96 gap-8 py-12">
      <strong>Filters:</strong>
      <SingleFilter
        filterName="family"
        filterArr={FRUIT_FAMILIES}
        handleAdd={addToFilter}
        handleRemove={removeFromFilter}
      />
      <SingleFilter
        filterName="genus"
        filterArr={FRUIT_GENERA}
        handleAdd={addToFilter}
        handleRemove={removeFromFilter}
      />
    </div>
  );
}
