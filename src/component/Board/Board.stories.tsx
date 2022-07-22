import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ReactNode } from 'react'

import Board from './Board'

export default {
  title: 'Memory/Board',
  component: Board,
} as ComponentMeta<typeof Board>

const Wrapper = ({ children }: { children?: ReactNode }) => (
  <div style={{ width: '90vw', margin: '0 auto' }}>{children}</div>
)

const Template: ComponentStory<typeof Board> = (args) => (
  <Wrapper>
    <Board {...args} />
  </Wrapper>
)

const grid = (cols: number, rows: number) =>
  Array(cols)
    .fill('')
    .map((_) =>
      Array(rows)
        .fill('')
        .map((_) => 'https://picsum.photos/200/300')
    )

export const Small = Template.bind({})
Small.args = { setup: grid(4, 3) }

export const Medium = Template.bind({})
Medium.args = { setup: grid(6, 4) }

export const Big = Template.bind({})
Big.args = { setup: grid(8, 6) }
