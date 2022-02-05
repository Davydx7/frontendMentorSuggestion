import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Dropdown from './Dropdown';
import { Option } from './typings';

export default {
	component: Dropdown,
	title: 'Dropdown',
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.args = {
	closeOnSelect: true,
	isOpen: true,
	onSelect: (option: Option) => {
		// eslint-disable-next-line no-console
		console.info(option);
	},
	options: [
		{
			label: 'Suggestion',
			value: 'sggestion',
		},
		{
			label: 'Planned',
			value: 'planned',
		},
		{
			label: <span>In Progress</span>,
			value: 'inProgress',
		},
		{
			label: 'Live',
			value: 'live',
		},
	],
	placehoderText: 'Please select',
};
