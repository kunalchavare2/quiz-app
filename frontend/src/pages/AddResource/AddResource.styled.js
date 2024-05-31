import styled from "styled-components";
import { device, fontWeight } from "../../utils/constant/style-const";

export const AddResourceStyle = styled.div`
  display: flex;
  height: calc(100vh);
  position: relative;
  align-self: stretch;

  .add-form {
    position: absolute;
    flex: 1;
    height: 100%;
    width: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-image {
    position: absolute;
    width: 100%;
    flex: 1;
    height: 100%;
    background-image: ${(props) => `url(${props.imgUrl})`};
    background-position: center;
    background-size: cover;
    background-color: linear-gradient(314deg, #01fbba, #b101fb);
  }

  .back-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: absolute;
    top: 2rem;
    z-index: 1000;
    left: 2rem;
    font-size: 1rem;
    color: #171f46;

    & > span {
      font-size: 0.8rem;
      font-weight: ${fontWeight.regular};
      line-height: 16px;
      text-align: left;
      color: #7e858e;
    }
  }

  @media (${device.mobileM}) {
    height: calc(100vh - 72px);
  }

  @media (${device.laptop}) {
    .add-form {
      position: unset;
    }

    .add-image {
      position: unset;
    }
  }
`;
