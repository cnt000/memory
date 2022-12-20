import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import Card from './Card'

export default {
  title: 'Memory/Card',
  component: Card,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Card>

const Wrapper = ({ children }: { children?: ReactNode }) => (
  <div style={{ width: '200px', margin: '0 auto' }}>{children}</div>
)

const Template: ComponentStory<typeof Card> = (args) => (
  <Provider store={store}>
    <Wrapper>
      <Card {...args} />
    </Wrapper>
  </Provider>
)

const baseArgs = {
  index: 0,
  imageUrl: 'images/basic/palm.jpg',
  flipped: false,
  locked: false,
  lockAllCards: false,
}

export const Back = Template.bind({})
Back.args = baseArgs

export const Front = Template.bind({})
Front.args = { ...baseArgs, flipped: true }
