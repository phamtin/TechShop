import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { respondTo } from "../../styled";

const styledLink = css`
  padding: 10px 7px;
  color: rgb(27, 27, 27);
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 19px;
  text-decoration: none;
  cursor: "pointer";
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 20px 70px;

  ${respondTo.smallphone`
    padding: 20px 0 20px 5px;
  `}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 50px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${respondTo.smallphone`
     width: 100%;
  `}
`;

export const Option = styled(Link)`
  ${styledLink}

  &:hover {
    background-color: rgb(248, 248, 248);
  }

  ${respondTo.smallphone`
      padding: 10px 5px;
        font-size: 18px;
  `}
`;
