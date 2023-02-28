import React from 'react';

import { Button } from '@mui/material'
import {string} from "prop-types";

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
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}>Ciao Mondo</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    variant: "contained"

};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "text"
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',

};

export const Small = Template.bind({});
Small.args = {
    size: 'small',

};
