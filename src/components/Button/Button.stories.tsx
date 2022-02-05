import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from './Button';

export default {
	component: Button,
	title: 'Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
	// eslint-disable-next-line no-console
	onClick: () => console.log('clicked'),
	text: '+ Add Feedback',
	type: 'secondary',
};
