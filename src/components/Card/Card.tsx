import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { flipCard, game, unlockAllCards } from '../../features/game/gameSlice'
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
  lockAllCards?: boolean
  imageUrl: string
  cardsLength: number
}

const noop = () => {}

const Card = ({ index, flipped, imageUrl, locked, cardsLength }: CardProps) => {
  const dispatch = useAppDispatch()
  const { lockAllCards } = useAppSelector(game)
  const onClick = () => {
    dispatch(flipCard(index))
    dispatch(unlockAllCards())
  }
  const hasClick = !locked && !flipped && !lockAllCards
  return (
    <StyledCard
      flipped={flipped}
      onClick={hasClick ? onClick : noop}
      cardsLength={cardsLength}
    >
      <StyledCardInner flipped={flipped}>
        <StyledCardFront imageUrl={imageUrl} />
        <StyledCardBack />
      </StyledCardInner>
    </StyledCard>
  )
}

export default Card
