import styled from "styled-components";
import { respondTo } from "../../styled";

export const OrdersContainer = styled.div`
  padding: 0 70px;
  font-family: "Open Sans Condensed", sans-serif;

  ${respondTo.smallphone`
    padding: 0 15px
  `}
`;

export const TitleContainer = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
`;
