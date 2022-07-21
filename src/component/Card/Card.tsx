import {
  StyledCard,
  StyledCardFront,
  StyledCardInner,
  StyledCardBack,
} from './Card.styled';

export type CardProps = {
  flipped?: boolean;
  imageUrl: string;
};

const Card = (props: CardProps) => {
  return (
    <StyledCard>
      <StyledCardInner {...props}>
        <StyledCardFront {...props} />
        <StyledCardBack />
      </StyledCardInner>
    </StyledCard>
  );
};

export default Card;
