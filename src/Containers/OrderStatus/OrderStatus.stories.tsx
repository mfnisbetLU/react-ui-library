import React from 'react';
import { Meta, Story } from '@storybook/react';
import { OrderStatus, OrderStatusIdentifier } from './OrderStatus';
import { createStoryTitle } from '../../Constants';

export default {
    title: createStoryTitle('Order Status'),
    component: OrderStatus,
    argTypes: {
        orderStatus: {
            control: {
                type: 'radio',
                options: OrderStatusIdentifier,
            },
        },
    },
    args: {
        orderStatus: 'PLACED',
    },
} as Meta;

export const Basic: Story = (args) => <OrderStatus {...args} />;
