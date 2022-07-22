import { Counter } from './features/counter/Counter'
import { AppShell, Header } from '@mantine/core'
import Card from './component/Card'

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
      <div style={{ width: '200px' }}>
        <Card imageUrl="https://source.unsplash.com/random" />
        <Counter />
      </div>
    </AppShell>
  )
}

export default App
