import styled from "styled-components";
import { device } from "../../../utils/constant/style-const";

export const PaginationStyle = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (${device.mobileL}) {
    padding: 10px 60px;
    flex-wrap: nowrap;
  }
`;
