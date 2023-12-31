"use client";

import { Fruit } from "../types";

interface FruitCardProps {
  fruit: Fruit;
}

export default function FruitCard({ fruit }: FruitCardProps) {
  return (
    <div className="w-72 border-2 border-gray-500 rounded-lg p-4 bg-zinc-400">
      <h2 className="text-xl">{fruit.name}</h2>
      <p>
        A fruit of the <strong>{fruit.family}</strong> family{" "}
        <strong>{fruit.genus}</strong> genus.
      </p>
      <br />
      <ul className="font-semibold">
        Nutritions:
        {Object.entries(fruit.nutritions).map(([name, value]: any) => {
          return (
            <li key={name + value} className="font-normal capitalize">
              {name}: {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
