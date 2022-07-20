import styled from "@emotion/styled";
import { CardProps } from "./Card";

export const StyledCard = styled.li`
  list-style: none;
  border: 3px solid #5e4065;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/6;
  opacity: 0.8;
  transition: opacity 0.3s ease-in;
  box-shadow: 4px 4px 4px #5e406577;
`;

export const StyledBack = styled.div`
  height: 100%;
  background-color: #e5e5f7;
  background-image: linear-gradient(
      30deg,
      #5e4065 12%,
      transparent 12.5%,
      transparent 87%,
      #5e4065 87.5%,
      #5e4065
    ),
    linear-gradient(
      150deg,
      #5e4065 12%,
      transparent 12.5%,
      transparent 87%,
      #5e4065 87.5%,
      #5e4065
    ),
    linear-gradient(
      30deg,
      #5e4065 12%,
      transparent 12.5%,
      transparent 87%,
      #5e4065 87.5%,
      #5e4065
    ),
    linear-gradient(
      150deg,
      #5e4065 12%,
      transparent 12.5%,
      transparent 87%,
      #5e4065 87.5%,
      #5e4065
    ),
    linear-gradient(
      60deg,
      #5e406577 25%,
      transparent 25.5%,
      transparent 75%,
      #5e406577 75%,
      #5e406577
    ),
    linear-gradient(
      60deg,
      #5e406577 25%,
      transparent 25.5%,
      transparent 75%,
      #5e406577 75%,
      #5e406577
    );
  background-size: 20px 35px;
  background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
`;

export const StyledFront = styled.div<CardProps>`
  height: 100%;
  background: url(${(props) => props.imageUrl}) no-repeat;
  background-size: cover;
  opacity: 1;
`;
