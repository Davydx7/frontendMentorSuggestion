import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Tag from './Tag';

export default {
	component: Tag,
	title: 'Tag',
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
	clickable: false,
	label: 'Feature',
	// eslint-disable-next-line no-console
	onClick: () => console.log('clicked'),
};

export const Clickable = Template.bind({});

Clickable.args = {
	clickable: true,
	label: 'Feature',
	// eslint-disable-next-line no-console
	onClick: () => console.log('clicked'),
};

export const Selected = Template.bind({});

Selected.args = {
	clickable: true,
	isSelected: true,
	label: 'Feature',
	// eslint-disable-next-line no-console
	onClick: () => console.log('clicked'),
};
