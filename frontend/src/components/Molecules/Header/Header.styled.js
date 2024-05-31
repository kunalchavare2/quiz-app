import styled, { css } from "styled-components";

const HeaderStyle = styled.header`
  position: relative;
  width: 100%;
  padding: 1rem 0;
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
  ${HeaderItemWrapperStyle}
  gap: 1.5rem;
  & p {
    font-size: 1rem;
  }
`;
