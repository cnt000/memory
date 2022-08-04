import { useAppSelector } from '../../app/hooks'
import { game } from '../../features/game/gameSlice'

const Turn = () => {
  const state = useAppSelector(game)
  return (
    <div>
      <div>Turno: {state.turn === '' ? '-' : state.turn}</div>
      {/* <div> Active cards: {state.activeCards.join(',')}</div>
      <div>Moves: {state.moves.join(',')}</div> */}
    </div>
  )
}

export default Turn
