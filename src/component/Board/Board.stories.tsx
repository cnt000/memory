import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ReactNode } from 'react'

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
  <Wrapper>
    <Board {...args} />
  </Wrapper>
)

const grid = (len: number) =>
  Array(len)
    .fill('')
    .map((_, i) => ({
      index: i,
      imageUrl: 'images/palm.jpg',
      flipped: Math.random() > 0.5,
      onClick: (e: React.MouseEvent<HTMLLIElement>) => {
        action(`Clicked ${i}`)(e)
      },
    }))

export const Small = Template.bind({})
Small.args = { cards: grid(12) }

export const Medium = Template.bind({})
Medium.args = { cards: grid(24) }

export const Big = Template.bind({})
Big.args = { cards: grid(48) }
