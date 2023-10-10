"use client";

import { useEffect, useState } from "react";

interface FiltersProps {
  allFruits: any;
  displayedFruits: any;
  setDisplayedFruits: (obj: any) => any;
}

export default function Filters({
  allFruits,
  displayedFruits,
  setDisplayedFruits,
}: FiltersProps) {
  const [filterConditions, setFilterConditions] = useState({});

  useEffect(() => {
    let filtered = [...allFruits].filter((fruit) => {
      return Object.keys(filterConditions).every((key) => {
        return filterConditions[key] === fruit[key].toLowerCase();
      });
    });
    console.log(filtered);

    setDisplayedFruits(filtered);
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
      <p>Family</p>
      <div className="grid grid-cols-2 justify-around gap-2 border-2 rounded relative">
        <button onClick={removeFromFilter}>All</button>
        <span className="border-l-2 border-white h-full w-0 absolute left-1/2 top-0"></span>
        <button onClick={() => addToFilter("family", "rosaceae")}>
          Rosaceae
        </button>
        <button onClick={() => addToFilter("family", "musaceae")}>
          Musaceae
        </button>
        <span className="border-l-2 border-white h-full w-0 absolute left-1/2 top-0"></span>
        <button onClick={() => addToFilter("family", "ebenaceae")}>
          Ebenaceae
        </button>
        <button onClick={() => addToFilter("family", "solanaceae")}>
          Solanaceae
        </button>
        <span className="border-l-2 border-white h-full w-0 absolute left-1/2 top-0"></span>
        <button onClick={() => addToFilter("family", "malvaceae")}>
          Malvaceae
        </button>
      </div>
      <p>Genus</p>
      <div className="grid grid-cols-2 justify-around gap-2 border-2 rounded relative">
        <button className="focus:bg-violet-700" onClick={removeFromFilter}>
          All
        </button>
        <span className="border-l-2 border-white h-full w-0 absolute left-1/2 top-0"></span>
        <button
          className="focus:bg-lime-700"
          onClick={() => addToFilter("genus", "fragaria")}
        >
          Fragaria
        </button>
        <button onClick={() => addToFilter("genus", "pyrus")}>Pyrus</button>
        <span className="border-l-2 border-white h-full w-0 absolute left-1/2 top-0"></span>
        <button onClick={() => addToFilter("genus", "rubus")}>Rubus</button>
        <button onClick={() => addToFilter("genus", "prunus")}>Prunus</button>
        <span className="border-l-2 border-white h-full w-0 absolute left-1/2 top-0"></span>
        <button onClick={() => addToFilter("genus", "malus")}>Malus</button>
        <button onClick={() => addToFilter("genus", "diospyros")}>
          Diospyros
        </button>
        <span className="border-l-2 border-white h-full w-0 absolute left-1/2 top-0"></span>
        <button onClick={() => addToFilter("genus", "musa")}>Musa</button>
        <button onClick={() => addToFilter("genus", "solanum")}>Solanum</button>
        <span className="border-l-2 border-white h-full w-0 absolute left-1/2 top-0"></span>
        <button onClick={() => addToFilter("genus", "durio")}>Durio</button>
      </div>
    </div>
  );
}

//justify-around gap-2 border-2 rounded relative
