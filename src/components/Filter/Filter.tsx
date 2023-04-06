import FilterStyled from "./FilterStyled";

interface FilterProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const Filter = ({
  onChange: handleInputChange,
  value,
}: FilterProps): JSX.Element => {
  return (
    <FilterStyled
      onChange={handleInputChange}
      className="form__field"
      placeholder="Introduce selector"
      value={value}
      id="selector"
      name="type"
      required
    >
      <option value="">Filter structures by type</option>
      <option value="General">General</option>
      <option value="Water">Water</option>
      <option value="Construction">Construction</option>
    </FilterStyled>
  );
};
export default Filter;
