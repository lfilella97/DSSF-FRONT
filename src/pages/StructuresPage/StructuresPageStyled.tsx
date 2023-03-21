import styled from "styled-components";

const StructuresStyled = styled.div`
  .structures {
    &__title {
      padding: 20px 0;
      color: ${(props) => props.theme.colour.main};
    }

    &__notFound {
      padding-top: 30px;
    }
  }

  ul {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    gap: 10px;
  }

  .structures > li {
    display: flex;
    justify-content: center;
    padding: 0 0 20px;
  }
`;

export default StructuresStyled;
