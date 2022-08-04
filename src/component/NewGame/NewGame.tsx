import { Button, SimpleGrid } from '@mantine/core'
import { useAppDispatch } from '../../app/hooks'
import { createGame } from '../../features/game/gameSlice'

const NewGame = () => {
  const dispatch = useAppDispatch()
  return (
    <SimpleGrid cols={1} style={{ width: '500px', margin: '50px auto' }}>
      <Button
        size={'xl'}
        style={{ margin: '30px 0' }}
        onClick={() => dispatch(createGame(12))}
      >
        3x4
      </Button>
      <Button
        size={'xl'}
        style={{ margin: '30px 0' }}
        onClick={() => dispatch(createGame(24))}
      >
        4x6
      </Button>
      <Button
        size={'xl'}
        style={{ margin: '30px 0' }}
        onClick={() => dispatch(createGame(48))}
      >
        6x8
      </Button>
    </SimpleGrid>
  )
}

export default NewGame
