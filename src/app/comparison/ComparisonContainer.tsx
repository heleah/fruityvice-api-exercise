"use client";

import ComparisonRow from "./ComparisonRow";

interface ComparisonContainerProps {
  fruits: any;
}

const nutritions = ["calories", "fat", "sugar", "carbohydrates", "protein"];

export default function ComparisonContainer({
  fruits,
}: ComparisonContainerProps) {
  return (
    <>
      <ComparisonRow fruits={fruits} fruitProp="name" />
      <ComparisonRow fruits={fruits} fruitProp="family" />
      <ComparisonRow fruits={fruits} fruitProp="order" />
      <br />
      <p className="self-start">Nutritions</p>
      {nutritions.map((nutrition) => {
        let propName = "nutritions-" + nutrition;
        return (
          <ComparisonRow key={nutrition} fruits={fruits} fruitProp={propName} />
        );
      })}
    </>
  );
}

//divide-x divide-solid
