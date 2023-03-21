import styled from "styled-components";

const FilterStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 35px;
  gap: 20px;

  .form {
    &__text {
      font-size: ${(props) => props.theme.fonts.textFontSizeL};
      display: block;
    }

    &__field {
      font-size: ${(props) => props.theme.fonts.textFontSizeL};
      border-radius: ${(props) => props.theme.border.borderRadiusLarge};
      padding: ${(props) => props.theme.padding.mainMobilePadding};
    }
  }
`;

export default FilterStyled;
