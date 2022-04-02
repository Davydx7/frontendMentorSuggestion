import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Header from './Header';

export default {
	component: Header,
	title: 'Header',
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
	type: 'suggestion',
};

export const Roadmap = Template.bind({});

Roadmap.args = {
	type: 'roadmap',
};
