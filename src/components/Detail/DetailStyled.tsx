import styled from "styled-components";

const DetailStyled = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  .detail {
    &__image {
      width: 100%;
      object-fit: cover;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__title {
      padding: 10px 0 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-weight: 700;
      color: #31572c;
      font-size: ${(props) => props.theme.fonts.titleFontSizeXL};
    }

    &__info {
      display: flex;
      flex-direction: column;
      padding-top: 30px;
      gap: 14px;
      font-size: ${(props) => props.theme.fonts.textFontSizeL};

      > li {
        > span {
          display: block;
          width: 100%;
          color: #31572c;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        > svg {
          height: 22px;
          width: 22px;
        }
      }
    }

    &__buttons {
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding: 15px 0 15px;
      background-color: #1d1d1d;
      position: fixed;
      bottom: 0;
      left: 0;

      > * {
        svg {
          height: 40px;
          width: 40px;
          color: white;
        }
      }
    }
  }

  input[type="checkbox"] {
    display: none;
  }
  .wrap-collabsible {
    margin: 1.2rem 0;
  }
  .lbl-toggle {
    display: block;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem;
    color: #ddd;
    background: #132a13;
    cursor: pointer;
    border-radius: 7px;
    transition: all 0.25s ease-out;
  }
  .lbl-toggle:hover {
    color: #fff;
  }
  .lbl-toggle::before {
    content: " ";
    display: inline-block;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid currentColor;
    vertical-align: middle;
    margin-right: 0.7rem;
    transform: translateY(-2px);
    transition: transform 0.2s ease-out;
  }
  .toggle:checked + .lbl-toggle::before {
    transform: rotate(90deg) translateX(-3px);
  }
  .collapsible-content {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.25s ease-in-out;
  }
  .toggle:checked + .lbl-toggle + .collapsible-content {
    max-height: 350px;
  }
  .toggle:checked + .lbl-toggle {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .collapsible-content .content-inner {
    background: #132a1333;
    border-bottom: 1px solid #132a1372;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: 0.5rem 1rem;
  }
  .collapsible-content p {
    margin-bottom: 0;
  }
`;

export default DetailStyled;
