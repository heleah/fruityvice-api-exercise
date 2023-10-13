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
  const [displayedNum, setDisplayedNum] = useState(3);

  useEffect(() => {
    function sortFruits(property: string) {
      let sortedFruits = [...fruits].sort((a: any, b: any) =>
        a.nutritions[property] < b.nutritions[property] ? -1 : 1
      );
      setFruits(sortedFruits);
    }

    sortFruits(sortBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  function handleSelect(sortValue: any) {
    setSortBy(sortValue);
  }

  function handleClick() {
    setDisplayedNum(displayedNum + 3);
  }

  return (
    <div className="flex flex-col h-96 gap-8 h-full p-12 pb-8">
      <SortSelect onSelect={handleSelect} />
      {fruits.length === 0
        ? 'No matching fruits found. Try resetting all applied filters ("All") or reloading the page.'
        : fruits
            .slice(0, displayedNum)
            .map((fruit: any) => <FruitCard key={fruit.id} fruit={fruit} />)}
      {fruits.length > displayedNum && (
        <button
          className="w-1/4 border border-white bg-slate-400 hover:bg-slate-300 rounded-lg p-2"
          onClick={handleClick}
        >
          Show More
        </button>
      )}
    </div>
  );
}
