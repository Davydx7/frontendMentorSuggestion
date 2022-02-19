import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Vote from './Vote';

export default {
	component: Vote,
	title: 'Vote',
} as ComponentMeta<typeof Vote>;

const Template: ComponentStory<typeof Vote> = (args) => <Vote {...args} />;

export const Default = Template.bind({});

Default.args = {
	// eslint-disable-next-line no-console
	onClick: () => console.log('clicked'),
};

export const Voted = Template.bind({});

Voted.args = {
	hasVoted: true,
	// eslint-disable-next-line no-console
	onClick: () => console.log('clicked'),
};

export const Row = Template.bind({});

Row.args = {
	// eslint-disable-next-line no-console
	onClick: () => console.log('clicked'),
	row: true,
};
