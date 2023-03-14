import styled from "styled-components";

const StructuresStyled = styled.div`
  width: 100%;
  height: 100%;

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
