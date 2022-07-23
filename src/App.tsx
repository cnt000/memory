import { Counter } from './features/counter/Counter'
import { AppShell, Header } from '@mantine/core'
import Card from './component/Card'
import Board from './component/Board'
import Game from './component/Game'

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
          {/* Header content */}
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
      {/* <div style={{ width: '200px' }}>
        <Card
          onClick={() => alert(123)}
          imageUrl="https://source.unsplash.com/random"
        />
      </div>
      <Board cards={grid(12)} />
      <Counter /> */}
      <Game />
    </AppShell>
  )
}

export default App
