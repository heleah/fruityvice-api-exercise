"use client";

import { useEffect, useState } from "react";
import FruitCard from "./FruitCard";
import SortSelect from "./SortSelect";

interface FruitContainerProps {
  fruits: any;
  setFruits: (obj: any) => any;
}

export default function FruitContainer({
  fruits,
  setFruits,
}: FruitContainerProps) {
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    function sortFruits(property: string) {
      let sortedFruits = [...fruits].sort((a: any, b: any) =>
        a.nutritions[property] < b.nutritions[property] ? -1 : 1
      );
      setFruits(sortedFruits);
      console.log(sortedFruits);
    }

    sortFruits(sortBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  function handleSelect(sortValue: any) {
    setSortBy(sortValue);
  }

  return (
    <div className="flex flex-col h-96 gap-8 p-12">
      <SortSelect onSelect={handleSelect} />
      {fruits.map((fruit: any) => (
        <FruitCard key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
}
