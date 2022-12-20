import { Header as HeaderMantine } from '@mantine/core'
import Turn from '../Turn'
import Player from '../Player'
import { StyledHeaderInner } from './Header.styled'
import { useAppSelector } from '../../app/hooks'
import { game } from '../../features/game/gameSlice'

const Header = () => {
  const state = useAppSelector(game)
  return (
    <HeaderMantine height={60} p="xs">
      <StyledHeaderInner>
        {state.gameState === 'notStarted' && (
          <>
            <div></div>
            <h1>Nora's Memory Game</h1>
            <div></div>
          </>
        )}
        {state.gameState === 'started' && (
          <>
            <Player player="player1" />
            <Turn />
            <Player player="player2" right={true} />
          </>
        )}
        {state.gameState === 'ended' && null}
      </StyledHeaderInner>
    </HeaderMantine>
  )
}

export default Header
