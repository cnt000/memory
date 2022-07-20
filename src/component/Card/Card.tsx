import { StyledCard, StyledBack, StyledFront } from "./Card.styled";

export type CardProps = {
  flipped?: boolean;
  imageUrl: string;
};

const Card = ({ flipped, imageUrl }: CardProps) => {
  return (
    <StyledCard>
      {flipped ? <StyledFront imageUrl={imageUrl} /> : <StyledBack />}
    </StyledCard>
  );
};

export default Card;
