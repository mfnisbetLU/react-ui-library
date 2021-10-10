import React from 'react';
import { Meta, Story } from '@storybook/react';
import { State, StateProps } from '../../index';
import { createStoryTitle } from '../../Constants';
import { ShoppingBag, Payment, Food } from '@styled-icons/fluentui-system-filled';

export default {
    title: createStoryTitle('State'),
    component: State,
    args: {
        states: [ShoppingBag, Food, Payment],
        colors: ['#ddd', '#f00'],
        currentState: 0,
        size: '3em',
    },
} as Meta;

export const Basic: Story<StateProps> = (args) => <State {...args} />;

/* cases
state 0, 1, 2, ...
colours
size
*/
