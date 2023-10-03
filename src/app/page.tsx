import MainContainer from "./components/MainContainer";

async function getFruits() {
  const data = await fetch("https://www.fruityvice.com/api/fruit/all");
  const fruits = await data.json();

  return fruits;
}

export default async function Home() {
  const fruits = await getFruits();

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl">Fruityvice API Exercise</h1>
      <MainContainer fruits={fruits} />
    </div>
  );
}
