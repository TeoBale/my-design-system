import React from 'react';

import { Alert } from '@mui/material'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Mui/Alert',
    component: Alert,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        variant: {
            options : ["", "standard", "filled", "outlined"],
            control: { type: "select" },
        },
        severity: {
            options : ["error", "warning", "info", "success"],
            control: { type: "select" },
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Alert {...args}>This is an error alert — check it out!</Alert>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    severity: "error",
};

