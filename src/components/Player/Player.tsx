import { useAppSelector } from '../../app/hooks'
import { game } from '../../features/game/gameSlice'
import { StyledPlayer, StyledPlayerEfx, StyledWrapper } from './Player.styled'

type PlayerProps = {
  player: 'player1' | 'player2'
  right?: boolean
}

const playerNames = {
  player1: 'Player 1',
  player2: 'Player 2',
}

const Player = ({ player, right }: PlayerProps) => {
  const state = useAppSelector(game)
  const highlighted = state.activePlayer === player
  return (
    <StyledWrapper>
      <StyledPlayer right={right} highlighted={highlighted}>
        {Boolean(highlighted) && '-> '}
        {playerNames[player]} ({state[player]})
      </StyledPlayer>
      <StyledPlayerEfx
        highlighted={highlighted}
        right={right}
      ></StyledPlayerEfx>
    </StyledWrapper>
  )
}

export default Player
