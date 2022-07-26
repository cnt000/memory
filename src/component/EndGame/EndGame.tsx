import { useAppSelector } from '../../app/hooks'
import { game } from '../../features/game/gameSlice'

const EndGame = () => {
  const state = useAppSelector(game)
  const winner = state.player1 > state.player2 ? 'Player 1' : 'Player 2'
  const odd = state.player1 === state.player2
  return <div>{odd ? 'PARI!' : `Ha vinto il ${winner}`}</div>
}

export default EndGame
