import styled from "styled-components";

const StructureStyled = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.theme.border.borderRadiusXL};
  background-color: ${(props) => props.theme.colour.secondary};
  padding: 1px;
  filter: drop-shadow(2px 4px 6px black);

  .structure {
    &__wrap {
      width: 100%;
      background-color: ${(props) => props.theme.colour.white};
      border-radius: ${(props) => props.theme.border.borderRadiusXL};
      padding: 15px;
    }

    &__image {
      width: 100%;
      object-fit: cover;
      border-radius: ${(props) => props.theme.border.borderRadiusXL};
    }

    &__title {
      padding: 10px 0 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: ${(props) => props.theme.fonts.titleFontSizeM};
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 14px;

      > li {
        > span {
          padding: 0 0 0 15px;
        }

        > svg {
          height: 22px;
          width: 22px;
        }
      }
    }

    &__buttons {
      display: flex;
      justify-content: space-around;
      padding: 30px 0 20px;

      > * {
        > svg {
          height: 40px;
          width: 40px;
          color: white;
        }
      }
    }
  }
`;

export default StructureStyled;
