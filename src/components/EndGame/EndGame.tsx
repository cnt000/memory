import { Button, SimpleGrid } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { game, resetGame } from '../../features/game/gameSlice'

const EndGame = () => {
  const state = useAppSelector(game)
  const dispatch = useAppDispatch()
  const winner = state.player1 > state.player2 ? 'Player 1' : 'Player 2'
  const odd = state.player1 === state.player2
  const handleNewGame = () => dispatch(resetGame())
  return (
    <SimpleGrid cols={1} style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h1>{odd ? 'PARI!' : `Ha vinto il ${winner}`}</h1>
      <Button onClick={handleNewGame} size={'xl'} style={{ margin: '30px 0' }}>
        New Game
      </Button>
    </SimpleGrid>
  )
}

export default EndGame
