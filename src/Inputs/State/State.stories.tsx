import React from 'react';
import { Meta, Story } from '@storybook/react';
import { State, StateProps } from '../../index';
import { createStoryTitle } from '../../Constants';
import {
    ShoppingBag,
    Payment,
    Food,
} from '@styled-icons/fluentui-system-filled';

export default {
    title: createStoryTitle('State'),
    component: State,
    args: {
        states: [
            { icon: ShoppingBag, text: 'Order' },
            { icon: Food, text: 'Food' },
            { icon: Payment, text: 'Payment' },
        ],
        colors: {
            nonFocusedIcon: '#ddd',
            focusedIcon: '#f00',
            nonFocusedText: '#aaa',
            focusedText: '#555',
        },
        currState: 0,
        size: '3em',
    },
} as Meta;

export const Basic: Story<StateProps> = (args) => <State {...args} />;
