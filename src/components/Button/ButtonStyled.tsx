import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: ${(props) => props.theme.border.borderRadiusLarge};
  cursor: pointer;

  :disabled {
    cursor: default;
  }
`;

export default ButtonStyled;
