import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import Board from './Board'

export default {
  title: 'Memory/Board',
  component: Board,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Board>

const Wrapper = ({ children }: { children?: ReactNode }) => (
  <div style={{ width: '90vw', margin: '0 auto' }}>{children}</div>
)

const Template: ComponentStory<typeof Board> = (args) => (
  <Provider store={store}>
    <Wrapper>
      <Board {...args} />
    </Wrapper>
  </Provider>
)

const grid = (len: number) =>
  Array(len)
    .fill('')
    .map((_, i) => ({
      index: i,
      imageUrl: 'images/basic/palm.jpg',
      flipped: Math.random() > 0.5,
      cardsLength: len,
    }))

export const Small = Template.bind({})
Small.args = { cards: grid(12) }

export const Medium = Template.bind({})
Medium.args = { cards: grid(24) }

export const Big = Template.bind({})
Big.args = { cards: grid(48) }
