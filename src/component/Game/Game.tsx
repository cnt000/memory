import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  cards,
  createGame,
  activeCards,
  lockCards,
  resetActive,
  game,
  changeTurn,
} from '../../features/game/gameSlice'
import Board from '../Board'
import NewGame from '../NewGame'

const Game = () => {
  const cardsSetup = useAppSelector(cards) // TODO use game
  const active = useAppSelector(activeCards) // TODO use game
  const state = useAppSelector(game)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const [first, second] = active
    if (cardsSetup[first]?.imageUrl && cardsSetup[second]?.imageUrl) {
      if (cardsSetup[first]?.imageUrl === cardsSetup[second]?.imageUrl) {
        dispatch(lockCards({ first, second }))
        dispatch(changeTurn())
      } else {
        setTimeout(() => {
          dispatch(resetActive({ first, second }))
          dispatch(changeTurn())
        }, 1000)
      }
    }
  }, [active])

  const startGameHanlder = () => {
    dispatch(createGame())
  }

  return (
    <>
      {state.gameState === 'notStarted' && (
        <>
          <NewGame />
          <button onClick={startGameHanlder}>start game</button>
        </>
      )}
      {state.gameState === 'started' && <Board cards={cardsSetup} />}
      {state.gameState === 'ended' && <p>winner is: ......</p>}
    </>
  )
}

export default Game
