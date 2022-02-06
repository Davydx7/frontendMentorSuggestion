import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Dropdown from './Dropdown';
import { Option } from './typings';

export default {
	component: Dropdown,
	title: 'Dropdown',
} as ComponentMeta<typeof Dropdown>;

const SHARED_ARGS = {
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

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.args = {
	...SHARED_ARGS,
};

export const CloseOnSelect = Template.bind({});
CloseOnSelect.args = {
	...SHARED_ARGS,
	closeOnSelect: true,
};

export const DefaultSelected = Template.bind({});
DefaultSelected.args = {
	...SHARED_ARGS,
	selected: SHARED_ARGS.options[0],
};
