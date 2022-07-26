import { useAppSelector } from '../../app/hooks'
import { game } from '../../features/game/gameSlice'

const Turn = () => {
  const state = useAppSelector(game)
  return <div>Turno: {state.turn === '' ? '-' : state.turn}</div>
}

export default Turn
