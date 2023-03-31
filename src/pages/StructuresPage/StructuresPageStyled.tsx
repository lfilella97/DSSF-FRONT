import styled from "styled-components";

const StructuresStyled = styled.div`
  .structures {
    &__title {
      color: ${(props) => props.theme.colour.main};
      font-size: ${(props) => props.theme.fonts.titleFontSizeXL};
      width: 100%;
    }

    &__load-more {
      width: 100%;
      display: flex;
      justify-content: center;
      > button {
        border-radius: 25px;
        background-color: ${(props) => props.theme.colour.main};
        font-size: ${(props) => props.theme.fonts.titleFontSizeM};
        color: ${(props) => props.theme.colour.white};
        padding: 10px 10px;
        border: 1px solid white;
        width: 50%;
      }
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
