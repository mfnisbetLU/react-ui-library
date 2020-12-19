import React from 'react';
import {ReportIssue,IReportIssueProps }  from '../../index';
import { createStoryTitle } from '../../Constants';
import { Meta, Story } from '@storybook/react';

// TODO: ADD STATE to component
const handleSubmit = (event, option, description ) => {
    alert(option);
    event.preventDefault();
    
};


export default {
    title: createStoryTitle('Report Issue'),
    component: ReportIssue,
    argTypes: { handleSubmit: { action: 'Changed' } },
    args: {
        ReportDescription: 'description',
        options: [
            <option value="1">value 1</option>,
            <option value="2">value 2</option>,
            <option value="3">value 3</option>,
            <option value="4">value 4</option>,
            <option value="5">value 5</option>,
        ],
        handleSubmit: handleSubmit,
    },
} as Meta;

export const Basic: Story<IReportIssueProps> = (args) => <ReportIssue {...args}></ReportIssue>;


