import styled from "styled-components";
import { color, device, fontWeight } from "../../../utils/constant/style-const";

export const TabGroupStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (${device.mobileL}) {
    flex-wrap: nowrap;
  }
`;

export const Tab = styled.button`
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: ${fontWeight.semiBold};
  line-height: 24px;
  text-align: center;
  padding: 10px 30px;
  cursor: pointer;
  border: 0;
  outline: 0;
  background-color: #d7dfe93d;
  border: 1px solid #d7dfe9;
  ${({ active }) =>
    active &&
    `color:${color.white};
   background-color: #0B69FF;
    opacity: 1;
  `}

  @media (${device.tablet}) {
    padding: 10px 60px;
  }
`;
