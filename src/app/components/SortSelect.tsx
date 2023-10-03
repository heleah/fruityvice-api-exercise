interface SortSelectProps {
  onSelect: (e: any) => void;
}

export default function SortSelect({ onSelect }: SortSelectProps) {
  return (
    <div className="flex gap-4 self-end">
      <label htmlFor="fruits-select">Sort by:</label>
      <select
        name="fruits-sort"
        id="fruits-select"
        className="bg-black border-white border-2 rounded-lg p-1"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Please Select</option>
        <option value="calories">Calories</option>
        <option value="carbohydrates">Carbohydrates</option>
        <option value="fat">Fat</option>
        <option value="protein">Protein</option>
        <option value="sugar">Sugar</option>
      </select>
    </div>
  );
}
