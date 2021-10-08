import React from 'react';
import { Meta, Story } from '@storybook/react';
import { State, StateProps } from '../../index';
import { createStoryTitle } from '../../Constants';

export default {
    title: createStoryTitle('State'),
    component: State,
    args: {
        label: 'state',
        description: 'description',
    },
} as Meta;

export const Basic: Story<StateProps> = (args) => <State {...args} />;

/* cases
state 0, 1, 2, ...
colours
size
*/
