import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  cards,
  createGame,
  activeCards,
  lockCards,
  resetActive,
} from '../../features/game/gameSlice'
import Board from '../Board'

const Game = () => {
  const cardsSetup = useAppSelector(cards)
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

  useEffect(() => {
    dispatch(createGame())
  }, [])

  return <Board cards={cardsSetup} />
}

export default Game
