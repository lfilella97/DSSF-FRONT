import styled from "styled-components";

const FilterStyled = styled.select`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 35px;
  gap: 20px;
  font-size: ${(props) => props.theme.fonts.textFontSizeL};
  border-radius: ${(props) => props.theme.border.borderRadiusLarge};
  padding: ${(props) => props.theme.padding.mainMobilePadding};
  margin: 30px 0 40px;
`;

export default FilterStyled;
