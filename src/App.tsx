import { Counter } from './features/counter/Counter'
import { AppShell, Header } from '@mantine/core'
import Card from './component/Card'
import Board from './component/Board'
import Game from './component/Game'
import Player from './component/Player'
import { StyledHeaderInner } from './App.styled'

const grid = (len: number) =>
  Array(len)
    .fill('')
    .map((_, j) => ({
      imageUrl: 'images/palm.jpg',
      flipped: Math.random() > 0.5,
      onClick: (e: React.MouseEvent<HTMLLIElement>) => {
        alert(`Clicked ${j}`)
      },
    }))

function App() {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <StyledHeaderInner>
            <Player player="player1" />
            {/* <Turn /> */}
            <div>turno: 0</div>
            <Player player="player2" />
          </StyledHeaderInner>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Game />
    </AppShell>
  )
}

export default App
