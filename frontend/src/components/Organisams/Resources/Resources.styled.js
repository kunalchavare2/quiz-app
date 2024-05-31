import styled from "styled-components";
import { device } from "../../../utils/constant/style-const";

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const ResourcesStyle = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const ProductGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  gap: 2rem;
  margin: 0 auto;
  justify-items: center;
  align-items: center;

  @media (${device.mobileL}) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
`;
