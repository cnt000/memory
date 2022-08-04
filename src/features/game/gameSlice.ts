import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export type Move = {}

export type Card = {
  index: number
  flipped?: boolean
  locked?: boolean
  imageUrl: string
}

const peppa = [
  'Candy_Cat.webp',
  'Captain_Dog_ID.webp',
  'Daddy_Pig-0.webp',
  'Daddy_Rabbit-0.webp',
  'DannyDog.webp',
  'Freddy_Fox.webp',
  'Georgecerdo.webp',
  'Gerald_Giraffe.webp',
  'Grandpa_Pig-0.webp',
  'Granny_Pig_%28Thumbnail%29.webp',
  'Imageedit_2_8838419266.webp',
  'Imageedit_5_9473473591.webp',
  'Mummy_Dog-0.webp',
  'Mummy_Pig.webp',
  'Peggi_Panda.webp',
  'PicsArt_01-20-11.24.03.webp',
  'PicsArt_01-20-11.26.23.webp',
  'PicsArt_01-20-11.56.38.webp',
  'PicsArt_01-21-05.31.05.webp',
  'PicsArt_01-21-05.56.02.webp',
  'PicsArt_01-21-06.01.59.webp',
  'Pippa.webp',
  'SuzySheep.webp',
  'Wendy_Wolf.webp',
  'ZoeZebra.webp',
  'mamma-klef.webp',
  'molly-mouse.webp',
  'opa-klef.webp',
  'opa-mummel.webp',
].map((url) => `peppa-pig-cards/${url}`)

const basic = [
  'ali-karimiboroujeni-6cVU1DcG5dA-unsplash.jpg',
  'artem-mihailov-YBzGaC4sak4-unsplash.jpg',
  'fatane-rahimi-2cXZQ862gws-unsplash.jpg',
  'jasmin-chew-c6AU3Oe2inc-unsplash.jpg',
  'komarov-egor-tA4JkT_21N8-unsplash.jpg',
  'max-griss-4z8BkcEwwWM-unsplash.jpg',
  'palm.jpg',
  'vicky-ng-yIh0i6TYGrs-unsplash.jpg',
].map((url) => `basic/${url}`)

const images = peppa.map((url) => `images/${url}`)

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

function shuffle(array: { index: number; imageUrl: string }[]) {
  // TODO IF DEBUG
  array.sort(() => Math.random() - 0.5)
  return array
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    createGame: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const unique = Array(action.payload / 2)
        .fill('')
        .map((_, i) => ({
          imageUrl: images[i % 8],
          index: i,
        }))
      const allCards = [...unique, ...unique]
      state.cards = shuffle(allCards).map((card, i) => ({
        ...card,
        index: i,
      }))
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
        state.lockAllCards = false
      }
    },
    resetActive: (
      state,
      action: PayloadAction<{ first: number; second: number }>
    ) => {
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
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading'
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle'
  //       state.value += action.payload
  //     })
  //     .addCase(incrementAsync.rejected, (state) => {
  //       state.status = 'failed'
  //     })
  // },
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
