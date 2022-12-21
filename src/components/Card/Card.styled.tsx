import styled from '@emotion/styled'
import { CardProps } from './Card'
import { rows } from '../../confs/setup'

export const StyledCard = styled.li<Partial<CardProps>>`
  list-style: none;
  cursor: ${(props) => (Boolean(props.flipped) ? 'initial' : 'pointer')};
  aspect-ratio: ${(props) => rows[props.cardsLength || 12].aspectRatio};
  @media (orientation: landscape) {
    aspect-ratio: 4/4;
  }
  perspective: 1000px;
`

export const StyledCardInner = styled.div<Partial<CardProps>>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
  animation: ${(props) =>
    typeof props.flipped === 'undefined'
      ? 'none'
      : props.flipped
      ? 'cardFlip 0.275s forwards linear;'
      : 'cardUnFlip 0.275s forwards linear;'};

  @keyframes cardFlip {
    0% {
      transform: rotateZ(0deg) rotateY(180deg);
    }
    50% {
      transform: rotateZ(-10deg) rotateY(90deg);
    }
    100% {
      transform: rotateZ(0deg) rotateY(0deg);
    }
  }

  @keyframes cardUnFlip {
    0% {
      transform: rotateZ(0deg) rotateY(0deg);
    }
    50% {
      transform: rotateZ(-10deg) rotateY(90deg);
    }
    100% {
      transform: rotateZ(0deg) rotateY(180deg);
    }
  }
`

export const StyledCardFront = styled.div<Partial<CardProps>>`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: url(${(props) => props.imageUrl}) no-repeat;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #5e4065;
`

export const StyledCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #5e4065;
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
`
