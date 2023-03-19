import Button from "../Button/Button";

const CreateForm = (): JSX.Element => {
  return (
    <form className="form" onSubmit={() => {}}>
      <div className="form__fields">
        <h2 className="form__title">Add new structure</h2>
        <label className="form__text" htmlFor="name">
          Name:
        </label>
        <input
          onChange={() => {}}
          className="form__field"
          type="name"
          value={""}
          placeholder="Introduce structure name"
          id="name"
          name="name"
          required
        />

        <label className="form__text" htmlFor="type">
          Type:
        </label>
        <select
          onChange={() => {}}
          className="form__field"
          placeholder="Introduce selector"
          value={""}
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
          onChange={() => {}}
          className="form__field"
          type="text"
          value={""}
          placeholder="Introduce structure location"
          id="location"
          name="location"
          required
        />

        <label className="form__text" htmlFor="location">
          Elevation:
        </label>
        <input
          onChange={() => {}}
          className="form__field"
          type="number"
          value={""}
          placeholder="Introduce structure elevation"
          id="elevation"
          name="elevation"
        />

        <label className="form__text" htmlFor="image">
          Image:
        </label>
        <input
          onChange={() => {}}
          className="form__field"
          type="file"
          placeholder="Introduce structure image"
          id="image"
          name="image"
          required
        />

        <label className="form__text" htmlFor="description">
          Description:
        </label>
        <textarea
          onChange={() => {}}
          className="form__field"
          value={""}
          placeholder="Introduce structure description"
          id="description"
          name="description"
        />
      </div>

      <Button type="submit" text="Create" className="form__button" />
    </form>
  );
};

export default CreateForm;
