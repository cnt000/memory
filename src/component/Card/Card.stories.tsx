import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactNode } from 'react';

import Card from './Card';

export default {
  title: 'Memory/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Wrapper = ({ children }: { children?: ReactNode }) => (
  <div style={{ width: '200px' }}>{children}</div>
);

const Template: ComponentStory<typeof Card> = (args) => (
  <Wrapper>
    <Card {...args} />
  </Wrapper>
);

const baseArgs = {
  imageUrl: 'https://source.unsplash.com/random',
};

export const Back = Template.bind({});
Back.args = baseArgs;

export const Front = Template.bind({});
Front.args = { ...baseArgs, flipped: true };
