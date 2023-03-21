import { useEffect, useState } from "react";
import useStructures from "../../hooks/useStructures/useStructures";
import FilterStyled from "./FilterStyled";

const Filter = (): JSX.Element => {
  const { getStructures } = useStructures();

  const initialState: string = "";

  const [filterType, setFormData] = useState(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(event.target.value);
  };

  useEffect(() => {
    getStructures("type", filterType);
  }, [getStructures, filterType]);

  return (
    <FilterStyled>
      <select
        onChange={handleInputChange}
        className="form__field"
        placeholder="Introduce selector"
        value={filterType}
        id="selector"
        name="type"
        required
      >
        <option value="">Filter structures by type</option>
        <option value="General">General</option>
        <option value="Water">Water</option>
        <option value="Construction">Construction</option>
      </select>
    </FilterStyled>
  );
};
export default Filter;
