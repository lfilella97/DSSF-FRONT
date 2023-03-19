import { useState } from "react";
import useStructures from "../../hooks/useStructures/useStructures";
import { CustomJwtPayload, StructureFormData } from "../../types";
import Button from "../Button/Button";
import CreateFormStyled from "./CreateFormStyled";
import jwt_decode from "jwt-decode";
import { useAppSelector } from "../../store/hooks";

const CreateForm = (): JSX.Element => {
  const {
    user: { token },
  } = useAppSelector((state) => state);
  const { createStructure } = useStructures();

  const initialState: StructureFormData = {
    name: "",
    type: "",
    description: "",
    image: null,
    location: "",
    elevation: "0",
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files?.[0] });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { id }: CustomJwtPayload = jwt_decode(token);

    const newStructure = new FormData(event.currentTarget);

    newStructure.append("creationTime", `${Date.now()}`);
    newStructure.append("owner", id);

    createStructure(newStructure);
    setFormData({ ...initialState });
    window.scroll({ top: 0 });
  };

  return (
    <CreateFormStyled className="form" onSubmit={handleSubmit}>
      <div className="form__fields">
        <h2 className="form__title">Add new structure</h2>
        <label className="form__text" htmlFor="name">
          Name:
        </label>
        <input
          onChange={handleInputChange}
          className="form__field"
          type="name"
          value={formData.name}
          placeholder="Introduce structure name"
          id="name"
          name="name"
          required
        />

        <label className="form__text" htmlFor="type">
          Type:
        </label>
        <select
          onChange={handleInputChange}
          className="form__field"
          placeholder="Introduce selector"
          value={formData.type}
          id="selector"
          name="type"
          required
        >
          <option value="General">General</option>
          <option value="Water">Water</option>
          <option value="Construction">Construction</option>
        </select>

        <label className="form__text" htmlFor="location">
          Location:
        </label>
        <input
          onChange={handleInputChange}
          className="form__field"
          type="text"
          value={formData.location}
          placeholder="Introduce structure location"
          id="location"
          name="location"
          required
        />

        <label className="form__text" htmlFor="location">
          Elevation:
        </label>
        <input
          onChange={handleInputChange}
          className="form__field"
          type="number"
          value={formData.elevation}
          placeholder="Introduce structure elevation"
          id="elevation"
          name="elevation"
        />

        <label className="form__text" htmlFor="image">
          Image:
        </label>
        <input
          onChange={handleImageChange}
          className="form__field"
          type="file"
          placeholder="Introduce structure image"
          id="image"
          name="image"
        />

        <label className="form__text" htmlFor="description">
          Description:
        </label>
        <textarea
          onChange={handleInputChange}
          className="form__field"
          value={formData.description}
          placeholder="Introduce structure description"
          id="description"
          name="description"
        />
      </div>

      <Button type="submit" text="Create" className="form__button" />
    </CreateFormStyled>
  );
};

export default CreateForm;
