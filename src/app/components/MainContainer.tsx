"use client";

import { useState } from "react";
import Filters from "./Filters";
import FruitContainer from "./FruitContainer";

interface MainContainerProps {
  fruits: any;
}

export default function MailContainer({ fruits }: MainContainerProps) {
  const [allFruits, setAllFruits] = useState(fruits);
  const [displayedFruits, setDisplayedFruits] = useState(fruits);

  return (
    <>
      <main className="w-3/4 grid grid-cols-[1fr,4fr]">
        <Filters
          allFruits={allFruits}
          displayedFruits={displayedFruits}
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
