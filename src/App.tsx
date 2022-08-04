import { AppShell } from '@mantine/core'
import Header from './component/Header'
import Game from './component/Game'

function App() {
  return (
    <AppShell
      padding="md"
      header={<Header />}
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
