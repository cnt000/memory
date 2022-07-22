import { StyledBoard } from './Board.styled'

import Card from '../Card'

export type BoardProps = {
  setup: string[][]
}

const Board = ({ setup }: BoardProps) => (
  <StyledBoard setup={setup}>
    {setup.map((cols) => cols.map((row) => <Card imageUrl={row} />))}
  </StyledBoard>
)

export default Board
