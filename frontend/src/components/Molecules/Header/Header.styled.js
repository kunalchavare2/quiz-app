import styled, { css } from "styled-components";
import { device } from "../../../utils/constant/style-const";

const HeaderStyle = styled.header`
  position: relative;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  display: flex;
  align-items: center;
  z-index: 2000;
  justify-content: center;
  border-bottom: 2px solid #d7dfe9;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 80%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  @media (${device.tablet}) {
    .hamMenu {
      display: none;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
`;
export default HeaderStyle;

export const HeaderItemWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const HeaderNavStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 2000;
  background-color: white;
  flex-direction: column;
  ${HeaderItemWrapperStyle}
  gap: 1.5rem;
  & p {
    font-size: 1rem;
  }

  &.open {
    display: flex;
  }

  &.close {
    display: none;
  }

  @media (${device.tablet}) {
    position: unset;
    flex-direction: row;

    &.close {
      display: flex;
    }
    & .closeBtn {
      display: none;
    }
  }
`;
