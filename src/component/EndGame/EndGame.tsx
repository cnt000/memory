import { Button } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { game, resetGame } from '../../features/game/gameSlice'

const EndGame = () => {
  const state = useAppSelector(game)
  const dispatch = useAppDispatch()
  const winner = state.player1 > state.player2 ? 'Player 1' : 'Player 2'
  const odd = state.player1 === state.player2
  const handleNewGame = () => dispatch(resetGame())
  return (
    <>
      <div>{odd ? 'PARI!' : `Ha vinto il ${winner}`}</div>
      <Button onClick={handleNewGame}>New Game</Button>
    </>
  )
}

export default EndGame
