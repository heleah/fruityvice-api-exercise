interface ComparisonRowProps {
  fruits: any;
  fruitProp: string;
}

export default function ComparisonRow({
  fruits,
  fruitProp,
}: ComparisonRowProps) {
  function getPropName(name: string) {
    return name.includes("-") ? name.split("-")[1] : name;
  }

  return (
    <div className="grid w-full grid-cols-[1fr,3fr] h-content">
      <div className="bg-gray-500 p-2 capitalize">
        {fruitProp === "name" ? "" : getPropName(fruitProp)}
      </div>
      <div className="grid grid-cols-3 place-items-center">
        {fruits.map((fruit) => {
          return (
            <div key={fruit.id} className="p-2">
              {fruitProp.includes("-")
                ? fruit[fruitProp.split("-")[0]][fruitProp.split("-")[1]]
                : fruit[fruitProp]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
