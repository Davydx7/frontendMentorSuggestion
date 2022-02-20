import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import BackLink from './BackLink';

export default {
	component: BackLink,
	title: 'BackLink',
} as ComponentMeta<typeof BackLink>;

const Template: ComponentStory<typeof BackLink> = (args) => <BackLink {...args} />;

export const Dark = Template.bind({});

Dark.args = {
	to: '/',
	type: 'dark',
};

export const Light = Template.bind({});

Light.args = {
	to: '/',
	type: 'light',
};
