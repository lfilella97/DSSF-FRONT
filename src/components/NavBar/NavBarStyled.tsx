import styled from "styled-components";

const NavBarStyled = styled.ul`
  background-color: ${(props) => props.theme.colour.secondary};
  display: flex;
  padding: ${(props) => props.theme.padding.mainMobilePadding};
  justify-content: space-between;

  .navbar {
    &__text {
      display: block;
      width: 100%;
      color: ${(props) => props.theme.colour.white};
      font-size: ${(props) => props.theme.fonts.textFontSizeM};
    }
  }

  .active {
    text-decoration: underline;
  }
`;

export default NavBarStyled;
