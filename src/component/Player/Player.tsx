import { useAppSelector } from '../../app/hooks'
import { game } from '../../features/game/gameSlice'
import { StyledPlayer } from './Player.styled'

type PlayerProps = {
  player: 'player1' | 'player2'
}

const playerNames = {
  player1: 'Player 1',
  player2: 'Player 2',
}

const Player = ({ player }: PlayerProps) => {
  const state = useAppSelector(game)
  const highlighted = state.activePlayer === player
  return (
    <StyledPlayer highlighted={highlighted}>
      {Boolean(highlighted) && '->'}
      {playerNames[player]} ({state[player]})
    </StyledPlayer>
  )
}

export default Player
