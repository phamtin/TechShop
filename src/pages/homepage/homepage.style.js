import styled from "styled-components";
import { respondTo } from "../../styled";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 70px;

  ${respondTo.smallphone`
    padding: 0;
  `}
`;
