import { useAppDispatch } from '../../app/hooks'
import { flipCard } from '../../features/game/gameSlice'
import {
  StyledCard,
  StyledCardFront,
  StyledCardInner,
  StyledCardBack,
} from './Card.styled'

export type CardProps = {
  index: number
  flipped?: boolean
  locked?: boolean
  imageUrl: string
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const noop = () => {}

const Card = ({ index, flipped, imageUrl, locked }: CardProps) => {
  const dispatch = useAppDispatch()
  const onClick = () => dispatch(flipCard(index))
  return (
    <StyledCard onClick={locked ? noop : onClick}>
      <StyledCardInner flipped={flipped}>
        <StyledCardFront imageUrl={imageUrl} />
        <StyledCardBack />
      </StyledCardInner>
    </StyledCard>
  )
}

export default Card
