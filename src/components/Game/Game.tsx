import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { gameEndedDuration, resetDuration } from '../../confs/setup'
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
  const dispatch = useAppDispatch()
  const state = useAppSelector(game)
  const cardsSetup = state.cards
  const active = state.activeCards

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
        }, resetDuration)
      }
    }
  }, [active, cardsSetup, dispatch])

  useEffect(() => {
    const lockedCards = state.cards.filter((card) => card.locked)
    const isFinished =
      lockedCards.length > 1 && lockedCards.length === state.cards.length
    if (isFinished) {
      setTimeout(() => {
        dispatch(endGame())
      }, gameEndedDuration)
    }
  }, [active, dispatch, state.cards])

  return (
    <>
      {state.gameState === 'notStarted' && <NewGame />}
      {state.gameState === 'started' && <Board cards={cardsSetup} />}
      {state.gameState === 'ended' && <EndGame />}
    </>
  )
}

export default Game
