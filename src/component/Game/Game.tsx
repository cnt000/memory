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
  endGame,
  lockAllCards,
  unlockAllCards,
} from '../../features/game/gameSlice'
import Board from '../Board'
import EndGame from '../EndGame'
import NewGame from '../NewGame'

const Game = () => {
  const state = useAppSelector(game)
  const cardsSetup = useAppSelector(cards) // TODO use game
  const active = useAppSelector(activeCards) // TODO use game
  const dispatch = useAppDispatch()

  useEffect(() => {
    const [first, second] = active
    if (cardsSetup[first]?.imageUrl && cardsSetup[second]?.imageUrl) {
      if (cardsSetup[first]?.imageUrl === cardsSetup[second]?.imageUrl) {
        dispatch(lockCards({ first, second }))
        dispatch(changeTurn())
      } else {
        dispatch(lockAllCards())
        setTimeout(() => {
          dispatch(resetActive({ first, second }))
          dispatch(changeTurn())
          dispatch(unlockAllCards())
        }, 1000)
      }
    }
  }, [active])

  useEffect(() => {
    const lockedCards = state.cards.filter((card) => card.locked)
    const isFinished =
      lockedCards.length > 1 && lockedCards.length === state.cards.length
    if (isFinished) {
      setTimeout(() => {
        dispatch(endGame())
      }, 1000)
    }
  }, [active])

  return (
    <>
      {state.gameState === 'notStarted' && <NewGame />}
      {state.gameState === 'started' && <Board cards={cardsSetup} />}
      {state.gameState === 'ended' && <EndGame />}
    </>
  )
}

export default Game
