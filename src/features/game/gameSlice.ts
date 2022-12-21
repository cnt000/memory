import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { peppa } from '../../confs/images'

export type Move = {}

export type Card = {
  index: number
  flipped?: boolean
  locked?: boolean
  imageUrl: string
  cardsLength: number
}

export interface GameState {
  gameState: 'notStarted' | 'started' | 'ended'
  player1: number
  player2: number
  turn: number | ''
  gameId: string
  activePlayer: 'player1' | 'player2' | ''
  gameStartedAt: number
  moves: Move[]
  activeCards: number[]
  cards: Card[] | []
  lockAllCards: boolean
}

const images = peppa.map((url) => `images/${url}`)

const initialState: GameState = {
  gameState: 'notStarted',
  player1: 0,
  player2: 0,
  turn: '',
  gameId: '',
  activePlayer: '',
  gameStartedAt: 0,
  moves: [],
  activeCards: [], // every click, add here if empty or length = 2 else
  cards: [], // new game, fill this
  lockAllCards: false,
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

const generateCardsSetup = (payload: number, images: string[]) => {
  const uniqueImages = payload / 2
  const unique = Array(uniqueImages)
    .fill('')
    .map((_, i) => ({
      imageUrl: images[i % images.length],
      index: i,
    }))
  return shuffle([...unique, ...unique]).map((card, i, cards) => ({
    ...card,
    index: i,
    cardsLength: cards.length,
  }))
}

function shuffle(array: { index: number; imageUrl: string }[]) {
  array.sort(() => Math.random() - 0.5)
  return array
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    createGame: (state, action: PayloadAction<number>) => {
      state.cards = generateCardsSetup(action.payload, images)
      state.turn = 0
      state.gameId = `game-${Date.now()}`
      state.activePlayer = 'player1'
      state.gameStartedAt = Date.now()
      state.gameState = 'started'
    },
    flipCard: (state, action: PayloadAction<number>) => {
      if (state.activeCards.length < 2) {
        state.lockAllCards = true
        const selectedIndex = action.payload
        if (state.cards[selectedIndex]) {
          state.cards[selectedIndex].flipped = true
        }
        state.activeCards.push(selectedIndex)
        state.moves.push(selectedIndex)
      }
    },
    lockCards: (
      state,
      action: PayloadAction<{ first: number; second: number }>
    ) => {
      if (
        typeof action.payload?.first !== 'undefined' &&
        typeof action.payload?.second != 'undefined'
      ) {
        state.cards[action.payload.first].locked = true
        state.cards[action.payload.second].locked = true
        if (state.activePlayer !== '') {
          state[state.activePlayer] += 1
        }
        state.activeCards = []
        // TODO serve?
        state.lockAllCards = false
      }
    },
    resetActive: (
      state,
      action: PayloadAction<{ first: number; second: number }>
    ) => {
      // TODO serve?
      if (
        typeof action.payload?.first !== 'undefined' &&
        typeof action.payload?.second !== 'undefined'
      ) {
        state.activeCards.forEach((card) => {
          state.cards[card].flipped = false
        })
        state.activeCards = []
        state.lockAllCards = false
      }
    },
    changeTurn: (state) => {
      state.activePlayer =
        state.activePlayer === 'player1' ? 'player2' : 'player1'
      state.turn = (state.turn || 0) + 1
    },
    endGame: (state) => {
      state.gameState = 'ended'
    },
    resetGame: () => initialState,
    unlockAllCards: (state) => {
      state.lockAllCards = false
    },
    lockAllCards: (state) => {
      state.lockAllCards = true
    },
  },
})

export const {
  createGame,
  flipCard,
  lockCards,
  resetActive,
  changeTurn,
  endGame,
  resetGame,
  unlockAllCards,
  lockAllCards,
} = gameSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const turn = (state: RootState) => state.game.turn
export const cards = (state: RootState) => state.game.cards
export const activeCards = (state: RootState) => state.game.activeCards
export const game = (state: RootState) => state.game

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState())
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount))
//     }
//   }

export default gameSlice.reducer
