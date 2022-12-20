import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import EndGame from './EndGame'

export default {
  title: 'Memory/EndGame',
  component: EndGame,
} as ComponentMeta<typeof EndGame>

const Wrapper = ({ children }: { children?: ReactNode }) => (
  <div style={{ width: '200px', margin: '0 auto' }}>{children}</div>
)

const Template: ComponentStory<typeof EndGame> = (args) => (
  <Provider store={store}>
    <Wrapper>
      <EndGame />
    </Wrapper>
  </Provider>
)

export const Odd = Template.bind({})
Odd.args = {}
