interface SingleFilterProps {
  filterName: string;
  filterArr: string[];
  handleRemove: () => void;
  handleAdd: (key: string, value: string) => void;
}

export default function SingleFilter({
  filterName,
  filterArr,
  handleRemove,
  handleAdd,
}: SingleFilterProps) {
  return (
    <>
      <p className="capitalize">{filterName}</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-around gap-2 border-2 border-black rounded bg-gray-300 relative text-sm py-2">
        <button onClick={handleRemove}>All</button>
        {filterArr.map((filter) => {
          return (
            <button
              key={filterName + filter}
              className="capitalize"
              onClick={() => handleAdd(filterName, filter)}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </>
  );
}
