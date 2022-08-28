import { AppShell } from '@mantine/core'
import Header from './components/Header'
import Game from './components/Game'

function App() {
  return (
    <AppShell
      fixed
      padding="md"
      header={<Header />}
      styles={(theme) => ({
        main: {
          colorScheme: 'dark',
        },
      })}
    >
      <Game />
    </AppShell>
  )
}

export default App
