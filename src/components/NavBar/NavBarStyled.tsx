import styled from "styled-components";

const NavBarStyled = styled.ul`
  background-color: ${(props) => props.theme.colour.secondary};
  display: flex;
  padding: ${(props) => props.theme.padding.mainMobilePadding};
  justify-content: space-around;

  .navbar {
    &__container {
    }

    &__text {
      color: ${(props) => props.theme.colour.white};
      font-size: ${(props) => props.theme.fonts.textFontSizeM};

      &--actual-page {
        text-decoration: underline;
      }
    }
  }
`;

export default NavBarStyled;
