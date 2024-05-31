import styled from "styled-components";
import { fontWeight } from "../../../utils/constant/style-const";

export const CardStyle = styled.div`
  border-radius: 3px;
  border: 1px solid #d7dfe9;
  padding: 1.5rem;
  padding-bottom: 0;
  width: 100%;
  max-width: 360px;

  .card-link {
    display: inline-block;
    margin: 1rem 0;
    font-size: 0.9rem;
    font-weight: ${fontWeight.regular};
    line-height: 24px;
    text-align: left;
    color: "#0B69FF";
  }

  .card-description {
    font-size: 0.9rem;
    font-weight: ${fontWeight.regular};
    line-height: 24px;
    text-align: left;
    color: #7e858e;
    height: 4.8rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @supports (-webkit-line-clamp: 3) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;

export const CardHeaderStyle = styled.div`
  display: flex;
  gap: 1rem;

  .card-head {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .card-image {
    border: 2px solid #d7dfe9;
    width: 3rem;
    aspect-ratio: 1/1;
    border-radius: 3px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 1/1;
    }
  }
`;
