import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.gap.clickableGap};
  width: 100%;
  .form {
    width: 100%;
    &__fields {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 350px;
      width: 100%;
    }

    &__title {
      color: ${(props) => props.theme.colour.main};
      font-size: ${(props) => props.theme.fonts.titleFontSizeXL};
      padding: ${(props) => props.theme.padding.mainMobilePadding} 0;
      font-weight: 800;
    }

    &__text {
      font-size: ${(props) => props.theme.fonts.textFontSizeL};
      display: block;
    }

    &__field {
      font-size: ${(props) => props.theme.fonts.textFontSizeL};
      border-radius: ${(props) => props.theme.border.borderRadiusLarge};
      padding: ${(props) => props.theme.padding.mainMobilePadding};
    }

    &__button {
      width: 50%;
      height: 40px;
      background-color: ${(props) => props.theme.colour.main};
      font-size: ${(props) => props.theme.fonts.textFontSizeM};
      color: ${(props) => props.theme.colour.white};
    }
  }

  @media (min-width: 800px) {
    width: 500px;
    border: 1px solid ${(props) => props.theme.colour.secondary};
    background-color: ${(props) => props.theme.colour.brokenWhite};
    border-radius: ${(props) => props.theme.border.borderRadiusLarge};
    padding: ${(props) => props.theme.padding.mainDesktopPadding};
    gap: ${(props) => props.theme.padding.secondaryDesktopPading};
    .form {
      &__title {
        align-self: center;
      }
    }
  }
`;

export default LoginFormStyled;
