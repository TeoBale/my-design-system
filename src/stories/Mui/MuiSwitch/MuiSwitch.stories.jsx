import { Switch } from '@mui/material'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Mui/Switch',
    component: Switch,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        disabled: {
            options : [true, false],
            control: { type: "select" },
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Switch {...args} defaultChecked />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    disabled: false,
};

