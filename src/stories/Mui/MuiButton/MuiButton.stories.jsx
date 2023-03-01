import React from 'react';

import { Button } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Mui/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        variant: {
            options : ["text", "contained", "outlined"],
            control: { type: "select" },
        },
        color: {
            options: ["primary", "secondary", "info", "success", "warning", "error"],
            control: { type: "select" },
        },
        disabled: {
            options: [true, false],
            control: { type: "select"},
        },
        loading: {
            options: [true, false],
            control: { type: "select"},
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}>Ciao Mondo</Button>;

const TemplateIcon = (args) => <Button startIcon={<DeleteIcon/>} {...args}>Ciao Mondo</Button>;

const TemplateLoading = (args) => <Button {...args}>Ciao Mondo</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    variant: "contained",
    color: "primary",
    disabled: false,
};

export const Icon = TemplateIcon.bind({});
Icon.args = {
    variant: "contained",
    color: "primary",
    disabled: false,
}

export const Loading = TemplateLoading.bind({});
Loading.args = {
    variant: "contained",
    color: "primary",
    disabled: false,
    loading: true
}