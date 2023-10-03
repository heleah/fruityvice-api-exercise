"use client";

interface FruitCardProps {
  fruit: any;
}

export default function FruitCard({ fruit }: FruitCardProps) {
  return (
    <div className="w-72 border-2 border-gray-600 rounded-lg p-4 bg-zinc-600">
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
            <li key={name + value} className="font-normal">
              {name}: {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
