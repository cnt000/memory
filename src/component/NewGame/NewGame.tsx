import { Button, SimpleGrid } from '@mantine/core'

const NewGame = () => {
  return (
    <SimpleGrid cols={3}>
      <Button>3x4</Button>
      <Button>4x6</Button>
      <Button>6x8</Button>
    </SimpleGrid>
  )
}

export default NewGame
