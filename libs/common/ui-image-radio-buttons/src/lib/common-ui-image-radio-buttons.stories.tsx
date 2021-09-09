import { Story, Meta } from '@storybook/react';
import {
  CommonUiImageRadioButtons,
  CommonUiImageRadioButtonsProps,
} from './common-ui-image-radio-buttons';

export default {
  component: CommonUiImageRadioButtons,
  title: 'CommonUiImageRadioButtons',
  argTypes: {
    onChange: { action: 'onChange executed!' },
  },
} as Meta;

const Template: Story<CommonUiImageRadioButtonsProps> = (args) => (
  <CommonUiImageRadioButtons {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  label: '',
};
