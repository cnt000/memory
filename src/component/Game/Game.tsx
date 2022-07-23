import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  cards,
  createGame,
  activeCards,
  lockCards,
  resetActive,
  game,
} from '../../features/game/gameSlice'
import Board from '../Board'

const Game = () => {
  const cardsSetup = useAppSelector(cards)
  const state = useAppSelector(game)
  const active = useAppSelector(activeCards)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const [first, second] = active
    if (cardsSetup[first]?.imageUrl && cardsSetup[second]?.imageUrl) {
      if (cardsSetup[first]?.imageUrl === cardsSetup[second]?.imageUrl) {
        dispatch(lockCards({ first, second }))
      } else {
        setTimeout(() => {
          dispatch(resetActive({ first, second }))
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
        <button onClick={startGameHanlder}>start game</button>
      )}
      {state.gameState === 'started' && <Board cards={cardsSetup} />}
      {state.gameState === 'ended' && <p>winner is: ......</p>}
    </>
  )
}

export default Game
