import ComparisonContainer from "./ComparisonContainer";

async function getFruits() {
  const data = await fetch("https://www.fruityvice.com/api/fruit/genus/rubus");
  const fruits = await data.json();

  return fruits;
}

export default async function ComparisonPage() {
  const fruits = await getFruits();

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl">Fruit Comparison</h1>
      <ComparisonContainer fruits={fruits} />
    </div>
  );
}
