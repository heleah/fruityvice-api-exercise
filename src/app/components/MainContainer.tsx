"use client";

import { useState } from "react";
import Filters from "./Filters";
import FruitContainer from "./FruitContainer";
import { Fruit } from "../types";

interface MainContainerProps {
  fruits: Fruit[];
}

export default function MailContainer({ fruits }: MainContainerProps) {
  const [allFruits, setAllFruits] = useState(fruits);
  const [displayedFruits, setDisplayedFruits] = useState(fruits);

  return (
    <>
      <main className="w-3/4 grid grid-cols-[1fr,4fr]">
        <Filters
          allFruits={allFruits}
          setDisplayedFruits={setDisplayedFruits}
        />
        <FruitContainer
          fruits={displayedFruits}
          setFruits={setDisplayedFruits}
        />
      </main>
    </>
  );
}
