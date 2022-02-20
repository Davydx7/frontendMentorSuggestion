import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Sidebar from './Sidebar';

export default {
	component: Sidebar,
	title: 'Sidebar',
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});

Default.args = {
};
