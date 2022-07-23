import { StyledBoard } from './Board.styled'

import Card from '../Card'
import { CardProps } from '../Card/Card'

export type BoardProps = {
  cards: CardProps[]
}

const Board = ({ cards }: BoardProps) => (
  <StyledBoard cards={cards}>
    {cards.map((card, i) => (
      <Card key={`${i}_${card.imageUrl}`} {...card} />
    ))}
  </StyledBoard>
)

export default Board
